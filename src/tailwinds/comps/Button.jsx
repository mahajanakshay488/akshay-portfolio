import React from 'react'
import { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { VariantProps } from "tailwind-variants";

const buttonStyle = tv({
    base: 'text-slate-700 uppercase tracking-wide hover:bg-slate-500 hover:text-white font-medium rounded-md',
    variants: {
        color: {
            primary: 'bg-primary-light hover:text-white hover:bg-primary',
            secondary: 'bg-secondary-light hover:bg-secondary hover:text-white',
            white: 'bg-white hover:bg-white hover:text-black',
        },
        size: {
            small: 'text-sm',
            medium: 'text-md',
            large: 'text-lg',
        },
        type: {
            button: 'rounded-md py-2 px-4',
            badge: 'rounded-full py-1 px-3'
        }
    }
});

const Button = ({onClick,color, size, className, type, children}) =>{
    return <button onClick={onClick} className={buttonStyle({ color, size, type, className })}>{children}</button>
}

export default Button;