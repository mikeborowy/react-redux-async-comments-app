import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCommentsAndUsers} from '../reducers/comments';
import {CommentDetail} from './CommentDetail';
class CommentsList extends Component {
    componentDidMount(){
        this.props.fetchCommentsAndUsers();
    }
    renderList() {
        return this.props.comments.map(comment => {
            return(
                <CommentDetail key={comment.id} {...comment}/>
            );
        });
    }
    render() {
        console.log(this.props.comments)
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
   comments: state.comments
})

// const mapDispatchToProps = dispatch => ({
//     fetchCommentsAndUsers
// })

export default connect(
    mapStateToProps,
    {fetchCommentsAndUsers}
)(CommentsList);