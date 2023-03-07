import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6404ed1540597b65de2d4b8d.mockapi.io',
});

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');

  return data;
};

export const addContact = async ({ name, phone }) => {
  console.log(name, phone);
  const { data } = await instance.post(`/contacts`, { name, phone });

  return data;
};

export const deleteContact = async id => {
  instance.delete(`/contacts/${id}`);
};
