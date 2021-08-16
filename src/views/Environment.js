import { Chip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react"
import {withRouter} from "react-router-dom";
import { FetchEnvironments } from "../services/api";

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

class Environment extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.populateEnvironments = this.populateEnvironments.bind(this)
        this.addEnvironment = this.addEnvironment.bind(this)
        this.state = {
            chipData:[],
        }
    }

    handleClick(){
        alert("Yet to be Implemented");
    }

    populateEnvironments(array){
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

    GetAllEnvironments(){
        FetchEnvironments()
        .then(res => res.json())
        .then(res=> res["results"])
        .then(this.populateEnvironments);
    }

    addEnvironment(){
        this.props.history.push({ pathname: "/environment/add", state:{modal:true}});
    }

    componentDidMount(){
        this.GetAllEnvironments();
    }


    render(){
        const {classes} = this.props
        return <div className="container-fluid">
            <div className={classes.root}>
                <Chip 
                    color="secondary"
                    label="Add Environment"
                    onClick={this.addEnvironment}
                />
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

export default withStyles(useStyles)(withRouter(Environment));