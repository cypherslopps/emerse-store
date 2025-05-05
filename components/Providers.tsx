"use client";


import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ 
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <ReduxProvider store={store}>
            <PersistGate
                loading={null}
                persistor={persistor}
            >
                {children}
            </PersistGate>
        </ReduxProvider>
    )
}

export default Providers;