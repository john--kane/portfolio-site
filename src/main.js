import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		githubURL: 'https://github.com/john--kane',
		githubImage: 'github.png',
		linkedInURL: 'https://www.linkedin.com/in/john--kane/',
		linkedInImage: 'linkedin.png',
	}
});

export default app;