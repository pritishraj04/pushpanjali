export const prerender = false;


export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        // Process form data
        console.log(formData);
    }
};