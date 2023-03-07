import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Box from 'shared/components/Box/Box';

import { getIsLoading } from 'redux/contacts/contacts-selectors';

import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  console.log(isLoading);

  return (
    <Box display="flex" gridGap={10} as="li">
      {name}: {phone}
      <button
        onClick={() => dispatch(fetchDeleteContact(id))}
        type="button"
        disabled={isLoading}
      >
        delete
      </button>
    </Box>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
