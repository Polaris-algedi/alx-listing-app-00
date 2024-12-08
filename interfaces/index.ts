export type CardProps = {
  title: string;
  description: string;
  image: string;
  onButtonClick: () => void;
};

export type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};
