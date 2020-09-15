import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createSound = (payload) => api.post('/sound', payload);
export const getSounds = () => api.get('/sounds');
export const updateSound = (id, payload) => api.put(`/sound/${id}`, payload);
export const deleteSound = (id) => api.delete(`/sound/${id}`);
export const getSoundById = (id) => api.get(`/sound/${id}`);

export const createUser = (payload) => api.post('/user', payload);
export const getUsers = () => api.get('/users');
export const updateUser = (id, payload) => api.put(`/user/${id}`, payload);
export const deleteUser = (id) => api.delete(`/user/${id}`);
export const getUserById = (id) => api.get(`/user/${id}`);

const apis = {
  createSound,
  getSounds,
  updateSound,
  deleteSound,
  getSoundById,
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById,
};

export default apis;
