import { useState } from "react";

export function useToast(duration = 2800) {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), duration);
  };

  return { visible, show };
}
