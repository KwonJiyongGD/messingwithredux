import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Minjeong' },
  { id: '1', name: 'Jimin' },
  { id: '2', name: 'Lisa' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
