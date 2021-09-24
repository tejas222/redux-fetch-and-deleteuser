import React, { useEffect } from 'react';
import { deleteUser, fetchUsers } from '../actions/userActions';
import { connect } from 'react-redux';
import '../App.css';

function UserContainer({ userData, fetchUsers, deleteRecord }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = () => {
    return userData.loading ? (
      <h2>Loading...</h2>
    ) : (
      userData.users.map((user) => (
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>
            <button
              onClick={() => deleteRecord(user.id)}
              className='btn btn-danger'
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    );
  };

  return (
    <div className='container '>
      <div className='col-md-6 m-auto'>
        <h2 className='alert alert-warning'>User Data List</h2>
        <table className='table table-striped table-hover'>
          <thead className='border border-black bg-info'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='border border-black'>{handleClick()}</tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    deleteRecord: (id) => dispatch(deleteUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
