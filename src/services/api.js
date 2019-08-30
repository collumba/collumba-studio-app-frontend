const API_URL = 'http://localhost:3001/api';

const api = (module) => {
  const url = `${API_URL}/${module}/`;
  return url;
}

export default api;