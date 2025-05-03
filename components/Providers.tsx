"use client";


import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";

const Providers = ({ 
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}

export default Providers;