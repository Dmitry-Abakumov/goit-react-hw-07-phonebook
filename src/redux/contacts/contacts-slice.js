import { createSlice } from '@reduxjs/toolkit';

import {
  fetchDeleteContact,
  fetchAllContacts,
  fetchAddContact,
} from './contacts-operations';

const handlePending = store => {
  store.isLoading = true;
};

const handleRejected = (store, { payload }) => {
  store.isLoading = true;
  if (payload) store.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAddContact.pending, handlePending)
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.items.push(payload);
        store.isLoading = false;
      })
      .addCase(fetchAddContact.rejected, handleRejected)

      .addCase(fetchDeleteContact.pending, handlePending)
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        const nextItems = store.items.filter(({ id }) => id !== payload);
        return { ...store, items: nextItems, isLoading: false };
      })
      .addCase(fetchDeleteContact.rejected, handleRejected)

      .addCase(fetchAllContacts.pending, handlePending)
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchAllContacts.rejected, handleRejected);
  },
});

export default contactsSlice.reducer;