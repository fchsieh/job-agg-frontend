import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Topbar from "./components/toolbar.js";
import Description from "./components/description.js";
import DisplayTable from "./components/data.js";
import Footer from "./components/footer.js";

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
    const config = {
        API_URL: "http://192.168.0.22:8888/jobs/",
    };

    return (
        <div className="App">
            <ThemeProvider theme={topbarTheme}>
                <Topbar />
            </ThemeProvider>
            <ThemeProvider theme={webTheme}>
                <Description />
                <DisplayTable config={config} />
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;
