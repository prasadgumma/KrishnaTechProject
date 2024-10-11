// Main Part

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Box,
//   Grid,
//   Card,
//   TableHead,
//   Checkbox,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings"; // Import Settings icon
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MenuIcon from "@mui/icons-material/Menu";

// const MbersTable = () => {
//   const [data, setData] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectedColumns, setSelectedColumns] = useState({
//     id: true,
//     sNo: true,
//     member: true,
//     age: true,
//     education: true,
//     fatherName: true,
//     motherName: true,
//     husbandName: true,
//     city: true,
//     profession: true,
//     description: true,
//     action: true,
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:7979/members")
//       .then((res) => {
//         sessionStorage.getItem("sessionId");
//         setData(res.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   const deleteHandle = (id) => {
//     const confirm = window.confirm("Would you like to delete?");
//     if (confirm) {
//       const sessionId = sessionStorage.getItem("sessionId");

//       axios
//         .delete(`http://localhost:7979/members/${id}`)
//         .then((res) => {
//           const updatedData = data.filter((number) => number.id !== id);
//           setData(updatedData);
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   const handleSelectAllChange = () => {
//     const newSelectAll = !selectAll; // Toggle select all
//     setSelectAll(newSelectAll);

//     if (newSelectAll) {
//       // Select all rows
//       setSelectedRows(data.map((member) => member.id));
//     } else {
//       // Deselect all rows
//       setSelectedRows([]);
//     }
//   };

//   const handleSettingsClick = () => {
//     setOpenDialog(true); // Open the dialog when Settings icon is clicked
//   };

//   const handleColumnChange = (column) => {
//     setSelectedColumns((prev) => ({
//       ...prev,
//       [column]: !prev[column],
//     }));
//   };

//   const handleClose = () => {
//     setOpenDialog(false); // Close dialog
//   };

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={4} pb={2}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <Card sx={{ position: "relative", height: "100%" }}>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={1}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h5" color="white">
//                   Members Table
//                 </MDTypography>
//               </MDBox>
//               <Box p={2}>
//                 <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
//                   <Typography variant="h5" gutterBottom textAlign={"center"}>
//                     Members List
//                   </Typography>
//                   <Button
//                     component={Link}
//                     to="/add/member"
//                     variant="contained"
//                     color="success"
//                     sx={{
//                       mr: 5,
//                       color: "#ffff",
//                       bgcolor: "#1976d2", // Blue color for Add
//                       "&:hover": {
//                         bgcolor: "#115293", // Darker blue on hover
//                       },
//                     }}
//                   >
//                     Add +
//                   </Button>
//                 </Box>
//                 <TableContainer>
//                   <Table>
//                     {/* <TableHead> */}
//                     <TableRow sx={{ bgcolor: "#5c5a59", color: "#ffff" }}>
//                       <TableCell align="center">
//                         <Checkbox
//                           checked={selectAll}
//                           onChange={handleSelectAllChange} // Handle select all
//                         />
//                         {/* Add Checkbox in header */}
//                       </TableCell>
//                       <TableCell align="center">
//                         <IconButton onClick={handleSettingsClick}>
//                           <SettingsIcon /> {/* Add Settings Icon */}
//                         </IconButton>
//                       </TableCell>
//                       {selectedColumns.id && (
//                         <TableCell align="center">
//                           <strong>ID</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.sNo && (
//                         <TableCell align="center">
//                           <strong>S.No</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.member && (
//                         <TableCell align="center">
//                           <strong>Member</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.age && (
//                         <TableCell align="center">
//                           <strong>Age</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.education && (
//                         <TableCell align="center">
//                           <strong>Education</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.fatherName && (
//                         <TableCell align="center">
//                           <strong>Father Name</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.motherName && (
//                         <TableCell align="center">
//                           <strong>Mother Name</strong>
//                         </TableCell>
//                       )}

//                       {selectedColumns.husbandName && (
//                         <TableCell align="center">
//                           <strong>Husband Name</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.city && (
//                         <TableCell align="center">
//                           <strong>City</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.profession && (
//                         <TableCell align="center">
//                           <strong>Profession</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.description && (
//                         <TableCell align="center">
//                           <strong>Description</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.action && (
//                         <TableCell align="center">
//                           <strong>Action</strong>
//                         </TableCell>
//                       )}
//                     </TableRow>
//                     {/* </TableHead> */}

//                     <TableBody>
//                       {data?.map((member, index) => (
//                         <TableRow key={index}>
//                           <TableCell align="center">
//                             <Checkbox
//                               checked={selectedRows.includes(member.id)}
//                               onChange={() => alert(`Row ID: ${member?.id}`)} // Add this onChange handler
//                             />{" "}
//                             {/* Checkbox for each row */}
//                           </TableCell>
//                           <TableCell align="center">
//                             <MenuIcon />
//                           </TableCell>
//                           {selectedColumns.id && <TableCell align="center">{member?.id}</TableCell>}
//                           {selectedColumns.sNo && <TableCell align="center">{index + 1}</TableCell>}
//                           {selectedColumns.member && (
//                             <TableCell align="center">{member?.member}</TableCell>
//                           )}
//                           {selectedColumns.age && (
//                             <TableCell align="center">{member?.age}</TableCell>
//                           )}
//                           {selectedColumns.education && (
//                             <TableCell align="center">{member?.education}</TableCell>
//                           )}
//                           {selectedColumns.fatherName && (
//                             <TableCell align="center">{member?.fatherName}</TableCell>
//                           )}
//                           {selectedColumns.motherName && (
//                             <TableCell align="center">{member?.motherName}</TableCell>
//                           )}
//                           {selectedColumns.husbandName && (
//                             <TableCell align="center">{member?.husbandName}</TableCell>
//                           )}
//                           {selectedColumns.city && (
//                             <TableCell align="center">{member?.city}</TableCell>
//                           )}
//                           {selectedColumns.profession && (
//                             <TableCell align="center">{member?.profession}</TableCell>
//                           )}
//                           {selectedColumns.description && (
//                             <TableCell width={"25%"} align="center">
//                               {member?.description}
//                             </TableCell>
//                           )}
//                           {selectedColumns.action && (
//                             <TableCell align="center">
//                               <Button
//                                 component={Link}
//                                 to={`/edit/member/${member?.id}`}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{
//                                   color: "#ffff",
//                                   mr: 1,
//                                   bgcolor: "#0288d1", // Cyan color for Edit
//                                   "&:hover": {
//                                     bgcolor: "#01579b", // Darker cyan on hover
//                                   },
//                                 }}
//                               >
//                                 Edit
//                               </Button>
//                               <Button
//                                 onClick={() => deleteHandle(member?.id)}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{
//                                   color: "#ffff",
//                                   bgcolor: "#d32f2f", // Red color for Delete
//                                   "&:hover": {
//                                     bgcolor: "#9a0007", // Darker red on hover
//                                   },
//                                 }}
//                               >
//                                 Delete
//                               </Button>
//                             </TableCell>
//                           )}
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </Box>
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>

//       {/* Dialog to select columns */}
//       <Dialog open={openDialog} onClose={handleClose}>
//         <DialogTitle>Select Table Head Columns</DialogTitle>

//         <DialogContent>
//           <Box display={"flex"} justifyContent={"space-between"}>
//             <Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.id}
//                   onChange={() => handleColumnChange("id")} // Ensure you are toggling the correct field
//                 />{" "}
//                 ID
//               </Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.sNo}
//                   onChange={() => handleColumnChange("sNo")} // Correct toggle for sNo
//                 />{" "}
//                 S.No
//               </Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.member}
//                   onChange={() => handleColumnChange("member")} // Correct toggle for member
//                 />{" "}
//                 Member
//               </Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.age}
//                   onChange={() => handleColumnChange("age")} // Correct toggle for age
//                 />{" "}
//                 Age
//               </Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.education}
//                   onChange={() => handleColumnChange("education")} // Correct toggle for education
//                 />{" "}
//                 Education
//               </Box>
//             </Box>

//             <Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.fatherName}
//                   onChange={() => handleColumnChange("fatherName")} // Correct toggle for fatherName
//                 />{" "}
//                 Father Name
//               </Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.motherName}
//                   onChange={() => handleColumnChange("motherName")} // Correct toggle for motherName
//                 />{" "}
//                 Mother Name
//               </Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.husbandName}
//                   onChange={() => handleColumnChange("husbandName")} // Correct toggle for husbandName
//                 />{" "}
//                 Husband Name
//               </Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.city}
//                   onChange={() => handleColumnChange("city")} // Correct toggle for city
//                 />{" "}
//                 City
//               </Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.profession}
//                   onChange={() => handleColumnChange("profession")} // Correct toggle for profession
//                 />{" "}
//                 Profession
//               </Box>
//             </Box>

//             <Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.description}
//                   onChange={() => handleColumnChange("description")} // Correct toggle for description
//                 />{" "}
//                 Description
//               </Box>
//               <Box>
//                 <Checkbox
//                   checked={selectedColumns.action}
//                   onChange={() => handleColumnChange("action")} // Correct toggle for action
//                 />{" "}
//                 Action
//               </Box>
//             </Box>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} variant="contained" color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </DashboardLayout>
//   );
// };

// export default MbersTable;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import {
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Box,
//   Grid,
//   Card,
//   Checkbox,
//   IconButton,
// } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MenuIcon from "@mui/icons-material/Menu";
// import Pagination from "../members/members-pagination"; // Correct import path for Pagination
// import DialogBox from "../members/member-dialogue"; // Correct import path for DialogBox

// const MembersTable = () => {
//   const [data, setData] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectedColumns, setSelectedColumns] = useState({
//     id: true,
//     sNo: true,
//     member: true,
//     age: true,
//     education: true,
//     fatherName: true,
//     motherName: true,
//     husbandName: true,
//     city: true,
//     profession: true,
//     description: true,
//     action: true,
//   });
//   const [tempSelectedColumns, setTempSelectedColumns] = useState({ ...selectedColumns });

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 25;

//   useEffect(() => {
//     axios
//       .get("http://localhost:7979/members")
//       .then((res) => setData(res.data))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleSelectAllChange = () => {
//     const newSelectAll = !selectAll;
//     setSelectAll(newSelectAll);
//     setSelectedRows(newSelectAll ? data.map((member) => member.id) : []);
//   };

//   const handleSettingsClick = () => {
//     setTempSelectedColumns({ ...selectedColumns });
//     setOpenDialog(true);
//   };

//   const handleApply = () => {
//     setSelectedColumns({ ...tempSelectedColumns });
//     setOpenDialog(false);
//   };

//   const handleClose = () => {
//     setOpenDialog(false);
//   };

//   // Function to handle delete action
//   const handleDelete = (id) => {
//     // Implement your delete logic here (API call, etc.)
//     console.log(`Delete member with ID: ${id}`);
//     // Optionally, refresh data after delete
//   };

//   // Pagination logic
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={4} pb={2}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <Card sx={{ position: "relative", height: "100%" }}>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={1}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h5" color="white">
//                   Members Table
//                 </MDTypography>
//               </MDBox>
//               <Box p={2}>
//                 <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
//                   <Typography variant="h5" gutterBottom textAlign={"center"}>
//                     Members List
//                   </Typography>
//                   <Button
//                     component={Link}
//                     to="/add/member"
//                     variant="contained"
//                     color="success"
//                     sx={{
//                       mr: 5,
//                       color: "#ffff",
//                       bgcolor: "#1976d2",
//                       "&:hover": { bgcolor: "#115293" },
//                     }}
//                   >
//                     Add +
//                   </Button>
//                 </Box>
//                 <TableContainer>
//                   <Table>
//                     <TableRow sx={{ bgcolor: "#5c5a59", color: "#ffff" }}>
//                       <TableCell align="center">
//                         <Checkbox checked={selectAll} onChange={handleSelectAllChange} />
//                       </TableCell>
//                       <TableCell align="center">
//                         <IconButton onClick={handleSettingsClick}>
//                           <SettingsIcon />
//                         </IconButton>
//                       </TableCell>
//                       {Object.keys(selectedColumns).map((column) =>
//                         selectedColumns[column] ? (
//                           <TableCell key={column} align="center">
//                             <strong>{column.replace(/([A-Z])/g, " $1")}</strong>
//                           </TableCell>
//                         ) : null
//                       )}
//                     </TableRow>
//                     <TableBody>
//                       {currentData.map((member, index) => (
//                         <TableRow key={member.id}>
//                           <TableCell align="center">
//                             <Checkbox
//                               checked={selectedRows.includes(member.id)}
//                               onChange={() => {
//                                 setSelectedRows((prev) =>
//                                   prev.includes(member.id)
//                                     ? prev.filter((id) => id !== member.id)
//                                     : [...prev, member.id]
//                                 );
//                               }}
//                             />
//                           </TableCell>
//                           <TableCell align="center">
//                             <MenuIcon />
//                           </TableCell>
//                           {selectedColumns.sNo && (
//                             <TableCell align="center">
//                               {index + 1 + (currentPage - 1) * itemsPerPage}
//                             </TableCell>
//                           )}
//                           {Object.keys(selectedColumns).map((column) =>
//                             selectedColumns[column] && column !== "sNo" ? (
//                               <TableCell key={column} align="center">
//                                 {member[column]}
//                               </TableCell>
//                             ) : null
//                           )}
//                           {selectedColumns.action && (
//                             <TableCell align="center">
//                               <Button
//                                 variant="outlined"
//                                 color="primary"
//                                 component={Link}
//                                 to={`/edit/member/${member.id}`} // Adjust to your edit route
//                                 sx={{ mr: 1 }}
//                               >
//                                 Edit
//                               </Button>
//                               <Button
//                                 variant="outlined"
//                                 color="error"
//                                 onClick={() => handleDelete(member.id)}
//                               >
//                                 Delete
//                               </Button>
//                             </TableCell>
//                           )}
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                   <Pagination
//                     currentPage={currentPage}
//                     totalPages={totalPages}
//                     onPageChange={setCurrentPage}
//                   />
//                 </TableContainer>
//               </Box>
//             </Card>
//           </Grid>
//         </Grid>
//         <DialogBox
//           open={openDialog}
//           onClose={handleClose}
//           selectedColumns={selectedColumns}
//           tempSelectedColumns={tempSelectedColumns}
//           setTempSelectedColumns={setTempSelectedColumns}
//           onApply={handleApply}
//         />
//       </MDBox>
//     </DashboardLayout>
//   );
// };

// export default MembersTable;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import {
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Box,
//   Grid,
//   Card,
//   Checkbox,
//   IconButton,
// } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MenuIcon from "@mui/icons-material/Menu";
// import Pagination from "../members/members-pagination"; // Importing Pagination component
// import DialogBox from "../members/member-dialogue"; // Importing DialogBox component

// const MembersTable = () => {
//   const [data, setData] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectedColumns, setSelectedColumns] = useState({
//     id: true,
//     sNo: true,
//     member: true,
//     age: true,
//     education: true,
//     fatherName: true,
//     motherName: true,
//     husbandName: true,
//     city: true,
//     profession: true,
//     description: true,
//     action: true,
//   });
//   const [tempSelectedColumns, setTempSelectedColumns] = useState({ ...selectedColumns });

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 25;

//   useEffect(() => {
//     axios
//       .get("http://localhost:7979/members")
//       .then((res) => setData(res.data))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleSelectAllChange = () => {
//     const newSelectAll = !selectAll;
//     setSelectAll(newSelectAll);
//     setSelectedRows(newSelectAll ? data.map((member) => member.id) : []);
//   };

//   const handleSettingsClick = () => {
//     setTempSelectedColumns({ ...selectedColumns });
//     setOpenDialog(true);
//   };

//   const handleApply = () => {
//     setSelectedColumns({ ...tempSelectedColumns });
//     setOpenDialog(false);
//   };

//   const handleClose = () => {
//     setOpenDialog(false);
//   };

//   const deleteHandle = (id) => {
//     const confirm = window.confirm("Would you like to delete?");
//     if (confirm) {
//       const sessionId = sessionStorage.getItem("sessionId");

//       axios
//         .delete(`http://localhost:7979/members/${id}`)
//         .then((res) => {
//           const updatedData = data.filter((member) => member.id !== id);
//           setData(updatedData);
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   // Pagination logic
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={4} pb={2}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <Card sx={{ position: "relative", height: "100%" }}>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={1}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h5" color="white">
//                   Members Table
//                 </MDTypography>
//               </MDBox>
//               <Box p={2}>
//                 <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
//                   <Typography variant="h5" gutterBottom textAlign={"center"}>
//                     Members List
//                   </Typography>
//                   <Button
//                     component={Link}
//                     to="/add/member"
//                     variant="contained"
//                     color="success"
//                     sx={{
//                       mr: 5,
//                       color: "#ffff",
//                       bgcolor: "#1976d2",
//                       "&:hover": { bgcolor: "#115293" },
//                     }}
//                   >
//                     Add +
//                   </Button>
//                 </Box>
//                 <TableContainer>
//                   <Table>
//                     <TableRow sx={{ bgcolor: "#5c5a59", color: "#ffff" }}>
//                       <TableCell align="center">
//                         <Checkbox checked={selectAll} onChange={handleSelectAllChange} />
//                       </TableCell>
//                       <TableCell align="center">
//                         <IconButton onClick={handleSettingsClick}>
//                           <SettingsIcon />
//                         </IconButton>
//                       </TableCell>
//                       {selectedColumns.id && (
//                         <TableCell align="center">
//                           <strong>ID</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.sNo && (
//                         <TableCell align="center">
//                           <strong>S.No</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.member && (
//                         <TableCell align="center">
//                           <strong>Member</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.age && (
//                         <TableCell align="center">
//                           <strong>Age</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.education && (
//                         <TableCell align="center">
//                           <strong>Education</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.fatherName && (
//                         <TableCell align="center">
//                           <strong>Father Name</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.motherName && (
//                         <TableCell align="center">
//                           <strong>Mother Name</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.husbandName && (
//                         <TableCell align="center">
//                           <strong>Husband Name</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.city && (
//                         <TableCell align="center">
//                           <strong>City</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.profession && (
//                         <TableCell align="center">
//                           <strong>Profession</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.description && (
//                         <TableCell align="center">
//                           <strong>Description</strong>
//                         </TableCell>
//                       )}
//                       {selectedColumns.action && (
//                         <TableCell align="center">
//                           <strong>Action</strong>
//                         </TableCell>
//                       )}
//                     </TableRow>
//                     <TableBody>
//                       {currentData.map((member, index) => (
//                         <TableRow key={member.id}>
//                           <TableCell align="center">
//                             <Checkbox
//                               checked={selectedRows.includes(member.id)}
//                               onChange={() => {
//                                 setSelectedRows((prev) =>
//                                   prev.includes(member.id)
//                                     ? prev.filter((id) => id !== member.id)
//                                     : [...prev, member.id]
//                                 );
//                               }}
//                             />
//                           </TableCell>
//                           <TableCell align="center">
//                             <MenuIcon />
//                           </TableCell>
//                           {selectedColumns.id && <TableCell align="center">{member.id}</TableCell>}
//                           {selectedColumns.sNo && (
//                             <TableCell align="center">
//                               {index + 1 + (currentPage - 1) * itemsPerPage}
//                             </TableCell>
//                           )}
//                           {selectedColumns.member && (
//                             <TableCell align="center">{member.member}</TableCell>
//                           )}
//                           {selectedColumns.age && (
//                             <TableCell align="center">{member.age}</TableCell>
//                           )}
//                           {selectedColumns.education && (
//                             <TableCell align="center">{member.education}</TableCell>
//                           )}
//                           {selectedColumns.fatherName && (
//                             <TableCell align="center">{member.fatherName}</TableCell>
//                           )}
//                           {selectedColumns.motherName && (
//                             <TableCell align="center">{member.motherName}</TableCell>
//                           )}
//                           {selectedColumns.husbandName && (
//                             <TableCell align="center">{member.husbandName}</TableCell>
//                           )}
//                           {selectedColumns.city && (
//                             <TableCell align="center">{member.city}</TableCell>
//                           )}
//                           {selectedColumns.profession && (
//                             <TableCell align="center">{member.profession}</TableCell>
//                           )}
//                           {selectedColumns.description && (
//                             <TableCell align="center">{member.description}</TableCell>
//                           )}
//                           {selectedColumns.action && (
//                             <TableCell align="center">
//                               <Button
//                                 component={Link}
//                                 to={`/edit/member/${member.id}`}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{
//                                   color: "#ffff",
//                                   mr: 1,
//                                   bgcolor: "#0288d1", // Cyan color for Edit
//                                   "&:hover": {
//                                     bgcolor: "#01579b", // Darker cyan on hover
//                                   },
//                                 }}
//                               >
//                                 Edit
//                               </Button>
//                               <Button
//                                 onClick={() => deleteHandle(member.id)}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{
//                                   color: "#ffff",
//                                   bgcolor: "#d32f2f", // Red color for Delete
//                                   "&:hover": {
//                                     bgcolor: "#9a0007", // Darker red on hover
//                                   },
//                                 }}
//                               >
//                                 Delete
//                               </Button>
//                             </TableCell>
//                           )}
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                   <Box sx={{ m: 2 }}>
//                     <Pagination
//                       currentPage={currentPage}
//                       totalPages={totalPages}
//                       onPageChange={setCurrentPage}
//                     />
//                   </Box>
//                 </TableContainer>
//               </Box>
//             </Card>
//           </Grid>
//         </Grid>
//         <DialogBox
//           open={openDialog}
//           onClose={handleClose}
//           selectedColumns={selectedColumns}
//           tempSelectedColumns={tempSelectedColumns}
//           setTempSelectedColumns={setTempSelectedColumns}
//           onApply={handleApply}
//         />
//       </MDBox>
//     </DashboardLayout>
//   );
// };

// export default MembersTable;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Grid,
  Card,
  Checkbox,
  IconButton,
  Popover,
  MenuItem,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MenuIcon from "@mui/icons-material/Menu";
import Pagination from "../members/members-pagination"; // Importing Pagination component
import DialogBox from "../members/member-dialogue"; // Importing DialogBox component

const MembersTable = () => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState({
    id: false,
    sNo: true,
    member: true,
    age: true,
    education: true,
    fatherName: false,
    motherName: false,
    husbandName: false,
    city: true,
    profession: true,
    description: false,
    action: true,
  });
  const [tempSelectedColumns, setTempSelectedColumns] = useState({ ...selectedColumns });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;
  const [selectedRowId, setSelectedRowId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:7979/members")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedRows(newSelectAll ? data.map((member) => member.id) : []);
  };

  const handleSettingsClick = () => {
    setTempSelectedColumns({ ...selectedColumns });
    setOpenDialog(true);
  };
  const DialogBoxHandleApply = () => {
    setSelectedColumns({ ...tempSelectedColumns });
    setOpenDialog(false);
  };

  const handleApply = () => {
    alert(`Selected IDs: ${selectedRows.join(", ")}`);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const deleteHandle = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      axios
        .delete(`http://localhost:7979/members/${id}`)
        .then(() => {
          setData((prevData) => prevData.filter((member) => member.id !== id));
        })
        .catch((error) => console.log(error));
    }
  };

  const menuItems = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuIconClick = (id) => {
    setSelectedRowId(id);
    setAnchorEl(event.currentTarget); // Open the Popover
  };

  // const handleMenuIconClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={4} pb={2}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card sx={{ position: "relative", height: "100%" }}>
              <MDBox
                mx={2}
                mt={-3}
                py={1}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h5" color="white">
                  Members Table
                </MDTypography>
              </MDBox>
              <Box p={2}>
                <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
                  <Typography variant="h5" gutterBottom textAlign={"center"}>
                    Members List
                  </Typography>
                  <Button
                    component={Link}
                    to="/add/member"
                    variant="contained"
                    color="success"
                    sx={{
                      mr: 5,
                      color: "#ffff",
                      bgcolor: "#1976d2",
                      "&:hover": { bgcolor: "#115293" },
                    }}
                  >
                    Add +
                  </Button>
                </Box>
                <TableContainer>
                  <Table>
                    <TableRow sx={{ bgcolor: "#5c5a59", color: "#ffff" }}>
                      <TableCell>
                        <Box>
                          <Checkbox
                            checked={selectAll}
                            onChange={handleSelectAllChange}
                            sx={{ mr: 2 }}
                          />
                          <IconButton onClick={handleSettingsClick}>
                            <SettingsIcon sx={{ color: "#ffff" }} />
                          </IconButton>
                        </Box>
                      </TableCell>
                      {/* <TableCell align="center">
                        <IconButton onClick={handleSettingsClick}>
                          <SettingsIcon sx={{ color: "#ffff" }} />
                        </IconButton>
                      </TableCell> */}
                      {selectedColumns.id && (
                        <TableCell align="center">
                          <strong>ID</strong>
                        </TableCell>
                      )}
                      {selectedColumns.sNo && (
                        <TableCell align="center">
                          <strong>S.No</strong>
                        </TableCell>
                      )}
                      {selectedColumns.member && (
                        <TableCell align="center">
                          <strong>Member</strong>
                        </TableCell>
                      )}
                      {selectedColumns.age && (
                        <TableCell align="center">
                          <strong>Age</strong>
                        </TableCell>
                      )}
                      {selectedColumns.education && (
                        <TableCell align="center">
                          <strong>Education</strong>
                        </TableCell>
                      )}
                      {selectedColumns.fatherName && (
                        <TableCell align="center">
                          <strong>Father Name</strong>
                        </TableCell>
                      )}
                      {selectedColumns.motherName && (
                        <TableCell align="center">
                          <strong>Mother Name</strong>
                        </TableCell>
                      )}
                      {selectedColumns.husbandName && (
                        <TableCell align="center">
                          <strong>Husband Name</strong>
                        </TableCell>
                      )}
                      {selectedColumns.city && (
                        <TableCell align="center">
                          <strong>City</strong>
                        </TableCell>
                      )}
                      {selectedColumns.profession && (
                        <TableCell align="center">
                          <strong>Profession</strong>
                        </TableCell>
                      )}
                      {selectedColumns.description && (
                        <TableCell align="center">
                          <strong>Description</strong>
                        </TableCell>
                      )}
                      {selectedColumns.action && (
                        <TableCell align="center">
                          <strong>Action</strong>
                        </TableCell>
                      )}
                    </TableRow>
                    <TableBody>
                      {currentData.map((member, index) => (
                        <TableRow key={member.id}>
                          {/* <TableCell align="center">
                            <Checkbox
                              checked={selectedRows.includes(member.id)}
                              onChange={() => {
                                setSelectedRows((prev) =>
                                  prev.includes(member.id)
                                    ? prev.filter((id) => id !== member.id)
                                    : [...prev, member.id]
                                );
                              }}
                            />
                          </TableCell> */}
                          {/* <TableCell align="center">
                            <Box gap={3}>
                              <Checkbox
                                sx={{ mr: 3.5 }}
                                checked={selectedRows.includes(member.id)}
                                onChange={() => {
                                  setSelectedRows((prev) =>
                                    prev.includes(member.id)
                                      ? prev.filter((id) => id !== member.id)
                                      : [...prev, member.id]
                                  );
                                }}
                              />
                              <MenuIcon
                                onClick={handleMenuIconClick}
                                style={{ cursor: "pointer" }}
                              />
                            </Box>
                          </TableCell>
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose1}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                          >
                            <Typography sx={{ p: 2, bgcolor: "#ffff" }}>
                              {menuItems.map((item, index) => (
                                <MenuItem key={index} onClick={handleClose}>
                                  {item}
                                </MenuItem>
                              ))}
                            </Typography>
                          </Popover> */}

                          <TableCell>
                            <Box gap={3}>
                              <Checkbox
                                sx={{ mr: 3.5 }}
                                checked={selectedRows.includes(member.id)}
                                onChange={() => {
                                  setSelectedRows((prev) =>
                                    prev.includes(member.id)
                                      ? prev.filter((id) => id !== member.id)
                                      : [...prev, member.id]
                                  );
                                }}
                              />
                              <MenuIcon
                                onClick={(event) => handleMenuIconClick(member.id, event)}
                                style={{ cursor: "pointer" }}
                              />
                            </Box>
                          </TableCell>
                          <Popover
                            id={id}
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            onClose={handleClose1}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                          >
                            <Typography sx={{ p: 2, bgcolor: "#ffff" }}>
                              Row ID: {selectedRowId} {/* Show the clicked row ID */}
                              {menuItems.map((item, index) => (
                                <MenuItem key={index} onClick={handleClose}>
                                  {item}
                                </MenuItem>
                              ))}
                            </Typography>
                          </Popover>

                          {selectedColumns.id && <TableCell align="center">{member.id}</TableCell>}
                          {selectedColumns.sNo && (
                            <TableCell align="center">
                              {index + 1 + (currentPage - 1) * itemsPerPage}
                            </TableCell>
                          )}
                          {selectedColumns.member && (
                            <TableCell align="center">{member.member}</TableCell>
                          )}
                          {selectedColumns.age && (
                            <TableCell align="center">{member.age}</TableCell>
                          )}
                          {selectedColumns.education && (
                            <TableCell align="center">{member.education}</TableCell>
                          )}
                          {selectedColumns.fatherName && (
                            <TableCell align="center">{member.fatherName}</TableCell>
                          )}
                          {selectedColumns.motherName && (
                            <TableCell align="center">{member.motherName}</TableCell>
                          )}
                          {selectedColumns.husbandName && (
                            <TableCell align="center">{member.husbandName}</TableCell>
                          )}
                          {selectedColumns.city && (
                            <TableCell align="center">{member.city}</TableCell>
                          )}
                          {selectedColumns.profession && (
                            <TableCell align="center">{member.profession}</TableCell>
                          )}
                          {selectedColumns.description && (
                            <TableCell align="center">{member.description}</TableCell>
                          )}
                          {selectedColumns.action && (
                            <TableCell align="center">
                              <Button
                                component={Link}
                                to={`/edit/member/${member.id}`}
                                variant="contained"
                                size="small"
                                sx={{
                                  color: "#ffff",
                                  mr: 1,
                                  bgcolor: "#0288d1",
                                  "&:hover": { bgcolor: "#01579b" },
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                onClick={() => deleteHandle(member.id)}
                                variant="contained"
                                size="small"
                                sx={{
                                  color: "#ffff",
                                  bgcolor: "#d32f2f",
                                  "&:hover": { bgcolor: "#9a0007" },
                                }}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Box sx={{ m: 2 }} textAlign={"right"}>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </Box>
                  {/* Buttons for Apply and Cancel */}
                  {selectedRows.length > 0 && (
                    <Box sx={{ display: "flex", p: 2, gap: 2, bgcolor: "#d5e0eb" }}>
                      <Button
                        sx={{
                          color: "#ffff",
                          mr: 1,
                          bgcolor: "#0288d1", // Cyan color for Edit
                          "&:hover": {
                            color: "#ffff",
                            bgcolor: "#01579b", // Darker cyan on hover
                          },
                        }}
                        variant="contained"
                        color="primary"
                        onClick={handleApply}
                      >
                        Apply
                      </Button>
                      <Button
                        sx={{
                          color: "#ffff",
                          mr: 1,
                          bgcolor: "#0288d1", // Cyan color for Edit
                          "&:hover": {
                            color: "#ffff",
                            bgcolor: "#01579b", // Darker cyan on hover
                          },
                        }}
                        variant="outlined"
                        color="secondary"
                        onClick={() => setSelectedRows([])}
                      >
                        Cancel
                      </Button>
                    </Box>
                  )}
                </TableContainer>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <DialogBox
          open={openDialog}
          onClose={handleClose}
          selectedColumns={selectedColumns}
          tempSelectedColumns={tempSelectedColumns}
          setTempSelectedColumns={setTempSelectedColumns}
          onApply={DialogBoxHandleApply}
        />
      </MDBox>
    </DashboardLayout>
  );
};

export default MembersTable;
