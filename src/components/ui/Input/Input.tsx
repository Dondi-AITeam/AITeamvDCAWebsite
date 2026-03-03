import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.css';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={clsx(styles.input, error && styles.error, className)}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';
export { Input };
