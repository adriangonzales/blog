export default defineNuxtConfig({
    app: {
        baseURL: '/',
        buildAssetsDir: '_nuxt'
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    css: ['/assets/css/main.css'],
    router: {
        options: {
            strict: false
        }
    },
    sourcemap: false,
    content: {
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            theme: 'github-dark',
            preload: ['java','javascript']
        },
        markdown: {
            // https://github.com/rehypejs/rehype-external-links
            rehypePlugins: [
                [
                    'rehype-external-links',
                    {
                        target: '_blank',
                        rel: 'noopener noreferer'
                    }
                ]
            ]
        }
    },
    routeRules: {
        "/2015/02/28/starting-again.html": {
            redirect: {
                to: "/blog/2015-02-28-starting-again/",
                statusCode: 301,
            },
        },
        "/2015/10/08/better-wordpress-cron-jobs-crontab-wpcli.html": {
            redirect: {
                to: "/blog/2015-10-08-better-wordpress-cron-jobs-crontab-wpcli/",
                statusCode: 301,
            },
        },
    },
});
