import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site:"https://parlier-njrotc.github.io/Dashboard/",
    base:"Dashboard/",
    experimental:{
        env:{
            schema:{
                API_URL:envField.string({
                    context:"client",
                    access:"public"
                })
            }

        }
    }
});