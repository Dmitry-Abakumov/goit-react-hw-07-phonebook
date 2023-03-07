import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from 'redux/contacts/contacts-slice';
import filterReducer from 'redux/filter/filter-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
