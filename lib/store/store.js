// import { configureStore } from '@reduxjs/toolkit'
// import userReducer from './features/login/loginSlice'


// export const makeStore = () => {

//     // Configure the store
//     return configureStore({
//         reducer: {
//             user: userReducer,
//         }
//     });

// }

// // Export the store and dispatch
// export default store;
// export const dispatch = store.dispatch;



import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/login/loginSlice'

// Create the makeStore function
export const makeStore = () => {
    const store = configureStore({
        reducer: {
            user: userReducer,
        }
    });
    return store;
};

// Create an instance of the store
const store = makeStore();

// Export store and dispatch
export default store;
export const dispatch = store.dispatch;