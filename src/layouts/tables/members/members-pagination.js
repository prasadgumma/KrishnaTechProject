import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Typography, Box } from "@mui/material";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      {currentPage > 1 && (
        <Typography
          variant="body2"
          onClick={() => onPageChange(currentPage - 1)}
          sx={{ cursor: "pointer", color: "#0288d1", mr: 3 }}
        >
          Prev
        </Typography>
      )}
      <Typography variant="body2" display="inline">
        Page {currentPage} of {totalPages}
      </Typography>
      {currentPage < totalPages && (
        <Typography
          variant="body2"
          onClick={() => onPageChange(currentPage + 1)}
          sx={{ cursor: "pointer", ml: 3, color: "#0288d1" }}
        >
          Next
        </Typography>
      )}
    </Box>
  );
};

// Prop validation
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
