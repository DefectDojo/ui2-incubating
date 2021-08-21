import { Chip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react"
import {withRouter} from "react-router-dom";
import { FetchEnvironments, DeleteEnvironment } from "../services/api";

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
        this.editEnvironment = this.editEnvironment.bind(this);
	this.removeChip = this.removeChip.bind(this);
        this.populateEnvironments = this.populateEnvironments.bind(this)
        this.addEnvironment = this.addEnvironment.bind(this)
        this.state = {
            chipData:[],
        }
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

    editEnvironment(key, value){
	this.props.history.push({
		pathname:'/environment/edit',
		state: { id: key, name: value, modal:true}
	});
    }

    removeChip(id){
	   DeleteEnvironment(id)
	   var newList = this.state.chipData.filter(ele => ele.key !== id)
	   this.setState({
		   chipData : newList
	   });
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
			    clickable={true}
                            onClick={() => this.editEnvironment(data.key, data.name)}
			    onDelete={() => this.removeChip(data.key)}
                            />
                })
                }
            </div>
        </div>
    }

}

export default withStyles(useStyles)(withRouter(Environment));
