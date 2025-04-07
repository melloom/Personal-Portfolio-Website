import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Add note about changed CSS architecture
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log("⚠️ NOTE: CSS has been changed to standard CSS instead of Tailwind directives.");
    console.log("Some components may need adjustments to work with the new CSS architecture.");
  }
  
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
