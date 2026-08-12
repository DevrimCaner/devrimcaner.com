import { Box, Typography } from '@mui/joy';
import CertificateCard from './CertificateCard';
import type { Certificate } from '../lib/portfolio';

type Props = {
  heading: string;
  verifiedLabel: string;
  completedLabel: string;
  certificates: Certificate[];
};

const Certificates = ({ heading, verifiedLabel, completedLabel, certificates }: Props) => {
  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <Box aria-labelledby="certificates-heading" component="section" id="certificates" sx={{ mb: 8 }}>
      <Typography id="certificates-heading" level="h2" sx={{ mb: 2 }}>
        {heading}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            certificate={certificate}
            completedLabel={completedLabel}
            verifiedLabel={verifiedLabel}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Certificates;
