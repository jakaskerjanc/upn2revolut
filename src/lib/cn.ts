import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Register the DESIGN.md type scale as font sizes; otherwise tailwind-merge
// reads `text-body-sm` as a colour and drops it next to `text-muted`.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        'display-lg',
        'display-md',
        'heading-lg',
        'heading-md',
        'heading-sm',
        'body-lg',
        'body-md',
        'body-sm',
        'button-lg',
        'button-md',
        'button-sm',
        'caption',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
