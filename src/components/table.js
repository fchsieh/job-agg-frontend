import React from "react";
import { useMemo } from "react";
import { Box, Typography, Link } from "@mui/material";
import MaterialReactTable from "material-react-table";

const DataTable = ({ data }) => {
    const columns = useMemo(
        () => [
            {
                header: "Company",
                accessorKey: "company_name",
                size: 50,
                Cell: ({ cell, row }) => {
                    let link = row.original.job_link;
                    return (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Link
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                underline="hover"
                            >
                                <Typography variant="body1">
                                    {cell.getValue()}
                                </Typography>
                            </Link>
                        </Box>
                    );
                },
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
                muiTableContainerProps={{
                    sx: { maxHeight: "36rem" },
                }}
                muiTableBodyCellProps={{
                    sx: {
                        fontSize: "16px",
                    },
                }}
                muiTableHeadCellProps={{
                    sx: {
                        fontWeight: "bold",
                        fontSize: "17px",
                    },
                }}
            />
        </div>
    );
};

export default DataTable;
