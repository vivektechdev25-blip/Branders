import { useEffect } from 'react';

/**
 * Custom hook to update document title and meta description dynamically per route.
 * @param {string} title - The browser title
 * @param {string} description - The meta description
 */
export default function usePageSEO(title, description) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);
}
