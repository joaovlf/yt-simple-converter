"use client";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal: React.FC<{
  children: ReactNode;
  containerId?: string;
}> = ({ children, containerId = "portal-root" }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const el = document.getElementById(containerId);
    if (el) {
      setContainer(el);
      setMounted(true);
    }
  }, [containerId]);

  if (!mounted || !container) return null;

  return createPortal(children, container);
};
