"use client";

import React from "react"

export const BackgroundBlur = ({ children } : { children : React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full relative bg-white">
            <div
                className="absolute inset-0 z-0"
                style={{
                background: "#ffffff",
                backgroundImage: `
                    radial-gradient(
                    circle at top center,
                    rgba(56, 193, 182, 0.5),
                    transparent 50%
                    )
                `,
                filter: "blur(80px)",
                backgroundRepeat: "no-repeat",
                }}
            />
                {children}
            </div>
    )
}