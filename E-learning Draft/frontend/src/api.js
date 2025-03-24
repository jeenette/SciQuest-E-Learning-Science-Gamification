const BASE_URL = 'http://localhost:3000';

export const fetchData = async () => {
  const response = await fetch(`${BASE_URL}/data`);
  return response.json();
};
