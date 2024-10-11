import React, { useState } from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import MDBox from "components/MDBox";
import axios from "axios";

const MenusWithActions = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedCheckBoxes, setSelectedCheckBoxes] = useState();

  // State for menu model1 and model2
  const [menuStatesModel1, setMenuStatesModel1] = useState(
    ["Menu1", "Menu2", "Menu3"].map(() => ({
      all: false,
      add: false,
      update: false,
      view: false,
      delete: false,
      actions: false,
    }))
  );
  const [menuStatesModel2, setMenuStatesModel2] = useState(
    ["Menu4", "Menu5", "Menu6"].map(() => ({
      all: false,
      add: false,
      update: false,
      view: false,
      delete: false,
      actions: false,
    }))
  );

  // Handle panel expansion
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Handle 'All' checkbox change for all permissions
  const handleAllChange = (index, model) => (event) => {
    const checked = event.target.checked;
    const setState = model === "model1" ? setMenuStatesModel1 : setMenuStatesModel2;
    setState((prev) =>
      prev.map((state, i) =>
        i === index
          ? {
              all: checked,
              add: checked,
              update: checked,
              view: checked,
              delete: checked,
              actions: checked,
            }
          : state
      )
    );
  };

  // Handle individual permission checkbox changes
  const handleCheckboxChange = (index, type, model) => (event) => {
    const checked = event.target.checked;
    const setState = model === "model1" ? setMenuStatesModel1 : setMenuStatesModel2;
    setState((prev) =>
      prev.map((state, i) =>
        i === index
          ? {
              ...state,
              [type]: checked,
              all:
                checked && state.add && state.update && state.view && state.delete && state.actions,
            }
          : state
      )
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine data from both models for the API payload
    const model1Data = ["Menu1", "Menu2", "Menu3"].map((menu, index) => ({
      menu,
      ...menuStatesModel1[index],
    }));

    const model2Data = ["Menu4", "Menu5", "Menu6"].map((menu, index) => ({
      menu,
      ...menuStatesModel2[index],
    }));

    const selectedCheckBoxes = {
      model1: model1Data,
      model2: model2Data,
    };

    axios
      .post("http://localhost:8181/models", selectedCheckBoxes)
      .then((res) => setSelectedCheckBoxes(res.data))
      .catch((error) => console.log(error));
  };

  const renderMenuRows = (menus, menuStates, model) =>
    menus.map((menu, index) => (
      <React.Fragment key={index}>
        <Grid item xs={2}>
          <Typography>{menu}</Typography>
        </Grid>
        <Grid item xs={1.5}>
          <FormControlLabel
            control={
              <Checkbox
                checked={menuStates[index].all}
                onChange={handleAllChange(index, model)}
                sx={{ color: "#e3e4e6" }}
              />
            }
            label=""
          />
        </Grid>
        {["add", "update", "view", "delete", "actions"].map((type) => (
          <Grid item xs={1.5} key={type}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={menuStates[index][type]}
                  onChange={handleCheckboxChange(index, type, model)}
                  sx={{ color: "#e3e4e6" }}
                />
              }
              label=""
            />
          </Grid>
        ))}
      </React.Fragment>
    ));

  return (
    <MDBox pt={2} pb={2}>
      {/* Form for Model 1 and Model 2 */}
      <form onSubmit={handleSubmit}>
        {/* Model 1 Accordion */}
        <Box mb={1}>
          <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ bgcolor: "#fabe50" }}
            >
              <Typography variant="h5">Model 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ p: 3 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={2}>
                    <Typography variant="h5">Menus</Typography>
                  </Grid>
                  {["all", "add", "update", "view", "delete", "actions"].map((header) => (
                    <Grid item xs={1.5} key={header}>
                      <Typography variant="h5">
                        {header.charAt(0).toUpperCase() + header.slice(1)}
                      </Typography>
                    </Grid>
                  ))}
                  {/* Render Menu Rows for Model 1 */}
                  {renderMenuRows(["Menu1", "Menu2", "Menu3"], menuStatesModel1, "model1")}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Model 2 Accordion */}
        <Box mb={1}>
          <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ bgcolor: "#fabe50" }}
            >
              <Typography variant="h5">Model 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ p: 3 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={2}>
                    <Typography variant="h5">Menus</Typography>
                  </Grid>
                  {["all", "add", "update", "view", "delete", "actions"].map((header) => (
                    <Grid item xs={1.5} key={header}>
                      <Typography variant="h5">
                        {header.charAt(0).toUpperCase() + header.slice(1)}
                      </Typography>
                    </Grid>
                  ))}
                  {/* Render Menu Rows for Model 2 */}
                  {renderMenuRows(["Menu4", "Menu5", "Menu6"], menuStatesModel2, "model2")}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Submit and Back buttons */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
          <Button type="submit" variant="contained" bgcolor="primary" sx={{ color: "#ffff" }}>
            Submit
          </Button>
          <Button
            component={Link}
            to="/dashboard"
            variant="contained"
            bgcolor="primary"
            sx={{ color: "#ffff" }}
          >
            Back
          </Button>
        </Box>
      </form>
    </MDBox>
  );
};

export default MenusWithActions;
