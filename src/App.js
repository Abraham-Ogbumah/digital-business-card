import React from "react";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="content-wrapper">
            <Header />
            <Bio />
            <Footer />
        </div>
    )
}

export default App;