import { createRoot } from '@wordpress/element';
import App from './App';

const rootElement = document.getElementById('wp-aws-media-integration');

if (rootElement) {
	const root = createRoot(rootElement);
	root.render( <App />);
}
