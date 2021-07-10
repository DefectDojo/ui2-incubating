import React from "react";
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import { column, row } from "./jsonFile";
// import { createMuiTheme } from "@material-ui/core";

const columns = column
const rows = row

//styling 
// const defaultTheme = createMuiTheme();
const useStyles = makeStyles((theme) => 
({
  root: {
    '& .MuiDataGrid-row.Mui-even:not(:hover)': {
      backgroundColor:'lightgray'
    }
  }
}
));

function fetchData(){
  const url = "https://demo.defectdojo.org/api/v2/products/"
  fetch(url,{
    method: 'get',
    headers: new Headers({
      'Accept': 'application/json',
      'Authorization': "Token 548afd6fab3bea9794a41b31da0e9404f733e222",
    })
  })
  .then(res => res.json())
  .then(res => console.log(res))
}

function Product() {

  const classes = useStyles();
  fetchData();
  return (
    <div style={{ height: 600, width: '100%', textAlign:'center' }} className={classes.root}>
    <DataGrid
      rows={rows}
      columns={columns}
      components={{
        Toolbar: GridToolbar,
      }}
      pageSize={10}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
  );
}

export default Product;
