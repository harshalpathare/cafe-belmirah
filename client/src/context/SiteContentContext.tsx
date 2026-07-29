import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchSiteContent } from '../lib/api';

type SiteContentMap = Record<string, string>;

interface SiteContentContextType {
  content: SiteContentMap;
  loading: boolean;
  refreshContent: () => Promise<void>;
}

const SiteContentContext = createContext<SiteContentContextType>({
  content: {},
  loading: true,
  refreshContent: async () => {},
});

export const useSiteContent = () => useContext(SiteContentContext);

export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContentMap>({});
  const [loading, setLoading] = useState(true);

  const loadContent = async () => {
    try {
      const res = await fetchSiteContent();
      if (res && res.success && res.data) {
        setContent(res.data);
      }
    } catch (error) {
      console.error('Failed to load site content', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  return (
    <SiteContentContext.Provider value={{ content, loading, refreshContent: loadContent }}>
      {children}
    </SiteContentContext.Provider>
  );
};
