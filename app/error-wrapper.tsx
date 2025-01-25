"use client";
import { useState } from "react";

interface WrapperProps{
    children: React.ReactNode
} 
const ErrorSimulator=({
    message='An Error occurred'
} : { message?:string})=>{
    const [error,setError] = useState(false);
    if(error) throw new Error(message);
    return (
        <button 
        title="Stimulate Error" 
        onClick={() => setError(true)}
        >
            Stimulate Error
        </button>
    );
};
export const ErrorWrapper = ({children}:WrapperProps) => {
    return (
        <div>
            <ErrorSimulator message="Stimulated error in root layout"/>
            {children}
        </div>
    );
}