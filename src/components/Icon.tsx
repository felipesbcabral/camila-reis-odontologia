import type { LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

export function Icon({ icon: LucideIconComponent, className = '', size = 24 }: IconProps) {
  return <LucideIconComponent className={className} size={size} strokeWidth={1.5} />;
}
