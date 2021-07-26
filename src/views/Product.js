import React from "react";
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { withStyles } from "@material-ui/styles";
import { Fragment } from "react";
import {FetchProductsData} from "../services/api.js";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';

function criticality(str){
  const arr={"very high": 5, "high":4, "medium":3, "low":2, "very low":1, "none":0};
  var stack=[];
  for (let i=0; i<arr[str]; i++){
    stack.push(<StarIcon fontSize="small" />);
  }
  for (let i=arr[str]+1; i<=5; i++){
      stack.push(<StarBorderIcon fontSize="small" />);
  }
  return <div>{stack}</div>;
}


const columns =[
  { field: 'name', 
  headerName: 'Product',
  flex: 1,
  headerAlign: 'center',
},
  {
    field: 'tags',
    headerName: 'Tags',
    flex: 1,
    headerAlign: 'center',
    editable: true,
    align:'center',
    renderCell: (params) => {
      // eslint-disable-next-line
        if(params.value==''){
          return;
        }
        return params.value.map(function(value, index){
          return <Chip label={value} color="primary"></Chip>
        })
    }
  },
  {
    field: 'business_criticality',
    headerName: 'Criticality',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
    renderCell: (ele) => (
        <Tooltip title={ele.value} arrow>
            <span>{criticality(ele.value)}</span>
        </Tooltip> 
        ), 
  },
  {
    field: 'product_meta',
    headerName: 'Metadata',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'engagements',
    headerName: 'Engagements',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
    renderCell: (params) => {
      var active = 0
      var closed = 0
      
      params.value.forEach(element => {
        if(element["active"]){
           active++
        } else {
           closed++
        }
      });

      return <span> Active {active}, Closed {closed}</span>
    }
  },
  {
    field: 'findings_count',
    headerName: 'Active (verified) Findings',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'endpoints',
    headerName: 'Endpoints',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'contact',
    headerName: 'Contact',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align:'center',
  },
  {
    field: 'prod_type',
    headerName: 'Product Type',
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

class Product extends React.Component {
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
    FetchProductsData(this.setRowData);
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

export default withStyles(useStyles)(Product);
