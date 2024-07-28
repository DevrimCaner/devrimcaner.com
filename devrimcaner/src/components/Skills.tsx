import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Rating } from '@mui/material';
import { SiJavascript, SiPhp, SiMysql, SiPython, SiLinux, SiUnity, SiCsharp, SiGit, SiHtml5, SiCss3 } from "react-icons/si";

const skills = [
  {
    icon: <SiJavascript />,
    title: 'JavaScript',
    rating: 4,
  },
  {
    icon: <SiPhp />,
    title: 'PHP',
    rating: 4
  },
  {
    icon: <SiMysql />,
    title: 'MySql',
    rating: 3.5
  },
  {
    icon: <SiPython />,
    title: 'Python',
    rating: 3
  },
  {
    icon: <SiLinux />,
    title: 'Linux',
    rating: 3.5
  },
  {
    icon: <SiUnity />,
    title: 'Unity',
    rating: 3
  },
  {
    icon: <SiCsharp />,
    title: 'C#',
    rating: 3
  },
  {
    icon: <SiGit />,
    title: 'Git',
    rating: 4.5
  },
  {
    icon: <SiHtml5 />,
    title: 'HTML',
    rating: 4.5
  },
  {
    icon: <SiCss3 />,
    title: 'CSS',
    rating: 3.5
  },
];

const Skills: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" component="h3" sx={{ marginTop: 5, marginBottom: 5 }} align="center">
        Skills
      </Typography>
    <Grid container spacing={2}>
      {skills.map((skill, index) => (
        <Grid item xs={12} md={2} key={index}>
            <Box align="center" sx={{ fontSize: 30}}>{skill.icon}</Box>
              <Typography variant="h6" component="h4" align="center" sx={{ marginTop: 0, fontSize: 16 }}>
                {skill.title}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                <Rating value={skill.rating} readOnly precision={0.5} sx={{ color: '#2c3e50',fontSize: 16 }} />
              </Box>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
}

export default Skills;
