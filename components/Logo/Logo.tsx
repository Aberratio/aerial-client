import { Box } from '@mantine/core';
import { FullLogo } from './images/FullLogo';
import classes from './Logo.module.css';

interface LogoProps {
  size?: number;
  onClick?: () => void;
}

export const Logo = ({ size = 60, onClick }: LogoProps) => {
  return (
    <Box
      className={classes.shape}
      w={size}
      h={size}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <FullLogo />
    </Box>
  );
};
