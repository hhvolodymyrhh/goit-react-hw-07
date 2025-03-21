import { createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from './contactsOps';


const initialState = {
	items: [],
	isLoading: false,
  error: null,
}

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};



export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
	extraReducers: (builder) => {
    builder
      .addCase(fetchContact.pending, handlePending)
      .addCase(fetchContact .fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      
  },
		// addContact: (state, action) => {
		//   state.items.push(action.payload);      
		// },
		// deleteContact: (state, action) => {
		//   state.items = state.items.filter(contact => contact.id !== action.payload)
		// }
	
})


export const selectContacts = state => state.contacts.items;
export const contactReducer = contactSlice.reducer;
// export const { addContact, deleteContact } = contactSlice.actions;

export default contactReducer;