import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';

const titleCharLimit = 64;
const descriptionCarLimit = 280;
const getDescription = (post: BlogPost) => {
  if (post.description) return post.description.replace(/<[^>]+>/g, '');
  if (post.content) return post.content.replace(/<[^>]+>/g, '');
  if (post['content:encoded']) return post['content:encoded'].replace(/<[^>]+>/g, '');
  return '-';
};

const BlogCard: React.FC<BlogPost> = ( post:BlogPost) => {
  
  return (
    <Card style={{height:'400px'}}>
      <Grid container>
        <Grid item xs={12}>
          <a href={post.link} style={{textDecoration:"none"}}>
            <CardMedia
              component="img"
              height="100%"
              image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*N7oZkHkXCt6S_ElRbsIyrQ.jpeg"
              alt={post.title}
            />
          </a>
        </Grid>
        <Grid item xs={12}>
          <CardContent>
            <Typography variant="h5" component="div">
              <a href={post.link} style={{textDecoration:"none", color:"#333"}}>
                {post.title.length <= titleCharLimit ? (post.title
                ) : (post.title.substring(0,titleCharLimit) + '...')}
              </a>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {new Date(post.pubDate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">
              {getDescription(post).substring(0,descriptionCarLimit) + '...'}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default BlogCard;
