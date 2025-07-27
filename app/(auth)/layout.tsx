const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (<div className="flex-center flex-col min-h-screen w-full">{children}</div>);
}

export default AuthLayout;