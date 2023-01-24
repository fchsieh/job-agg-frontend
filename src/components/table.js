import React from "react";
import { useMemo } from "react";
import { Box, Typography, Link } from "@mui/material";
import MaterialReactTable from "material-react-table";

const DataTable = ({ data, isLoading }) => {
    const columns = useMemo(
        () => [
            {
                header: "Company",
                accessorKey: "company_name",
                filterFn: "contains",
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
                size: 220,
            },
            {
                header: "Location",
                accessorKey: "job_location",
                filterFn: "contains",
                size: 20,
            },
            {
                header: "Source",
                accessorKey: "source",
                size: 20,
            },
            {
                header: "Date Posted",
                accessorKey: "date_posted",
                filterFn: "contains",
                size: 20,
            },
        ],
        []
    );

    return (
        <div>
            <MaterialReactTable
                columns={columns}
                data={data ? data : []}
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
                state={{ isLoading: isLoading }}
                initialState={{ showColumnFilters: true }}
            />
        </div>
    );
};

export default DataTable;
