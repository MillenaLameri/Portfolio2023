import Box, { BoxProps } from '@mui/material/Box';

interface Props extends BoxProps {
  row?: boolean;
}

export const BoxCentralizado = ({ row = false, children, ...props }: Props) => {
  return (
    <Box
      {...props}
      display="flex"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      justifyItems="center"
      flexDirection={row ? 'row' : 'column'}
      flex={1}>
      {children}
    </Box>
  );
};

