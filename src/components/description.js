import React from "react";
import { loremIpsum } from "lorem-ipsum";

const Description = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "70%",
                margin: "auto",
                textAlign: "center",
                marginTop: "2.5rem",
            }}
        >
            {loremIpsum({ count: 1, units: "paragraphs", format: "plain" })}
        </div>
    );
};

export default Description;
