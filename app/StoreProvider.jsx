'use client'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import store, { makeStore } from '../lib/store/store'

const StoreProvider = ({ children }) => {

    const storeRef = useRef();

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )

}

export default StoreProvider