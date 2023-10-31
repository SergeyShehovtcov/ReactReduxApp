import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main/Main";

import "./app.less";

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;