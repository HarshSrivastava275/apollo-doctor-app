import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  // Load Bootstrap JS client-side only
  if (typeof window !== 'undefined') {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }

  return <Component {...pageProps} />;
}

export default MyApp;
