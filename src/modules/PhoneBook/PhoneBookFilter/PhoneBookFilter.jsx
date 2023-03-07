import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import Box from 'shared/components/Box/Box';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { getContacts } from 'redux/contacts/contacts-selectors';

const PhoneBookFilter = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const filterid = nanoid();

  return (
    <>
      {contacts?.length > 0 && (
        <>
          <label htmlFor={filterid}>Find contacs by name</label>
          <Box
            as="input"
            mb={15}
            id={filterid}
            onChange={({ target }) => dispatch(setFilter(target.value))}
            name="filter"
            value={filter}
          />
        </>
      )}
    </>
  );
};

export default PhoneBookFilter;
