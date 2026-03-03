import { HTMLAttributes, forwardRef } from 'react';
import styles from './Card.module.css';
import { clsx } from 'clsx';

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={clsx(styles.card, className)} {...props} />
    )
);
Card.displayName = 'Card';
export { Card };
