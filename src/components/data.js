import React from "react";

import DataTable from "./table.js";
import usePast7DaysData from "api/fetchdata";

const DisplayTable = ({ API }) => {
    const { past7DaysData, isLoading } = usePast7DaysData(API["API_URL"]);

    let data = [];
    if (past7DaysData) {
        data = Object.values(past7DaysData)
            .flat()
            .filter((el) => {
                return el !== null && el !== undefined;
            });
    }
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
            <DataTable data={data} isLoading={isLoading} />
        </div>
    );
};

export default DisplayTable;
