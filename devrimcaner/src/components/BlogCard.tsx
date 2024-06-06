import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';

const titleCharLimit = 64;
const descriptionCarLimit = 240;

const BlogCard: React.FC<BlogPost> = ( post:BlogPost) => {

  const getDescription = () => {
    
    if (post.description) return post.description.replace(/<[^>]+>/g, '');
    if (post.content) return post.content.replace(/<[^>]+>/g, '');
    if (post['content:encoded']) return post['content:encoded'].replace(/<[^>]+>/g, '');
    return '-';
  };

  const getImage = () =>{
    let defaultImage = 'https://placehold.co/600x400?text=' + post.title.replace(/<[^>]+>/g, '').replace('&', '');
    let textContent = '';
    if (post['content:encoded']) textContent = post['content:encoded'];
    if (post.content) textContent = post.content;
    if (post.description) textContent = post.description;

    const parser = new DOMParser();
    const doc = parser.parseFromString(textContent.substring(0, textContent.length / 2), 'text/html');
    const img = doc.querySelector('img');
    return img ? img.getAttribute('src') || defaultImage : defaultImage;
  }
  
  return (
    <Card style={{height:'460px'}}>
      <Grid container>
        <Grid item xs={12}>
          <a href={post.link} style={{textDecoration:"none"}}>
            <CardMedia
              component="img"
              height="100%"
              image={getImage()}
              alt={post.title}
              style={{maxHeight:'200px'}}
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
              {getDescription().substring(0,descriptionCarLimit) + '...'}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default BlogCard;
