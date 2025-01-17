import Box from "@mui/material/Box";
import { FC, ReactNode } from "react";

import { SxProps } from "@mui/material";

const Hero: FC<{
  sx: SxProps;
  children: ReactNode;
}> = ({ sx, children }) => {
  return (
    <Box
      sx={{
        mt: "-72px !important",
        position: "relative",
        ...sx,
      }}
    >
      <Box
        sx={{
          height: "100%",
          pt: {
            xs: 10,
            sm: 10,
            md: 15,
            lg: 15,
            xl: 15,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Hero;
