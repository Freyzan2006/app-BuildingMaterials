import React from "react";

interface IProps {
    children: React.ReactNode
}

export const Container: React.FC<IProps> = ({ children }) => {
    return (
        <div className="container mx-auto max-w-screen-lg">
            { children }
        </div>  
    )
}

export default Container;