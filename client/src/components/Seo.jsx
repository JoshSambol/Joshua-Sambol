import { useEffect } from 'react';
import { setMetaTags } from '../lib/seo';

// Updates document title, meta description, canonical link, and OG/Twitter
// tags for the current route. Renders nothing.
const Seo = ({ title, description, path }) => {
  useEffect(() => {
    setMetaTags({ title, description, path });
  }, [title, description, path]);

  return null;
};

export default Seo;
