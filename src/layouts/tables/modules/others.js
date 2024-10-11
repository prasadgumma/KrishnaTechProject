// import React, { useState } from "react";
// import { Box, Grid, Typography } from "@mui/material";

// function Others() {
//   // Initialize 10 numbers on the left side
//   const initialNumbers = Array.from({ length: 10 }, (_, index) => index + 1);
//   const [positions, setPositions] = useState(
//     initialNumbers.map(() => "left") // Track which side (left/right) each number is on
//   );

//   const handleClick = (index) => {
//     setPositions((prevPositions) =>
//       prevPositions.map((pos, i) => (i === index ? (pos === "left" ? "right" : "left") : pos))
//     );
//   };

//   return (
//     <Grid container spacing={2} sx={{ marginTop: "50px" }}>
//       {/* Left Side */}
//       <Grid item xs={6}>
//         <Box textAlign="center" border={1} p={2}>
//           {positions.map((pos, index) => (
//             <Box
//               key={index}
//               mb={2}
//               onClick={() => handleClick(index)}
//               sx={{
//                 cursor: "pointer",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               {pos === "left" && (
//                 <Typography variant="h6" sx={{ width: "50px" }}>
//                   {index + 1}
//                 </Typography>
//               )}
//             </Box>
//           ))}
//         </Box>
//       </Grid>

//       {/* Right Side */}
//       <Grid item xs={6}>
//         <Box textAlign="center" border={1} p={2}>
//           {positions.map((pos, index) => (
//             <Box
//               key={index}
//               mb={2}
//               onClick={() => handleClick(index)}
//               sx={{
//                 cursor: "pointer",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               {pos === "right" && (
//                 <Typography variant="h6" sx={{ width: "50px" }}>
//                   {index + 1}
//                 </Typography>
//               )}
//             </Box>
//           ))}
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }

// export default Others;

import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

function Others() {
  // Initialize 10 numbers on the left side
  const initialNumbers = Array.from({ length: 10 }, (_, index) => index + 1);
  const [positions, setPositions] = useState(initialNumbers.map(() => "left")); // Track which side (left/right) each number is on
  const [numbers, setNumbers] = useState(initialNumbers); // Track the numbers

  const handleClick = (index) => {
    setPositions((prevPositions) =>
      prevPositions.map((pos, i) => (i === index ? (pos === "left" ? "right" : "left") : pos))
    );
  };

  const handleNumberChange = (index) => {
    setNumbers((prevNumbers) =>
      prevNumbers.map((num, i) => (i === index ? (num === 10 ? 1 : num + 1) : num))
    );
  };

  return (
    <Grid container spacing={2} sx={{ marginTop: "50px" }}>
      {/* Left Side */}
      <Grid item xs={6}>
        <Box textAlign="center" border={1} p={2}>
          {positions.map((pos, index) => (
            <Box key={index} mb={2} onClick={() => handleClick(index)} sx={{ cursor: "pointer" }}>
              {pos === "left" && (
                <Typography variant="h6">
                  {numbers[index]}
                  <Button onClick={() => handleNumberChange(index)}></Button>
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Grid>

      {/* Right Side */}
      <Grid item xs={6}>
        <Box textAlign="center" border={1} p={2}>
          {positions.map((pos, index) => (
            <Box key={index} mb={2} onClick={() => handleClick(index)} sx={{ cursor: "pointer" }}>
              {pos === "right" && (
                <Typography variant="h6">
                  {numbers[index]}
                  <Button onClick={() => handleNumberChange(index)}>Change Number</Button>
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
export default Others;
