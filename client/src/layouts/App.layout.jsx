import React from "react";
import Footer from "./../components/globals/Footer";
import Navbar from "./../components/globals/Navbar";

const App = ({children}) => {
    return (
        <div id="AppLayout">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default App;