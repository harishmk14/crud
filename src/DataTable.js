// src/DataTable.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './actions/userActions';
import { useNavigate } from 'react-router-dom';
import './index.css';

const DataTable = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const navigate = useNavigate();

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleUpdateUser = (user) => {
    navigate('/', { state: { user } });
  };

  const handleBack = () => {
    navigate('/');
    window.location.reload(); 
  };


  return (
    <div>
      <h1>Data Table</h1>
      <button className="back-button" onClick={handleBack}>Back</button>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button className="update" onClick={() => handleUpdateUser(user)}>Update</button>
                  <button className="delete" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
