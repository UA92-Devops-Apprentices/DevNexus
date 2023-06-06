'use client';

import { useState } from "react";



export default function DynamicNav() {

    const [status, setStatus] = useState("open");

    function toggleShow() {
        switch (status) {
            case "open":
                setStatus("closed");
                return;
            case "closed":
                setStatus("open");
                return;
        }
    }

    return (
        // This nav element will frame the box
        <nav className="bg-red-500">
            <h2 data-state={status} className="data-[state=open]:animate-open data-[state=open]:-ml-36 data-[state=closed]:animate-close data-[state=closed]:ml-0 fixed left-64 top-20 bg-blue-600 w-48 h-96 rounded-3xl">hidden element</h2>
            <h1 onClick={()=>{toggleShow()}} className="fixed left-64 top-20 bg-red-500 w-1/2 rounded-3xl h-96">hi</h1>
        </nav>
    );
}