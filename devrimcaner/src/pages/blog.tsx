import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, CircularProgress, Box } from '@mui/material';
import BlogCard from '@/components/BlogCard';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/getMediumPosts');
        setPosts(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container style={{marginTop:50, marginBottom:50}}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BlogCard  {...post}/>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Blog;
