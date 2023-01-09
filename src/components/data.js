import React from "react";

import DataTable from "./table.js";
import usePast7DaysData from "api/fetchdata";

const DisplayTable = ({ config }) => {
    const { past7DaysData, isLoading } = usePast7DaysData(config["API_URL"]);

    if (past7DaysData) {
        const data = Object.values(past7DaysData)
            .flat()
            .filter((el) => {
                return el !== null && el !== undefined;
            });
        return (
            <div
                style={{
                    width: "80%",
                    margin: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2rem",
                }}
            >
                <DataTable data={data} state={isLoading} />
            </div>
        );
    }
};

export default DisplayTable;
