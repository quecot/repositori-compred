import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import Resource from '../interfaces/resource';

const useResources = () => {
  const [resources, setResources] = useState<Array<Resource>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data, error } = await supabase
          .from('resources')
          .select('*')
          .order('createdAt', { ascending: false });

        if (error) throw error;

        if (data === null) { return; }

        setResources(data);
      } finally {
        setLoading(false);
      }
    }

    fetchResources();
  }, []);

  return { resources, setResources, loading };
}

export default useResources;
