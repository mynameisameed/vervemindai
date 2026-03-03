export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover 
    ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl' 
    : '';
  
  return (
    <div className={`bg-white rounded-2xl shadow-md p-8 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
