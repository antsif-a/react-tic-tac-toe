import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/ui/Navbar';
import './Index.scss';

export default function Index() {
    return (
        <>
            <Navbar title="Tic Tac Toe" />
            <Outlet />
        </>
    );
}
