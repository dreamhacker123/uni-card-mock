import React from 'react';

import {Routes,Route} from "react-router-dom";
import { DashboardPage } from './AsyncPages';


export const PageRoutes = ():JSX.Element=>{
    return (
        <Routes>
            <Route path='/' element={<DashboardPage />}/>
        </Routes>
    )
}