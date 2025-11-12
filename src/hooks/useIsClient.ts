"use client";

import { useState, useEffect } from "react";

/**
 * Hook để kiểm tra xem component có đang render trên client không
 * Giúp tránh hydration mismatch khi sử dụng browser APIs
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
