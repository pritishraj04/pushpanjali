import { projects } from '$lib/data/projects.js';
import { fail } from '@sveltejs/kit';

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

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const mobile = formData.get('mobile');
        const project = formData.get('project');

        if (!name || !email || !mobile || !project) {
            return fail(400, { error: 'All fields are required.' });
        }

        // Process the form data (e.g., save to database, send email, etc.)
        console.log('Form submitted:', { name, email, mobile, project });

        return { success: true };
    }
};