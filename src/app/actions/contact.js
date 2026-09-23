// app/actions/contact.js
"use server";
import site from "../../../config/site";

export async function submitContactForm(formData) {
	const name = formData.get("name")?.toString().trim();
	const email = formData.get("email")?.toString().trim();
	const message = formData.get("message")?.toString().trim();
	const acknowledged = formData.get("acknowledgment") === "yes";

	// Basic validation
	if (!name || !email || !message || !acknowledged) {
		return {
			success: false,
			error: "Please fill in all required fields.",
		};
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return {
			success: false,
			error: "Please enter a valid email address.",
		};
	}

	try {
		const res = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
			},
			body: JSON.stringify({
				// The from address must be on a domain verified in Resend
				from: `Contact Form <noreply@${new URL(site.url).hostname.replace(/^www\./, "")}>`,
				to: site.email,
				reply_to: email,
				subject: `New inquiry from ${name}`,
				text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
				html: `
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<br />
					<p><strong>Message:</strong></p>
					<p>${message.replace(/\n/g, "<br />")}</p>
				`,
			}),
		});

		if (!res.ok) {
			throw new Error("Failed to send email");
		}

		return { success: true };
	} catch (err) {
		console.error("Contact form error:", err);
		return {
			success: false,
			error: "Something went wrong. Please try again or email us directly.",
		};
	}
}
