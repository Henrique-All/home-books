export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="h-full bg-black text-white">{children}</div>
}
