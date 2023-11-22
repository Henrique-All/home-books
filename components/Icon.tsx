interface IconProps {
  icon: string
}

export function Icon({ icon }: IconProps) {
  return <span className="material-symbols-outlined text-2xl">{icon}</span>
}
