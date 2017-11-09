import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingle, toggleComplete} from '../actions';
import {Link, Route} from 'react-router-dom';
import TodoList from './todo_list';


class SingleItem extends Component {
	componentDidMount(){
		this.props.getSingle(this.props.match.params.id)
	}
	toggleComplete(){
		console.log('Toggle Complete:', this.props.single._id);
		this.props.toggleComplete(this.props.single._id);
	}
	render(){
		const {single} = this.props;
		if(!single){
			return <div>Loading...</div>
		}
		return(
			<div>
				<Link className="btn red" to="/">Go Back</Link>
				<h3>{single.title}</h3>
				<p>Details: {single.details}</p>
				<p>Created By: {single.userId}</p>
				<p>Status: {single.complete ? 'Item Complete' : 'Item Incomplete'}</p>
				<button onClick={() => this.toggleComplete()} className={`btn ${single.complete ? 'purple' : 'green'}`}>{`${single.complete ? 'Restore' : 'Complete'}`}</button>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		single: state.todo.single
	}
}
export default connect(mapStateToProps, {getSingle, toggleComplete})(SingleItem);