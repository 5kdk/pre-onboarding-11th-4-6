import axios from 'axios';

const baseURL = 'http://localhost:4000';

const sickAxios = axios.create({
  baseURL,
});

const getSearchTerms = input => {
  const params = { q: input };
  const res = sickAxios.get('/sick', { params });

  console.info('calling api');

  return res;
};

export default getSearchTerms;
