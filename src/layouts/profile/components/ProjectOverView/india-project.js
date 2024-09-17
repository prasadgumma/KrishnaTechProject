import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import indiaMain from "assets/images/indiaMain.jpeg";

const IndiaProject = () => {
  return (
    <Box ml={40} mt={3}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <img
              src={indiaMain}
              alt="india-image"
              style={{ width: "50%", height: "25%", objectFit: "cover" }}
            />
            <Typography variant="h3" mt={2} align="center">
              INDIA
            </Typography>
            <p>
              By 55,000 years ago, the first modern humans, or Homo sapiens, had arrived on the
              Indian subcontinent from Africa, where they had earlier evolved.[28][29][30] The
              earliest known modern human remains in South Asia date to about 30,000 years ago.[28]
              After 6500 BCE, evidence for domestication of food crops and animals, construction of
              permanent structures, and storage of agricultural surplus appeared in Mehrgarh and
              other sites in Balochistan, Pakistan.[84] These gradually developed into the Indus
              Valley Civilisation,[85][84] the first urban culture in South Asia,[86] which
              flourished during 2500–1900 BCE in Pakistan and western India.[87] Centred around
              cities such as Mohenjo-daro, Harappa, Dholavira, and Kalibangan, and relying on varied
              forms of subsistence, the civilisation engaged robustly in crafts production and
              wide-ranging trade.[86] During the period 2000–500 BCE, many regions of the
              subcontinent transitioned from the Chalcolithic cultures to the Iron Age ones.[88] The
              Vedas, the oldest scriptures associated with Hinduism,[89] were composed during this
              period,[90] and historians have analysed these to posit a Vedic culture in the Punjab
              region and the upper Gangetic Plain.[88] Most historians also consider this period to
              have encompassed several waves of Indo-Aryan migration into the subcontinent from the
              north-west.[89] The caste system, which created a hierarchy of priests, warriors, and
              free peasants, but which excluded indigenous peoples by labelling their occupations
              impure, arose during this period.[91] On the Deccan Plateau, archaeological evidence
              from this period suggests the existence of a chiefdom stage of political
              organisation.[88] In South India, a progression to sedentary life is indicated by the
              large number of megalithic monuments dating from this period,[92] as well as by nearby
              traces of agriculture, irrigation tanks, and craft traditions.[92]
            </p>
            <br />
            <p>
              The Sangam literature of the Tamil language reveals that, between 200 BCE and 200 CE,
              the southern peninsula was ruled by the Cheras, the Cholas, and the Pandyas, dynasties
              that traded extensively with the Roman Empire and with West and Southeast
              Asia.[105][106] In North India, Hinduism asserted patriarchal control within the
              family, leading to increased subordination of women.[107][100] By the 4th and 5th
              centuries, the Gupta Empire had created a complex system of administration and
              taxation in the greater Ganges Plain; this system became a model for later Indian
              kingdoms.[108][109] Under the Guptas, a renewed Hinduism based on devotion, rather
              than the management of ritual, began to assert itself.[110] This renewal was reflected
              in a flowering of sculpture and architecture, which found patrons among an urban
              elite.[109] Classical Sanskrit literature flowered as well, and Indian science,
              astronomy, medicine, and mathematics made significant advances.
            </p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IndiaProject;
