import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
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