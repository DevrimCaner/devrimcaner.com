import Image from 'next/image';
import { Box, Card, Chip, Typography } from '@mui/joy';
import type { Certificate } from '../lib/portfolio';

type Props = {
  certificate: Certificate;
  verifiedLabel: string;
  completedLabel: string;
};

/**
 * Compact certificate/badge card. Mirrors the Project and Experience
 * card styling (outlined Card, same radius/border) so the new
 * Certificates section blends into the existing design language, with
 * a tighter, badge-forward layout: badge on top, clamped two-line title,
 * and the status chip pinned to the bottom-right corner. Clamping the
 * title to two lines keeps every card the same height regardless of how
 * long the certificate name is, instead of letting one long title stretch
 * the whole row.
 */
const CertificateCard = ({ certificate, verifiedLabel, completedLabel }: Props) => {
  const { title, badge, verified } = certificate;
  // Keep public-asset paths relative, matching the "./profile.jpg" pattern
  // already used elsewhere so the static export stays portable.
  const badgeSrc = badge.startsWith('/') ? `.${badge}` : badge;
  const statusLabel = verified ? verifiedLabel : completedLabel;

  return (
    <Card
      variant="outlined"
      sx={{
        px: 3,
        pt: 2.5,
        pb: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 1,
        transition: 'transform 0.2s ease, border-color 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'primary.outlinedBorder',
        },
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: 72,
          height: 72,
          borderRadius: 'sm',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: 'background.surface',
        }}
      >
        <Image
          alt={`${title} certificate badge`}
          fill
          loading="lazy"
          sizes="72px"
          src={badgeSrc}
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Typography
        component="h3"
        level="title-sm"
        title={title}
        sx={{
          width: '100%',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          lineHeight: 1.35,
        }}
      >
        {title}
      </Typography>

      <Box sx={{ mt: 'auto', pt: 0.5, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <Chip
          aria-label={`Verification status: ${statusLabel}`}
          color={verified ? 'success' : 'neutral'}
          size="sm"
          variant="soft"
        >
          {verified ? `✓ ${verifiedLabel}` : completedLabel}
        </Chip>
      </Box>
    </Card>
  );
};

export default CertificateCard;
