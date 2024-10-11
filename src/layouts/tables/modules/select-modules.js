import React, { useState } from "react";
import {
  Box,
  Chip,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SelectModules = () => {
  const [modulesData, setModulesData] = useState({
    moduleNames: [],
  });
  const moduleOptions = Array.from({ length: 100 }, (_, index) => `Module ${index + 1}`);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8484/selectedModules/", modulesData)
      .then((res) => {
        console.log(res);
        navigate("/modules-tables");
      })
      .catch((error) => console.log(error));
  };

  const handleModuleSelect = (event) => {
    const value = event.target.value;
    setModulesData((prevData) => ({
      ...prevData,
      moduleNames: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const removeModule = (module) => {
    setModulesData((prevData) => ({
      ...prevData,
      moduleNames: prevData.moduleNames.filter((m) => m !== module),
    }));
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        {modulesData.moduleNames.map((module) => (
          <Chip
            key={module}
            label={module}
            onDelete={() => removeModule(module)}
            sx={{ margin: 1 }}
          />
        ))}
      </Box>
      <FormControl sx={{ m: 1, width: 300, mb: 2 }}>
        {/* <InputLabel>Select Modules</InputLabel> */}
        <Typography variant="h6" mb={0.5}>
          Select Module:
        </Typography>
        <Select
          sx={{ height: 40 }}
          multiple
          value={modulesData.moduleNames}
          onChange={handleModuleSelect}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {moduleOptions.map((module) => (
            <MenuItem key={module} value={module}>
              {module}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mt: 3 }}>
        <Button onClick={handleSubmit} type="submit" variant="contained" sx={{ color: "#ffff" }}>
          Submit
        </Button>
        <Button component={Link} to="/modules-tables" variant="contained" sx={{ color: "#ffff" }}>
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default SelectModules;
