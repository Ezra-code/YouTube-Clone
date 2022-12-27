import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
const Feed = () => {
  return (
    <Stack sx={{ flexDirecction: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        side bar
        <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}}>
          copyright 2022
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;