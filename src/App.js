import "./App.css";
import Topbar from "./components/toolbar.js";
import Description from "./components/description.js";
import DisplayTable from "./components/data.js";

function App() {
    return (
        <div className="App">
            <Topbar />
            <Description />
            <DisplayTable />
        </div>
    );
}

export default App;
