import { 
    Action, 
    configureStore, 
    ThunkAction 
} from "@reduxjs/toolkit";
import { createFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import cartReducer from "./cart/cart.slice";

const saveSubsetFilter = createFilter(
    "cart",
    ["cartItems"]
);

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
    transform: [saveSubsetFilter]
};

const rootReducer = combineReducers({
    cart: cartReducer
});

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
            ]
        }
    })
});

export const persistor = persistStore(store);

// Infer the type of `store`
export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>