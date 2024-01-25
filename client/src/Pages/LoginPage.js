import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import UnstyledButtonCustom from "../Components/UnstyledButtonCustom"; // Adjust the import path

const LoginPage = () => {
  const [registerNo, setRegisterNo] = useState("");

  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={0} md={7}>
            <Box className="h-full flex">
              <Box className="justify-center items-center p-20">
                <lottie-player
                  src="https://lottie.host/a9e20d92-f345-408a-92a6-8095aa9dfdfe/57xq7gY6kA.json"
                  background="##FFFFFF"
                  speed="1"
                  loop
                  autoplay
                  direction="1"
                  mode="normal"
                ></lottie-player>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={0} md={5}>
            <Box className="bg-cyan-400 h-full p-10">
              <Box className="bg-white p-5 rounded ">
                <img src="https://res.cloudinary.com/dtjg2hgky/image/upload/v1706127292/vit_logo_png_ybgruu.png" />
              </Box>
              <Box className="bg-white p-5 rounded mt-10 justify-center items-center">
                <Box className="text-center font-base">
                  <Typography variant="h5">
                    Attendance Recording System
                  </Typography>
                  <br />
                  <Typography variant="h5">Dr. Rachit Chandak</Typography>
                  <Typography variant="h6">BCSE428P</Typography>
                </Box>
                <Box className="p-10 flex">
                  <Box className="justify-center items-center">
                    <TextField
                      fullWidth
                      label="Register Number"
                      value={registerNo}
                      onChange={(e) => setRegisterNo(e.target.value)}
                      margin="normal"
                      variant="outlined"
                    />
                    <Box>
                      <UnstyledButtonCustom>Submit</UnstyledButtonCustom>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginPage;
