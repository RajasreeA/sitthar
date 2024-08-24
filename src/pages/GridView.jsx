import * as React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ViewList from "@mui/icons-material/ViewList"; // Import filled icon
import ViewListOutlined from "@mui/icons-material/ViewListOutlined"; // Import outlined icon
import GridView from "@mui/icons-material/GridView"; // Import filled icon
import GridViewOutlined from "@mui/icons-material/GridViewOutlined"; // Import outlined icon
import Reorder from "@mui/icons-material/Reorder"; // Import filled icon
import ReorderOutlined from "@mui/icons-material/ReorderOutlined"; // Import outlined icon
import Divider from "@mui/material/Divider";
import MediaControlCard from "../components/Card";
import ListView from "../components/ListView";
import DataGridDemo from "../components/DataGrid";
import { cardData, listData } from "../constants/Data";
import COLORS from "../constants/Colors";

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const [cardContent, setCardContent] = useState([]);
  const [listContent, setListContent] = useState([]);
  const [viewMode, setViewMode] = useState("grid"); // State for view mode

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const fetchData = () => {
    setCardContent(cardData);
    setListContent(listData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const iconStyle = { cursor: 'pointer' }; // In
  return (
    <Grid container sx={{ backgroundColor: COLORS.secondaryColor, p: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 2,
        }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Search"
          sx={{
            backgroundColor: "white",
            width: '50%',
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiInputBase-input": {
              backgroundColor: "white",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container sx={{ backgroundColor: "#fff", p: 1 }}>
        <Grid item sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                padding: 2,
              }}
            >
              <GridView
                onClick={() => handleViewModeChange("grid")}
                color={viewMode === "grid" ? COLORS.secondaryColor : "action"}
                style={iconStyle}
              />
              
              <ViewList
                onClick={() => handleViewModeChange("list")}
                color={viewMode === "list" ?  COLORS.secondaryColor : "action"}
                style={iconStyle}
              />
            
              <Reorder
                onClick={() => handleViewModeChange("dataGrid")}
                color={viewMode === "dataGrid" ?  COLORS.secondaryColor : "action"}
                style={iconStyle}
              />
            
            </Box>
            <Divider />
            <Grid>
              {viewMode === "grid" && (
                <Grid container spacing={spacing} p={5}>
                  {cardContent.map((value) => (
                    <Grid key={value.id} item>
                      <MediaControlCard data={value} />
                    </Grid>
                  ))}
                </Grid>
              )}
              {viewMode === "list" && (
                <Grid container spacing={spacing} p={5}>
                  {listContent.map((value) => (
                    <Grid key={value.id} item>
                      <ListView data={value} />
                    </Grid>
                  ))}
                </Grid>
              )}
              {viewMode === "dataGrid" && (
                <Grid container height={'100%'} spacing={spacing} p={5}>
                  <DataGridDemo />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
