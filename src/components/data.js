import React from "react";
import { useMemo } from "react";

import DataTable from "./table.js";
import GetDataByDate from "api/fetchdata";

const DisplayTable = () => {
    const { data, isLoading, error } = GetDataByDate("2023-01-05"); // TODO: replace with filter date
    const memoizedData = useMemo(() => data, [data]);

    if (error) return <div>Error: {error.message}</div>; // TODO: replace with error message
    if (memoizedData)
        return (
            <div
                style={{
                    width: "70%",
                    margin: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2rem",
                }}
            >
                <DataTable
                    data={memoizedData}
                    state={{ isLoading: isLoading }}
                />
            </div>
        );
};

export default DisplayTable;
