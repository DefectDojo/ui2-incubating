import { Chip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react"
import {withRouter} from "react-router-dom";
import { FetchTestTypes, DeleteTestType } from "../services/api";

const useStyles = ((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
      '& > *': {
        margin: 4,
        fontSize: 20,
      },
    },
  }));

class TestType extends React.Component{
    constructor(props){
        super(props);
        this.editTestType = this.editTestType.bind(this);
        this.populateTestTypes = this.populateTestTypes.bind(this)
        this.addTestType = this.addTestType.bind(this)
        this.state = {
            chipData:[],
        }
    }

    populateTestTypes(array){
        var chipList =[];
        array.forEach(element => {
            chipList.push({
                "name": element["name"],
                "key":element["id"]
            })
        });
        this.setState({
            chipData: chipList
        })
    }

    GetAllTestTypes(){
        FetchTestTypes()
        .then(res => res.json())
        .then(res=> res["results"])
        .then(this.populateTestTypes);
    }

    addTestType(){
        this.props.history.push({ pathname: "/testtype/add", state:{modal:true}});
    }

    editTestType(key){
        this.props.history.push({ pathname: "/testtype/edit", state:{modal:true, id: key}});
    }

    componentDidMount(){
        this.GetAllTestTypes();
    }


    render(){
        const {classes} = this.props
        return <div className="container-fluid">
            <div className={classes.root}>
                <Chip 
                    color="secondary"
                    label="Add Test Type"
                    onClick={this.addTestType}
                />
                {
                this.state.chipData.map(data => {
                    return <Chip
                            color="primary"
                            key={data.key}
                            label={data.name}
                            onClick={() => this.editTestType(data.key)}
			    onDelete={() => DeleteTestType(data.key)}
                            />
                })
                }
            </div>
        </div>
    }

}

export default withStyles(useStyles)(withRouter(TestType));
