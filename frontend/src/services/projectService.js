import api from '../utils/api.js';

const getUserId = () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Not authenticated');

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.id || payload._id || payload.userId;
  } catch {
    throw new Error('Invalid token');
  }
};

export const saveProject = async (components) => {
  try {
    const userId = getUserId();
    const response = await api.post('/api/projects/save', { components, userId });
    return response.data;
  } catch (error) {
    console.error('Save Project Error:', error);
    throw error.response?.data || { message: 'Failed to save project' };
  }
};

export const getMyProject = async () => {
  try {
    const userId = getUserId();
    const response = await api.get(`/api/projects/my-project?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Get Project Error:', error);
    throw error.response?.data || { message: 'Failed to load project' };
  }
};

export const deleteProject = async () => {
  try {
    const response = await api.delete('/api/projects/delete');
    return response.data;
  } catch (error) {
    console.error('Delete Project Error:', error);
    throw error.response?.data || { message: 'Failed to delete project' };
  }
};
