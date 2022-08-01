import * as React from "react";
import ReactDOM from 'react-dom/client';
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Catalog from "../components/Catalog/Catalog"

const HomePage = () => {
    return (
        <>
        <Header/>
        <Card/>
        <Catalog/>
        </>
    )
}
export default HomePage;