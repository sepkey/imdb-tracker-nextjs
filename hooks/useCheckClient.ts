'use client';

import { useEffect, useState } from 'react';

export default function useCheckClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return { isClient };
}
