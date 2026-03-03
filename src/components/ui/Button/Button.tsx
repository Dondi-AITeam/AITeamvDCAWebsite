import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './Button.module.css';
import { clsx } from 'clsx';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(styles.button, styles[variant], styles[size], className)}
                disabled={isLoading || disabled}
                {...props}
            >
                {isLoading && <Loader2 className={styles.spinner} size={16} />}
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';
export { Button };
