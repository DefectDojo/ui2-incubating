import React from "react";
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { withStyles } from "@material-ui/styles";
import { Fragment } from "react";
import {FetchProductTypes} from "../services/api.js";
import { Check, Clear } from "@material-ui/icons";

const columns =[
{ 
    field: 'name', 
    headerName: 'Product Type',
    flex: 1,
    headerAlign: 'center',
},
{
    field: 'prod_count',
    headerName: 'Product Count',
    flex: 1,
    headerAlign: 'center',
    editable: true,
    align:'center',
  },
  {
    field: 'something',
    headerName: 'Active(Verified) Findings',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'critical_product',
    headerName: 'Critical Product',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
    renderCell: (params) => {
      if(params.value === true){
        return <Check style={{fill: "green"}}/>
      }
      return <Clear style={{fill: "red"}}/>
    }
  },
  {
    field: 'key_product',
    headerName: 'Key Product',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
    renderCell: (params) => {
      if(params.value === true){
        return <Check style={{fill: "green"}}/>
      }
      return <Clear style={{fill: "red"}}/>
    }
  },
];

//styling 
// const defaultTheme = createMuiTheme();
const useStyles = theme => ({
  root: {
    '& .MuiDataGrid-row.Mui-even:not(:hover)': {
      backgroundColor:'lightgray',
    }
  },
});

class ProductType extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rows: []
    }
    this.setRowData = this.setRowData.bind(this);
  }

  setRowData(rowData){
    this.setState({
      rows: rowData
    })
  }

  componentDidMount(){
    FetchProductTypes()
    .then(this.setRowData)
  }

  render(){
    const { classes } = this.props
    return (
      <Fragment>
      <div style={{ height: 600, width: '100%', textAlign:'center' }} className={classes.root} >
      <DataGrid
        rows={this.state.rows}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        pageSize={10}
      />
    </div>
    </Fragment>
    );
  }
}

export default withStyles(useStyles)(ProductType);
