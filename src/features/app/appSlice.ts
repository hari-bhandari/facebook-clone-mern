import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface CounterState {
  user: User|null,
  selectedImage:string|undefined
}
interface User{
  username:any
  profilePic:any,
  id:any
}

const initialState: CounterState = {
  user:null,
  selectedImage:undefined
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    selectImage: (state, action: PayloadAction<string>) => {
      state.selectedImage = action.payload;
    },
    resetImage: (state) => {
      state.selectedImage = undefined;
    },
  },
});

export const { login,logout,selectImage,resetImage } = appSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.app.value)`
// @ts-ignore
export const selectUser = (state: RootState) => state.app.user;
export const selectSelectedImage = (state: RootState) => state.app.selectedImage;

export default appSlice.reducer;
