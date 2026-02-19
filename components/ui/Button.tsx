import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'danger';
    href?: string;
    isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'primary',
    href,
    isExternal,
    ...props
}) => {
    const baseStyles = "font-mono text-sm font-bold px-6 py-2 transition-all duration-200 uppercase tracking-wide inline-flex items-center justify-center";

    const variants = {
        primary: "bg-primary text-black border border-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:bg-black active:text-primary",
        outline: "bg-transparent text-black border border-black hover:bg-black hover:text-white",
        ghost: "bg-transparent text-black hover:bg-primary/20",
        danger: "bg-red-500 text-white border border-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        if (isExternal) {
            return (
                <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};
