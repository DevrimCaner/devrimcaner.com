import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = () => {
    const sectionOffsets = sections.map(section => {
      const element = document.getElementById(section.id);
      return {
        id: section.id,
        offset: element ? element.offsetTop : 0,
      };
    });

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const active = sectionOffsets.find(
      section =>
        scrollPosition >= section.offset &&
        scrollPosition < section.offset + (document.getElementById(section.id)?.offsetHeight || 0)
    );

    if (active) {
      setActiveSection(active.id);
    } else {
      setActiveSection(null);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ marginTop: 4 }}>
      <List>
        {sections.map(section => (
          <ListItem
            button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            sx={{
              textDecoration: activeSection === section.id ? 'underline' : 'none',
            }}
          >
            <ListItemText primary={section.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navigation;
