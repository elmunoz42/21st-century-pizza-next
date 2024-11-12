import Link from "next/link";

interface ButtonProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  className,
  children,
}) => (
  <Link
    href={href ? href : "#"}
    className={`bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-block ${className}`}
  >
    {children}
  </Link>
);
