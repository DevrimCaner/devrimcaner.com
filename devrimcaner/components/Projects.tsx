import { Box, Typography, Card, Link } from '@mui/joy';

type Project = {
  name: string;
  description: string;
  link: string;
};

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => (
  <Box sx={{ mb: 6 }}>
    <Typography level="h2">Projects</Typography>
    {projects.map((project) => (
      <Card key={project.name} sx={{ mt: 2 }}>
        <Typography level="title-lg">{project.name}</Typography>
        <Typography level="body-sm">{project.description}</Typography>
        <Link href={project.link} target="_blank" sx={{ mt: 1 }}>
          View Project
        </Link>
      </Card>
    ))}
  </Box>
);

export default Projects;
