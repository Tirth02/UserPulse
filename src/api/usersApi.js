const BASE_URL = "https://api.freeapi.app/api/v1/public/randomusers";

export const fetchUsers = (page = 1, limit = 20) =>
  fetch(`${BASE_URL}?page=${page}&limit=${limit}`).then(res => res.json());

export const fetchUserById = (id) =>
  fetch(`${BASE_URL}/${id}`).then(res => res.json());

export const fetchRandomUser = () =>
  fetch(`${BASE_URL}/user/random`).then(res => res.json());
