import React from 'react';
import {SocketProvider} from "./hooks/SocketContext";
import HomePage from "./pages/HomePage";

export const BandNamesApp = () => {
    return (
        <SocketProvider>
            <HomePage/>
        </SocketProvider>
    );
};


