import axios from 'axios';

const BASE_URL = 'https://648dc1aa2de8d0ea11e82de2.mockapi.io';

export async function getAllAdverts() {
  const response = await axios.get(`${BASE_URL}/adverts`, {
    headers: { 'content-type': 'application/json' },
    params: {
      page: 1,
    },
  });
  return response.data;
}

export async function getAdvertsByLimit(limit = 8) {
  const response = await axios.get(`${BASE_URL}/adverts`, {
    headers: { 'content-type': 'application/json' },
    params: {
      page: 1,
      limit,
    },
  });
  return response.data;
}
