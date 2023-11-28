// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
// import { encryptTransform } from 'redux-persist-transform-encrypt';
// import authReducer from "../slice/authSlice";




// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['user','auth',]
// }




// export const rootReducers = combineReducers({
//     auth: authReducer,
// })



// const persistedReducer = persistReducer({
//     ...persistConfig,
//     transforms: [
//         encryptTransform({
//             secretKey: 'abcdefghizklmnopqrstuvwxyz',
//             onError: function (error) {
//                 console.log(error)
//               },
//         }),
//     ],
// }, rootReducers);


// export const store = configureStore({
//     reducer: persistedReducer,
//     // devTools: process.env.NODE_ENV !== 'production',
//     devTools: true,
//     middleware: [thunk]
// })


// export const persistor = persistStore(store)

