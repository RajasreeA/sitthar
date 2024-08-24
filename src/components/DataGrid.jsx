import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CardImage from "../assets/images/TableImage.png";
import COLORS from "../constants/Colors";

const columns = [
  {
    field: "title",
    headerName: "Title",
    headerAlign: "center",
    align: "center",
    width: 350,
    renderCell: (params) => (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          sx={{
            width: 50,
            height: 50,
            objectFit: "cover",
            borderRadius: 1,
            mr: 1,
          }}
          alt={params.row.title}
          src={params.row.image} // The image source
        />
        <span style={{ color: COLORS.blue }}>{params.row.title}</span>
      </Box>
    ),
  },
  {
    field: "creator",
    headerAlign: "center",
    align: "center",
    headerName: "Creator",
    width: 150,
    editable: false,
  },
  {
    field: "play",
    headerAlign: "center",
    headerName: "Play",
    width: 150,
    align: "center",
    editable: false,
    renderCell: () => <PlayCircleIcon sx={{ height: 38, width: 38 }} />,
  },
  {
    field: "views",
    headerAlign: "center",
    align: "center",
    headerName: "Views",
    type: "number",
    width: 110,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    title: "அழுகணிச் சித்தர் பாடல்",
    creator: "அகத்தியர்",
    image: CardImage, // Ensure the path is correct
    play: "Jon",
    views: 1000,
  },
  {
    id: 2,
    title: "அழுகணிச் சித்தர் பாடல்",
    creator: "அகத்தியர்",
    image: CardImage,
    play: "Jon",
    views: 1000,
  },
  {
    id: 3,
    title: "அழுகணிச் சித்தர் பாடல்",
    creator: "அகத்தியர்",
    image: CardImage,
    play: "Jon",
    views: 1000,
  },
  {
    id: 4,
    title: "அழுகணிச் சித்தர் பாடல்",
    creator: "அகத்தியர்",
    image: CardImage,
    play: "Jon",
    views: 1000,
  },
  {
    id: 5,
    title: "அழுகணிச் சித்தர் பாடல்",
    creator: "அகத்தியர்",
    image: CardImage,
    play: "Jon",
    views: 1000,
  },
  {
    id: 6,
    title: "அழுகணிச் சித்தர் பாடல்",
    creator: "அகத்தியர்",
    image: CardImage,
    play: "Jon",
    views: 1000,
  },
  {
    id: 7,
    title: "அழுகணிச் சித்தர் பாடல்",
    creator: "அகத்தியர்",
    image: CardImage,
    play: "Jon",
    views: 1000,
  },
  {
    id: 8,
    title: "அழுகணிச் சித்தர் பாடல்",
    creator: "அகத்தியர்",
    image: CardImage,
    play: "Jon",
    views: 1000,
  },
  {
    id: 9,
    title: "அழுகணிச் சித்தர் பாடல்",
    creator: "அகத்தியர்",
    image: CardImage,
    play: "Jon",
    views: 1000,
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        rowHeight={70}
        // autoHeight={100}
        pageSizeOptions={[7]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
