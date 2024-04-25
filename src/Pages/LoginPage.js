import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import UnstyledButtonCustom from "../Components/UnstyledButtonCustom"; // Adjust the import path
import { data } from "../data/data";
import toastr from "toastr";
import "toastr/build/toastr.css";
import axios from "axios";

const LoginPage = () => {
  const [registerNo, setRegisterNo] = useState("");
  const [isMatched, setIsMatched] = useState(false);

  const handleSubmit = () => {
    // Check if registerNo exists in data array
    const foundStudent = data.find((student) => student.regNo === registerNo);

    if (foundStudent) {
      // If found, set isMatched to true
      setIsMatched(true);
      // Perform any other actions if needed
      const postData = {
        registerationNo: registerNo,
      };
      axios.post("/api/v1/student/createRecord", postData);
      console.log(`Student found: ${foundStudent.name}`);
      toastr.success("Student Found");
    } else {
      // If not found, set isMatched to false
      setIsMatched(false);
      // Perform any other actions if needed
      console.log("Student not found");
      toastr.warning("Student Not Found");
    }
  };

  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={0}
            md={7}
            sx={{ display: { xs: "none", md: "block" } }}
          >
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
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              height: { xs: "100vh", md: "100%", lg: "100%" },
            }}
          >
            <Box
              className="bg-cyan-400 h-full "
              sx={{ padding: { xs: "15px", md: "30px" } }}
            >
              <Box
                className="bg-white rounded"
                sx={{ padding: { xs: "10px" }, marginTop: { xs: "20px" } }}
              >
                <img src="./logoVIT.png" alt="vitLogo" />
              </Box>
              <Box className="bg-white p-5 rounded mt-10 justify-center items-center">
                <Box className="text-center font-base">
                  <img
                    src="https://res.cloudinary.com/dtjg2hgky/image/upload/v1706210484/Teacher%27s%20Stu.png"
                    alt="Teacher's Student"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                  <Typography variant="h4">
                    Attendance Recording System
                  </Typography>
                  <br />
                  <Typography variant="h5">Dr. Jayanthi R</Typography>
                  <Typography variant="h6">BCSE301L</Typography>
                </Box>
                <Box className="p-10 flex-col">
                  <Box className="justify-center items-center">
                    <TextField
                      fullWidth
                      label="Register Number"
                      value={registerNo}
                      onChange={(e) => setRegisterNo(e.target.value)}
                      margin="normal"
                      variant="outlined"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 2,
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{ padding: "10px", width: "100%" }}
                        onClick={() => handleSubmit()}
                      >
                        Submit
                      </Button>
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
