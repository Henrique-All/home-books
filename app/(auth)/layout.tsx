export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="h-full w-screen bg-black text-white">{children}</div>
}
