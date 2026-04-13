import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 2,
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Typography>
        © {new Date().getFullYear()} All Rights Reserved | My Website
      </Typography>
    </Box>
  );
}