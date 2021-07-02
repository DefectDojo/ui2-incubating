import React from "react";
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import { column, row } from "./jsonFile";
import { createMuiTheme } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";

const columns = column
const rows = row

//styling 
const defaultTheme = createMuiTheme();
const useStyles = makeStyles((theme) => 
({
  root: {
    '& .MuiDataGrid-row.Mui-even:not(:hover)': {
      backgroundColor:'lightgray'
    }
  }
}
));

function Product() {

  const classes = useStyles();

  return (
    <div style={{ height: 600, width: '100%', textAlign:'center' }} className={classes.root}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
  );
}

export default Product;
