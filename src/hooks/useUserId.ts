import { useState, useEffect } from "react";

export const useUserId = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const saveUserId = localStorage.getItem("newData");
    if (saveUserId) {
      setUserId(saveUserId);
    }
  }, []);
  return userId;
};
