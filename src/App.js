// src/App.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser } from './actions/userActions';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const [formData, setFormData] = useState({
 
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (location.state && location.state.user) {
      setFormData(location.state.user);
    } else {
      setFormData({
        id: null,
        name: '',
        email: '',
        phone: '',
      });
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddOrUpdateUser = () => {
    if (formData.id) {
      dispatch(updateUser(formData));
    } else {
      const newUser = {
       
        ...formData,id: users.length + 1,
      };
     
      dispatch(addUser(newUser));
    }
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <button className="navigate-button" onClick={() => navigate('/data-table')}>View Table</button>
      <div className="container">
        <div className="box">
          <h2>{formData.id ? 'Update Data' : 'Add Data'}</h2>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <button onClick={handleAddOrUpdateUser}>
            {formData.id ? 'Update' : 'Add User'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
