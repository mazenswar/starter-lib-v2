import site from "../../config/site";
import therapists from "../../config/therapists";

export default function sitemap() {
	return [
		{
			url: site.url,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${site.url}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${site.url}/services`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${site.url}/therapists`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		...therapists.map((t) => ({
			url: `${site.url}/therapists/${t.slug}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		})),
		{
			url: `${site.url}/faq`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5,
		},
		...["privacy-policy", "notice-of-privacy-practices", "good-faith-estimate"].map(
			(slug) => ({
				url: `${site.url}/${slug}`,
				lastModified: new Date(),
				changeFrequency: "yearly",
				priority: 0.3,
			}),
		),
		{
			url: `${site.url}/contact`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.6,
		},
	];
}
