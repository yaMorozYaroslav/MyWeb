<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: () => ({}),
})
=======
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
});
>>>>>>> d0713ec5c806ba9f4baa4ed53b815ad907d59010
