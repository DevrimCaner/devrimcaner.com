import { Link, type LinkProps } from '@mui/joy';
import type { ReactNode } from 'react';

type ExternalLinkProps = Omit<LinkProps, 'children' | 'rel' | 'target'> & {
  children: ReactNode;
};

export default function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <Link {...props} rel="noopener noreferrer" target="_blank">
      {children}
    </Link>
  );
}
