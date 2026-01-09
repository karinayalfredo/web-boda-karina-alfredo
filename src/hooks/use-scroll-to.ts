import { useCallback } from 'react';

export function useScrollTo() {
  const scrollToId = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header (approx 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  return { scrollToId };
}
