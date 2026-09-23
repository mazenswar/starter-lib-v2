// components/sections/contactForm/ContactForm.js
"use client";
import { useState, useRef, useEffect } from "react";
import { submitContactForm } from "@/app/actions/contact";
import "./contactForm.scss";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({
	heading,
	subheading,
	fields,
	privacyNotice,
	acknowledgmentLabel,
	errorMessages,
	submitText,
	loadingText,
	requiredNote,
	successHeading,
	successMessage,
	resetText,
}) {
	const [status, setStatus] = useState("idle"); // idle | loading | success | error
	const [errorMessage, setErrorMessage] = useState("");
	const [errors, setErrors] = useState({});
	const formRef = useRef(null);
	const errorRef = useRef(null);

	useEffect(() => {
		if (status === "error" && errorRef.current) {
			errorRef.current.focus();
		}
	}, [status]);

	function validate(formData) {
		const errs = {};
		const name = formData.get("name")?.toString().trim();
		const email = formData.get("email")?.toString().trim();
		const message = formData.get("message")?.toString().trim();
		const acknowledged = formData.get("acknowledgment") === "yes";

		if (!name) errs.name = errorMessages.name;
		if (!email) errs.email = errorMessages.email;
		else if (!EMAIL_REGEX.test(email)) errs.email = errorMessages.emailInvalid;
		if (!message) errs.message = errorMessages.message;
		if (!acknowledged) errs.acknowledgment = errorMessages.acknowledgment;

		return errs;
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setStatus("loading");
		setErrorMessage("");

		const formData = new FormData(formRef.current);
		const errs = validate(formData);

		if (Object.keys(errs).length > 0) {
			setErrors(errs);
			setStatus("idle");
			return;
		}

		setErrors({});
		const result = await submitContactForm(formData);

		if (result.success) {
			setStatus("success");
			formRef.current?.reset();
		} else {
			setStatus("error");
			setErrorMessage(result.error);
		}
	}

	return (
		<section className="block contact-form" aria-labelledby="contact-heading">
			<div className="block__content container">
				<div className="contact-form__layout">
					{/* Left: heading and context */}
					<div className="contact-form__intro">
						<h2 id="contact-heading">{heading}</h2>
						<p className="contact-form__sub">{subheading}</p>
					</div>

					{/* Right: form or success state */}
					<div className="contact-form__body">
						{status === "success" ? (
							<div className="contact-form__success" role="alert">
								<div className="contact-form__success-icon" aria-hidden="true">
									✓
								</div>
								<h3>{successHeading}</h3>
								<p>{successMessage}</p>
								<button
									type="button"
									className="btnGhost"
									onClick={() => setStatus("idle")}
								>
									{resetText}
								</button>
							</div>
						) : (
							<form
								ref={formRef}
								onSubmit={handleSubmit}
								noValidate
								aria-labelledby="contact-heading"
								aria-describedby="contact-privacy-notice"
							>
								{/* Privacy notice — this form is not HIPAA secure */}
								<div
									id="contact-privacy-notice"
									className="contact-form__notice"
								>
									<p className="contact-form__notice-title">
										{privacyNotice.title}
									</p>
									<p>{privacyNotice.text}</p>
								</div>

								{/* Name */}
								<div className="contact-form__field">
									<label htmlFor="contact-name">
										{fields.name.label}
										<span className="contact-form__required" aria-hidden="true">
											{" "}
											*
										</span>
									</label>
									<input
										id="contact-name"
										name="name"
										type="text"
										placeholder={fields.name.placeholder}
										autoComplete="name"
										aria-required="true"
										disabled={status === "loading"}
										aria-invalid={errors.name ? "true" : "false"}
										aria-describedby={errors.name ? "contact-name-error" : undefined}
									/>
									{errors.name && (
										<span
											id="contact-name-error"
											className="contact-form__field-error"
											role="alert"
										>
											{errors.name}
										</span>
									)}
								</div>

								{/* Email */}
								<div className="contact-form__field">
									<label htmlFor="contact-email">
										{fields.email.label}
										<span className="contact-form__required" aria-hidden="true">
											{" "}
											*
										</span>
									</label>
									<input
										id="contact-email"
										name="email"
										type="email"
										placeholder={fields.email.placeholder}
										autoComplete="email"
										aria-required="true"
										disabled={status === "loading"}
										aria-invalid={errors.email ? "true" : "false"}
										aria-describedby={
											errors.email ? "contact-email-error" : undefined
										}
									/>
									{errors.email && (
										<span
											id="contact-email-error"
											className="contact-form__field-error"
											role="alert"
										>
											{errors.email}
										</span>
									)}
								</div>

								{/* Message */}
								<div className="contact-form__field">
									<label htmlFor="contact-message">
										{fields.message.label}
										<span className="contact-form__required" aria-hidden="true">
											{" "}
											*
										</span>
									</label>
									<textarea
										id="contact-message"
										name="message"
										rows={5}
										placeholder={fields.message.placeholder}
										aria-required="true"
										disabled={status === "loading"}
										aria-invalid={errors.message ? "true" : "false"}
										aria-describedby={
											errors.message ? "contact-message-error" : undefined
										}
									/>
									{errors.message && (
										<span
											id="contact-message-error"
											className="contact-form__field-error"
											role="alert"
										>
											{errors.message}
										</span>
									)}
								</div>

								{/* PHI acknowledgment */}
								<div className="contact-form__field contact-form__field--checkbox">
									<div className="contact-form__checkbox">
										<input
											id="contact-acknowledgment"
											name="acknowledgment"
											type="checkbox"
											value="yes"
											aria-required="true"
											disabled={status === "loading"}
											aria-invalid={errors.acknowledgment ? "true" : "false"}
											aria-describedby={
												errors.acknowledgment
													? "contact-acknowledgment-error"
													: undefined
											}
										/>
										<label htmlFor="contact-acknowledgment">
											{acknowledgmentLabel}
											<span className="contact-form__required" aria-hidden="true">
												{" "}
												*
											</span>
										</label>
									</div>
									{errors.acknowledgment && (
										<span
											id="contact-acknowledgment-error"
											className="contact-form__field-error"
											role="alert"
										>
											{errors.acknowledgment}
										</span>
									)}
								</div>

								{/* Submission error */}
								{status === "error" && (
									<div
										className="contact-form__error"
										ref={errorRef}
										tabIndex={-1}
										role="alert"
									>
										{errorMessage}
									</div>
								)}

								{/* Submit */}
								<button
									type="submit"
									className="btnPrimary"
									disabled={status === "loading"}
									aria-busy={status === "loading"}
								>
									{status === "loading" ? loadingText : submitText}
								</button>

								<p className="contact-form__note">{requiredNote}</p>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
