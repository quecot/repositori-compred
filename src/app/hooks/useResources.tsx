import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const useResources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data, error } = await supabase
          .from('resources')
          .select('*');

        if (error) throw error;
        // setResources(data);
      } catch (error) {
        // setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchResources();
  }, []);

  return { resources, loading, error };
}

export default useResources;
