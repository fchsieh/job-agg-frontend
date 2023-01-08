import React from "react";
import { useMemo } from "react";
import MaterialReactTable from "material-react-table";

const DataTable = ({ data }) => {
    const columns = useMemo(
        () => [
            {
                header: "Company",
                accessorKey: "company_name",
                size: 50,
            },
            {
                header: "Job Title",
                accessorKey: "job_title",
            },
            {
                header: "Location",
                accessorKey: "job_location",
            },
            {
                header: "Source",
                accessorKey: "source",
                size: 50,
            },
            {
                header: "Date Posted",
                accessorKey: "date_posted",
                size: 50,
            },
        ],
        []
    );

    return (
        <div>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableRowNumbers
                rowNumberMode="static"
                enableStickyHeader
                enableStickyFooter
                muiTableContainerProps={{ sx: { maxHeight: "35rem" } }}
            />
        </div>
    );
};

export default DataTable;
