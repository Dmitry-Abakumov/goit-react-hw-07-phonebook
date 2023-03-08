import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';
import PhoneBookFilter from './PhoneBookFilter/PhoneBookFilter';
import Box from 'shared/components/Box/Box';

import { getError, getIsLoading } from 'redux/contacts/contacts-selectors';
import { fetchAllContacts } from 'redux/contacts/contacts-operations';

import 'react-toastify/dist/ReactToastify.css';

const PhoneBook = () => {
  const dispatch = useDispatch();

  const isError = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Box textAlign="center" pt={15} pl={15} pr={15} pb={15} as="section">
      <h2>Phonebook</h2>
      <PhoneBookForm />
      <Box
        border="1px solid black"
        pt={50}
        pb={50}
        maxWidth={500}
        ml="auto"
        mr="auto"
      >
        <PhoneBookFilter />
        <ContactList />

        {isError &&
          !isLoading &&
          toast.error('Oops, something went wrong, please reload the page', {
            position: toast.POSITION.TOP_RIGHT,
          })}
      </Box>
    </Box>
  );
};

export default PhoneBook;
