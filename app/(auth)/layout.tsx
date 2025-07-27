const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (<div className="flex-center flex-col min-h-screen w-full px-10 md:px-0">
    <div className="w-full md:w-7/12 lg:w-1/3">
      {children}
    </div>
  </div>);
}

export default AuthLayout;