import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, url }) => {
        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const mobile = formData.get('mobile');
        const project = formData.get('project');

        if (!name || !email || !mobile || !project) {
            return fail(400, { error: 'All fields are required.' });
        }

        let origin = url.origin;
		if (url.origin.includes('localhost')) origin = 'https://puspanjali-dev.netlify.app/';

        console.log(url);
        

        try {
			const response = await fetch(`${origin}/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: new URLSearchParams(formData).toString()
			});

			const data = await response.text();

			if (response.status !== 200)
				return fail(response.status, {
					postFail: true,
					err: `Something went wrong, please try again., Error: ${data}`,
					name,
					email,
					mobile,
					project
				});

			return { success: true };
		} catch (err) {
			console.log('error: ', err);
			return fail(500, { postFail: true, err, name, email, mobile, project });
		}
    }
};