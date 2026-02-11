import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    isLoading?: boolean;
}

const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    isLoading,
    ...props
}: ButtonProps) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-ajce-blue text-white hover:bg-opacity-90 active:scale-95 shadow-lg shadow-ajce-blue/20',
        secondary: 'bg-ajce-gold text-ajce-blue hover:bg-opacity-90 active:scale-95 shadow-md',
        outline: 'border-2 border-ajce-blue text-ajce-blue hover:bg-ajce-blue/10 active:scale-95',
        ghost: 'text-ajce-blue hover:bg-ajce-blue/10 active:scale-95',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-8 py-3 text-lg',
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : null}
            {children}
        </motion.button>
    );
};

export default Button;
