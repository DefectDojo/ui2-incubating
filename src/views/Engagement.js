import React from "react";
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { withStyles } from "@material-ui/styles";
import { Fragment } from "react";
import {FetchEngagementData} from "../services/api.js";

const columns =[
{ 
    field: 'product', 
    headerName: 'Product',
    flex: 1,
    headerAlign: 'center',
},
{
    field: 'prod_type',
    headerName: 'Product Type',
    flex: 1,
    headerAlign: 'center',
    editable: true,
    align:'center',
},
  {
    field: 'name',
    headerName: 'Engagement Name',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'status',
    headerName: 'status',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'period',
    headerName: 'Period',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'findings_count',
    headerName: 'Lead',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'endpoints',
    headerName: 'Tests',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
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

class Engagement extends React.Component {
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
    var path = this.props.location.pathname.split("/")[2]
    var active = false
    if(path === "active"){
      active = true
    }
    FetchEngagementData(this.setRowData, active);
  }

  render(){
    const { classes } = this.props
    return (
      <Fragment>
      <div style={{ height: '90vh', width: '100%', textAlign:'center' }} className={classes.root} >
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

export default withStyles(useStyles)(Engagement);
