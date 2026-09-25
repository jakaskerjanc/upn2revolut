import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { cn } from '../../lib/cn';

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // Revolut's primary CTA: black pill on light, white pill on dark.
        default: 'bg-ink text-on-ink hover:bg-ink-pressed active:bg-ink-pressed',
        accent: 'bg-accent text-accent-ink hover:bg-accent-pressed active:bg-accent-pressed',
        soft: 'bg-surface-soft text-ink hover:bg-line active:bg-line',
        outline: 'border border-ink bg-canvas text-ink hover:bg-surface-soft active:bg-surface-soft',
      },
      size: {
        // Pill chip: 36px, bumped to a 44px touch target below `sm`.
        sm: 'h-11 px-4 text-button-sm font-semibold sm:h-9',
        default: 'h-12 px-7 text-button-md font-semibold',
        // Hero CTA — the one place a button label is set in Aeonik Pro.
        lg: 'h-14 px-8 font-display text-button-lg font-medium',
        icon: 'size-12',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
