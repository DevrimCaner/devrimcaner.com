import React from 'react';
import { Container, Grid} from '@mui/material';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Project Name',
        date: '2023-05-01',
        type: 'Web Development',
        description: 'This is a Project.',
        image: 'https://via.placeholder.com/150'
    },
    {
        title: 'Project Name',
        date: '2023-06-15',
        type: 'Mobile App',
        description: 'This is a Project.',
        image: 'https://via.placeholder.com/150'
    },
    {
        title: 'Project Name',
        date: '2023-07-20',
        type: 'Data Science',
        description: 'This is a Project.',
        image: 'https://via.placeholder.com/150'
    },
    {
        title: 'Project Name',
        date: '2023-07-20',
        type: 'Data Science',
        description: 'This is a Project.',
        image: 'https://via.placeholder.com/150'
    },
    {
        title: 'Project Name',
        date: '2023-07-20',
        type: 'Data Science',
        description: 'This is a Project.',
        image: 'https://via.placeholder.com/150'
    },
    {
        title: 'Project Name',
        date: '2023-07-20',
        type: 'Data Science',
        description: 'This is a Project.',
        image: 'https://via.placeholder.com/150'
    }
];

const ProjectsPage = () => {
    return (
        <>
        <NavBar />
        <Container>
            <h1>Projects</h1>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <ProjectCard project={{title: 'Project Name', date: '2023-07-20', type: 'Data Science', description: 'This is a Project.', image: 'https://via.placeholder.com/150'}} />
                ))}
            </Grid>
        </Container>
        <Footer />
        </>
    );
}

export default ProjectsPage;
