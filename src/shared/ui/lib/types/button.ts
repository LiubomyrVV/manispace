export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'light';
export type ButtonShape = 'rounded' | 'square' | 'pill';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
}