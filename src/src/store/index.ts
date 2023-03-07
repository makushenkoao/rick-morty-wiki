import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {rickAndMortyReducer} from './rick_&_morty'

const rootReducer = combineReducers({
    rickAndMortyReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']