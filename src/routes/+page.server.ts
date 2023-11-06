import {redirect} from "@sveltejs/kit"

import type { Actions } from '@sveltejs/kit';

import {error} from '@sveltejs/kit'

  export const actions: Actions = {
    contact: async ({ request }) => {
        console.log(request.formData);
    },
    
} satisfies Actions;
