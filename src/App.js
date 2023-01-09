import React from "react";

import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Topbar from "./components/toolbar.js";
import Description from "./components/description.js";
import DisplayTable from "./components/data.js";
import Footer from "./components/footer.js";

import API from "./api.json";

const topbarTheme = createTheme({
    typography: {
        fontFamily: ["Pacifico"].join(","),
    },
});

const webTheme = createTheme({
    typography: {
        fontFamily: ["Rubik"].join(","),
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={topbarTheme}>
                <Topbar />
            </ThemeProvider>
            <ThemeProvider theme={webTheme}>
                <Description />
                <DisplayTable API={API} />
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;
