

import { projects } from '$lib/data/projects.js';

/** @type {import('./$types').Actions} */


export const load = ({ params }) => {
	// filter project by slug, match the slug against the params
	const slug = params.slug;
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		throw new Error(`Project not found: ${slug}`);
	}

	return { project };
};