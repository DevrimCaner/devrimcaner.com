import { Box, Typography } from '@mui/joy';

type Props = { description: string | string[] };

/**
 * Renders a description field that can be either a single paragraph
 * (string) or a list of points (string[]). Used by Experience and
 * Projects so both sections stay visually and behaviorally consistent.
 */
const Description = ({ description }: Props) => {
  if (Array.isArray(description)) {
    return (
      <Box
        component="ul"
        sx={{
          listStyle: 'none',
          margin: '12px 0 0',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        {description.map((item) => (
          <Typography
            component="li"
            key={item}
            level="body-sm"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              lineHeight: 1.6,
              '&::before': {
                content: '""',
                flexShrink: 0,
                width: '6px',
                height: '6px',
                marginTop: '7px',
                borderRadius: '50%',
                backgroundColor: theme.vars.palette.primary.solidBg,
              },
            })}
          >
            {item}
          </Typography>
        ))}
      </Box>
    );
  }

  return (
    <Typography level="body-sm" sx={{ mt: 1 }}>
      {description}
    </Typography>
  );
};

export default Description;
