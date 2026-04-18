import axios from 'axios';

const BASE = import.meta.env.VITE_API_URL || '/api';
const api = axios.create({ baseURL: BASE });

export const articlesApi = {
  getAll: (section) => api.get('/articles', { params: section ? { section } : {} }),
  getBySlug: (slug) => api.get(`/articles/${slug}`),
  search: (q) => api.get('/articles/search/query', { params: { q } }),
};

export const requestsApi = {
  create: (content, userName) => api.post('/requests', { content, userName }),
  getAll: () => api.get('/requests'),
  vote: (id) => api.patch(`/requests/${id}/vote`),
};


