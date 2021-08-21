import React from "react";
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { withStyles } from "@material-ui/styles";
import { Chip } from "@material-ui/core";
import { Fragment } from "react";
import {FetchProductByProductId, FetchFindings, FetchUserById} from "../services/api.js";

const columns =[
{ 
    field: 'severity', 
    headerName: 'Severity',
    flex: 1,
    headerAlign: 'center',
    align:'center',
    renderCell: (params) => {
	   var background = 'grey';
	   var color = 'white'
	   var severity = params.value

	   if(severity === "Medium"){
		   background='gold'
    	   } else if(severity === "Critical"){
		   background='darkred'
           }
	   
	   return <Chip label={severity} style={{background: background, color: color}}></Chip> 
    },
},
{ 
    field: 'title', 
    headerName: 'Name',
    flex: 1,
    headerAlign: 'center',
},
{
    field: 'cwe',
    headerName: 'CWE',
    flex: 1,
    headerAlign: 'center',
},
  {
    field: 'cve',
    headerName: 'CVE',
    flex: 1,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'last_status_update',
    headerName: 'Closed Date',
    flex: 1,
    headerAlign: 'center',
    align:'center',
    renderCell: (params) => {
	    var d = new Date(params.value).toDateString()
	    return d
   }
  },
  {
    field: 'age',
    headerName: 'Age',
    flex: 1,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'sla_days_remaining',
    headerName: 'SLA',
    flex: 1,
    headerAlign: 'center',
    align:'center',
    renderCell: (params) => {
	    if(params.value==null){
		    return
	    }
	    return <Chip style={{background: 'green', color: 'white'}} label={params.value}/>
    }
  },
  {
    field: 'reporter_name',
    headerName: 'Reporter',
    flex: 1,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'found_by',
    headerName: 'Found By',
    flex: 1,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'display_status',
    headerName: 'Status',
    flex: 1,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'display_status',
    headerName: 'Group',
    flex: 1,
    headerAlign: 'center',
    align:'center',
  },
 {
    field: 'test_name',
    headerName: 'Product',
    flex: 1,
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

class Finding extends React.Component {
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
    var query = ""

    if(path==="open"){
	    query="?active=true"
    } else if(path === "closed"){
	    query = "?is_mitigated=true"
    } else if(path === "accepted"){
	    query = "?risk_accepted=true"
    }

    FetchFindings(query)
	  .then(res => res.json())
	  .then(res => res["results"])
	  .then(async(res) => {
		return await Promise.all(res.map(async(response) => {
		    const typepromise = await FetchUserById(response["reporter"])
		    const type = await typepromise.json()
		    response["reporter_name"] = type["username"]
		    return response
		}))
	  })
	  .then(async(res) => {
	 	return await Promise.all(res.map(async(response) => {
			const typepromise = await FetchProductByProductId(response["test"])
			const type = await typepromise.json()
			response["test_name"] = type["name"]
			return response
		}))
	  })
	  .then(this.setRowData)
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

export default withStyles(useStyles)(Finding);
