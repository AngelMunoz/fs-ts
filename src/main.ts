import './style.css';
import './Main.fs.js';

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
<h1>Hello Vite!</h1>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
<section id="target">Look at the console!</section>
`;
