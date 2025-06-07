"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#D71A21", color: "#fff", pt: 4, pb: 3 }}>
      <Container maxWidth="lg">
        <Stack
          direction={isSmall ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          textAlign={isSmall ? "center" : "left"}
        >
          <Box>
            <Typography variant="body1">📧 info@sweepstouch.com</Typography>
          </Box>
        </Stack>

        <Box mt={3} textAlign="center">
          <Typography variant="caption" color="white">
            © {new Date().getFullYear()} Shop Fair Supermarket . All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
