import { IconButton } from '@mui/joy';
import { IconArrowUp } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

// Shown once the user has scrolled past the About section (so it never
// overlaps the hero/intro), hidden again at the top of the page.
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const aboutEl = document.getElementById('about');
    if (!aboutEl) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.boundingClientRect.bottom < 0);
      },
      { threshold: 0 },
    );

    observer.observe(aboutEl);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    // No explicit `behavior` here on purpose: globals.css sets
    // `scroll-behavior: smooth` (and drops to `auto` under
    // prefers-reduced-motion), so the effective behavior follows that
    // single source of truth instead of duplicating it here.
    window.scrollTo({ top: 0 });
  };

  return (
    <IconButton
      aria-hidden={!visible}
      aria-label="Scroll to top"
      color="primary"
      onClick={scrollToTop}
      tabIndex={visible ? 0 : -1}
      variant="solid"
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        zIndex: 900,
        borderRadius: '50%',
        boxShadow: 'md',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity .2s ease, transform .2s ease',
      }}
    >
      <IconArrowUp aria-hidden="true" size={20} />
    </IconButton>
  );
};

export default ScrollToTopButton;
