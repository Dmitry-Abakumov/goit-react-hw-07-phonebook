import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import Box from 'shared/components/Box/Box';

import { fetchAddContact } from 'redux/contacts/contacts-operations';

const PhoneBookForm = () => {
  const [fields, setFields] = useState({
    name: '',
    phone: '',
  });

  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    setFields(prevFields => ({
      ...prevFields,
      [target.name]: target.value,
    }));
  };

  const onSubmitForm = e => {
    e.preventDefault();

    dispatch(fetchAddContact({ ...fields }));

    reset();
  };

  const reset = () => {
    setFields({ name: '', phone: '' });
  };

  const { name, phone } = fields;

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  return (
    <Box
      as="form"
      mt={10}
      mb={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="1px solid black"
      pt={50}
      pb={50}
      onSubmit={onSubmitForm}
      maxWidth={500}
      mr="auto"
      ml="auto"
    >
      <label htmlFor={nameInputId}>name</label>
      <Box
        as="input"
        mb={15}
        id={nameInputId}
        onChange={onInputChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
      />
      <label htmlFor={phoneInputId}>phone number</label>
      <Box
        as="input"
        mb={15}
        id={phoneInputId}
        onChange={onInputChange}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
      />

      <button>Add contact</button>
    </Box>
  );
};

export default PhoneBookForm;
