import React from 'react';
import '../styles/index.css';

// button size
export enum ButtonSize {
  Large = 'lg',
  Middle = 'md',
  Small = 'sm',
}

// button type
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}
interface ButtonProps {
  className?: string; //
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = props => {
  const { children } = props;

  return (
    <button className="border hover:pointer bg-white rounded pl-10 pr-10 pt-5 pb-5">
      {children}
    </button>
  );
};
export default Button;
