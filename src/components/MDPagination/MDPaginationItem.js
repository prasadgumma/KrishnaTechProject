// File: components/MDPaginationItem.js

import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const MDPaginationItem = ({ active, children, ...rest }) => (
  <Button
    variant={active ? "contained" : "outlined"}
    color={active ? "primary" : "default"}
    {...rest}
  >
    {children}
  </Button>
);

MDPaginationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MDPaginationItem;
