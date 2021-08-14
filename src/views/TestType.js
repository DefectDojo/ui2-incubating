import { Chip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react"
import {withRouter} from "react-router-dom";
import { FetchTestTypes } from "../services/api";

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
        this.handleClick = this.handleClick.bind(this);
        this.populateTestTypes = this.populateTestTypes.bind(this)
        this.state = {
            chipData:[],
        }
    }

    handleClick(){
        alert("hahah");
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

    componentDidMount(){
        this.GetAllTestTypes();
    }


    render(){
        const {classes} = this.props
        return <div className="container-fluid">
            <div className={classes.root}>
                {
                this.state.chipData.map(data => {
                    return <Chip
                            color="primary"
                            key={data.key}
                            label={data.name}
                            onClick={this.handleClick}
                            />
                })
                }
            </div>
        </div>
    }

}

export default withStyles(useStyles)(withRouter(TestType));