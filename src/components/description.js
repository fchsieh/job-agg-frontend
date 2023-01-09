import React from "react";
import { Typography } from "@mui/material";

const Description = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60%",
                margin: "auto",
                textAlign: "center",
                marginTop: "2.5rem",
            }}
        >
            <Typography variant="h6">
                <Typography
                    display="inline"
                    fontWeight="fontWeightBold"
                    variant="h6"
                >
                    Job Aggregator (Job Agg)
                </Typography>{" "}
                is a convenient app for searching and comparing jobs from
                multiple sites. It updates daily and stores data from the past 7
                days. Give it a try and see how it can help you in your job
                search!
            </Typography>
        </div>
    );
};

export default Description;
