import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersListPage extends React.Component { 
    componentDidMount(){
        this.props.fetchUsers();
    }
    
    renderUsers(){
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        });
    }

    render(){
        return(
            <div>
                UsersListPage
                {this.props.users != undefined && <ul>{this.renderUsers()}</ul>}
            </div>
        )
    }
}

function mapStateToProps(state){
    return { users: state.users};
}

function loadData(store){
    return store.dispatch(fetchUsers());
}

export { loadData };
export default { component: connect(mapStateToProps, {fetchUsers})(UsersListPage)};