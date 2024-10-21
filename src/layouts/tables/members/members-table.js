// Main Part

// Static Code...
//--------------------------------------------------------------------------

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
//   Popover,
//   MenuItem,
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
//     id: false,
//     sNo: true,
//     member: true,
//     age: true,
//     education: true,
//     fatherName: false,
//     motherName: false,
//     husbandName: false,
//     city: true,
//     profession: true,
//     description: false,
//     action: true,
//   });
//   const [tempSelectedColumns, setTempSelectedColumns] = useState({ ...selectedColumns });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 25;
//   const [selectedRowId, setSelectedRowId] = useState(null);

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
//   const DialogBoxHandleApply = () => {
//     setSelectedColumns({ ...tempSelectedColumns });
//     setOpenDialog(false);
//   };

//   const handleApply = () => {
//     alert(`Selected IDs: ${selectedRows.join(", ")}`);
//   };

//   const handleClose = () => {
//     setOpenDialog(false);
//   };

//   const deleteHandle = (id) => {
//     const confirm = window.confirm("Would you like to delete?");
//     if (confirm) {
//       axios
//         .delete(`http://localhost:7979/members/${id}`)
//         .then(() => {
//           setData((prevData) => prevData.filter((member) => member.id !== id));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   const menuItems = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuIconClick = (id) => {
//     setSelectedRowId(id);
//     setAnchorEl(event.currentTarget); // Open the Popover
//   };

//   // const handleMenuIconClick = (event) => {
//   //   setAnchorEl(event.currentTarget);
//   // };

//   const handleClose1 = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

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
//                       <TableCell>
//                         <Box>
//                           <Checkbox
//                             checked={selectAll}
//                             onChange={handleSelectAllChange}
//                             sx={{ mr: 2 }}
//                           />
//                           <IconButton onClick={handleSettingsClick}>
//                             <SettingsIcon sx={{ color: "#ffff" }} />
//                           </IconButton>
//                         </Box>
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
//                           <TableCell>
//                             <Box gap={3}>
//                               <Checkbox
//                                 sx={{ mr: 3.5 }}
//                                 checked={selectedRows.includes(member.id)}
//                                 onChange={() => {
//                                   setSelectedRows((prev) =>
//                                     prev.includes(member.id)
//                                       ? prev.filter((id) => id !== member.id)
//                                       : [...prev, member.id]
//                                   );
//                                 }}
//                               />
//                               <MenuIcon
//                                 onClick={(event) => handleMenuIconClick(member.id, event)}
//                                 style={{ cursor: "pointer" }}
//                               />
//                             </Box>
//                           </TableCell>
//                           <Popover
//                             id={id}
//                             open={Boolean(anchorEl)}
//                             anchorEl={anchorEl}
//                             onClose={handleClose1}
//                             anchorOrigin={{
//                               vertical: "bottom",
//                               horizontal: "center",
//                             }}
//                             transformOrigin={{
//                               vertical: "top",
//                               horizontal: "center",
//                             }}
//                           >
//                             <Typography sx={{ p: 2, bgcolor: "#ffff" }}>
//                               Row ID: {selectedRowId} {/* Show the clicked row ID */}
//                               {menuItems.map((item, index) => (
//                                 <MenuItem key={index} onClick={handleClose}>
//                                   {item}
//                                 </MenuItem>
//                               ))}
//                             </Typography>
//                           </Popover>

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
//                                   bgcolor: "#0288d1",
//                                   "&:hover": { bgcolor: "#01579b" },
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
//                                   bgcolor: "#d32f2f",
//                                   "&:hover": { bgcolor: "#9a0007" },
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
//                   <Box sx={{ m: 2 }} textAlign={"right"}>
//                     <Pagination
//                       currentPage={currentPage}
//                       totalPages={totalPages}
//                       onPageChange={setCurrentPage}
//                     />
//                   </Box>
//                   {/* Buttons for Apply and Cancel */}
//                   {selectedRows.length > 0 && (
//                     <Box sx={{ display: "flex", p: 2, gap: 2, bgcolor: "#d5e0eb" }}>
//                       <Button
//                         sx={{
//                           color: "#ffff",
//                           mr: 1,
//                           bgcolor: "#0288d1", // Cyan color for Edit
//                           "&:hover": {
//                             color: "#ffff",
//                             bgcolor: "#01579b", // Darker cyan on hover
//                           },
//                         }}
//                         variant="contained"
//                         color="primary"
//                         onClick={handleApply}
//                       >
//                         Apply
//                       </Button>
//                       <Button
//                         sx={{
//                           color: "#ffff",
//                           mr: 1,
//                           bgcolor: "#0288d1", // Cyan color for Edit
//                           "&:hover": {
//                             color: "#ffff",
//                             bgcolor: "#01579b", // Darker cyan on hover
//                           },
//                         }}
//                         variant="outlined"
//                         color="secondary"
//                         onClick={() => setSelectedRows([])}
//                       >
//                         Cancel
//                       </Button>
//                     </Box>
//                   )}
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
//           onApply={DialogBoxHandleApply}
//         />
//       </MDBox>
//     </DashboardLayout>
//   );
// };

// export default MembersTable;

// Dynamic Code
//_____________________________________________________________________________

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
  Switch,
  Menu,
  MenuItem,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Pagination from "../members/members-pagination"; // Adjust path as needed
import DialogBox from "../members/member-dialogue"; // Adjust path as needed

const MembersTable = () => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null); // For controlling the menu
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
    status: true, // Add status
    action: true,
  });
  const [tempSelectedColumns, setTempSelectedColumns] = useState({ ...selectedColumns });
  const navigate = useNavigate();
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  useEffect(() => {
    const sessionId = sessionStorage.getItem("sessionId");
    axios
      .get("http://localhost:7777/members")
      .then((res) => {
        sessionStorage.getItem("sessionId");
        setData(res.data);
      })
      .catch((error) => console.error(error));
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

  const handleClose = () => setOpenDialog(false);

  const deleteHandle = (id) => {
    const confirm = window.confirm("Would you like to delete This Row?");
    if (confirm) {
      const sessionId = sessionStorage.getItem("sessionId");
      axios
        .delete(`http://localhost:7777/members/${id}`)
        .then(() => {
          setData((prevData) => prevData.filter((member) => member.id !== id));
        })
        .catch((error) => console.log(error));
    }
  };
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleEdit = (id) => {
    // Navigate to the edit page or handle edit logic
    console.log("Edit member with id:", id);
    navigate(`/edit/member/${id}`);
    handleMenuClose(); // Close the menu after action
  };
  const handleAdd = (id) => {
    // Navigate to the edit page or handle edit logic
    // console.log("Edit member with id:", id);
    navigate("/add/member");
    handleMenuClose(); // Close the menu after action
  };

  const handleDelete = (id) => {
    // Handle the delete logic
    console.log("Delete member with id:", id);
    handleMenuClose(); // Close the menu after action
  };
  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={4} pb={2}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card sx={{ height: "100%" }}>
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
                  <Typography variant="h5" gutterBottom>
                    Members List
                  </Typography>
                  <Button
                    component={Link}
                    to="/add/member"
                    variant="contained"
                    color="success"
                    sx={{
                      mr: 5,
                      color: "#fff",
                      bgcolor: "#1976d2",
                      "&:hover": { bgcolor: "#115293" },
                    }}
                  >
                    Add +
                  </Button>
                </Box>

                <TableContainer>
                  <Table>
                    <TableRow sx={{ bgcolor: "#5c5a59", color: "#fff", width: "100%" }}>
                      <TableCell align="center">
                        {/* Wrap Checkbox and Settings Icon inside Box with gap */}
                        <Box display="flex" alignItems="center" gap={1.5}>
                          <Checkbox checked={selectAll} onChange={handleSelectAllChange} />
                          <IconButton onClick={handleSettingsClick}>
                            <SettingsIcon sx={{ color: "#fff" }} />
                          </IconButton>
                        </Box>
                      </TableCell>
                      {selectedColumns.sNo && (
                        <TableCell align="center" sx={{ minWidth: 50 }}>
                          S.No
                        </TableCell>
                      )}
                      {Object.keys(selectedColumns).map((column) =>
                        selectedColumns[column] &&
                        column !== "sNo" &&
                        column !== "status" &&
                        column !== "action" ? (
                          <TableCell key={column} align="center" sx={{ minWidth: 100 }}>
                            {column.charAt(0).toUpperCase() + column.slice(1)}
                          </TableCell>
                        ) : null
                      )}
                      {selectedColumns.status && <TableCell align="center">Status</TableCell>}
                      {selectedColumns.action && <TableCell align="center">Actions</TableCell>}
                    </TableRow>

                    <TableBody>
                      {currentData.map((member, index) => (
                        <TableRow key={member.id}>
                          <TableCell align="center">
                            {/* Combine Checkbox and MenuIcon */}
                            <Box display="flex" alignItems="center" gap={2}>
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
                              <IconButton onClick={handleMenuClick}>
                                <MenuIcon />
                              </IconButton>

                              {/* Menu component for dropdown */}
                              <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Align the menu
                                transformOrigin={{ vertical: "top", horizontal: "center" }}
                              >
                                <MenuItem onClick={() => handleAdd(member.id)}>Add</MenuItem>
                                <MenuItem onClick={() => handleEdit(member.id)}>Edit</MenuItem>
                                <MenuItem onClick={() => handleDelete(member.id)}>Delete</MenuItem>
                              </Menu>
                            </Box>
                          </TableCell>
                          {selectedColumns.sNo && (
                            <TableCell align="center" sx={{ minWidth: 50 }}>
                              {index + 1 + (currentPage - 1) * itemsPerPage}
                            </TableCell>
                          )}
                          {Object.keys(selectedColumns).map((column) =>
                            selectedColumns[column] &&
                            column !== "sNo" &&
                            column !== "status" &&
                            column !== "action" ? (
                              <TableCell key={column} align="center" sx={{ minWidth: 100 }}>
                                {member[column]}
                              </TableCell>
                            ) : null
                          )}
                          {selectedColumns.status && (
                            <TableCell align="center" sx={{ minWidth: 80 }}>
                              {member.isEnabled ? "Enabled" : "Disabled"}
                            </TableCell>
                          )}
                          {selectedColumns.action && (
                            <TableCell align="center" sx={{ minWidth: 150 }}>
                              <Button
                                sx={{
                                  color: "#fff",
                                  mr: 1,
                                  bgcolor: "#0288d1",
                                  "&:hover": {
                                    color: "#fff",
                                    bgcolor: "#01579b",
                                  },
                                }}
                                // variant="outlined"
                                component={Link}
                                to={`/edit/member/${member.id}`}
                              >
                                Edit
                              </Button>
                              <Button
                                sx={{
                                  color: "#ffff",
                                  bgcolor: "#d32f2f",
                                  "&:hover": { bgcolor: "#9a0007", color: "#ffff" },
                                }}
                                // variant="outlined"
                                onClick={() => deleteHandle(member.id)}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </TableContainer>
              </Box>
              {/* Buttons for Apply and Cancel */}
              {selectedRows.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    p: 2,
                    gap: 2,
                    bgcolor: "#ebeae8",
                    position: "fixed",
                    bottom: 25,
                    right: 16,
                    borderRadius: 2,
                    width: "81.5%",
                  }}
                >
                  <Button
                    sx={{
                      color: "#ffff",
                      bgcolor: "#0288d1", // Cyan color for Apply
                      "&:hover": {
                        bgcolor: "#01579b", // Darker cyan on hover
                      },
                    }}
                    variant="contained"
                    onClick={handleApply}
                  >
                    Apply
                  </Button>
                  <Button
                    sx={{
                      color: "#ffff",
                      bgcolor: "#0288d1", // Cyan color for Cancel
                      "&:hover": {
                        bgcolor: "#01579b", // Darker cyan on hover
                      },
                    }}
                    variant="contained"
                    onClick={() => setSelectedRows([])}
                  >
                    Cancel
                  </Button>
                </Box>
              )}
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
