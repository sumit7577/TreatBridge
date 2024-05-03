import React from "react";
import Grid from "./Grid";

interface CardProps {
    children: React.ReactNode,
    className: string
}

function Card({ children, className }: CardProps) {
    return (
        <Grid className={`bg-white shadow-md p-5 rounded-md ${className} items-center`}>
            {children}
        </Grid>
    )
}

export default Card;