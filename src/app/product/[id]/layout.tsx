import React from "react";

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
            <div>
                <h2> Featured products section layout </h2>
            </div>
        </div>

    )
}