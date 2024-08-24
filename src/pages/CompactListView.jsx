import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';

const rows= [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns= [
  { field: 'col1', headerName: 'Title', width: 150 },
  { field: 'col2', headerName: 'Creator', width: 150 },
  { field: 'col3', headerName: 'Play', width: 150 },
  { field: 'col4', headerName: 'Views', width: 150 },


];

export default function CompactListView() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
