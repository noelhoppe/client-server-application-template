// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My client-server application',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/yourusername/client-server-application' }],
			sidebar: [
				{
					label: "README",
					slug: "readme"
				},
				{
					label: "CONTRIBUTING",
					slug: "contributing",
				},
				{
					label: 'AGENTS',
					slug: 'agents',
				},
				{
					label: 'Pull Request Template',
					slug: 'pull_request_template'
				},
				{
					label: "wiki",
					items: [
						{
							autogenerate: { directory: 'wiki' }
						}
					]
				},
				{
					label: "skills",
					items: [
						{
							autogenerate: { directory: 'skills' }
						}
					]
				}
			],
		}),
	],
	redirects: {
		"/": "/readme"
	}
});
