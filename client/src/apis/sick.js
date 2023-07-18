import axios from 'axios';

const baseURL = 'http://localhost:4000';

const sickAxios = axios.create({
  baseURL,
});

const getSearchTerms = params => {
  const res = sickAxios.get('/sick', { params });

  return res;
};

export default getSearchTerms;
