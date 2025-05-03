export default function AccountLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="min-h-screen h-full flex items-center justify-center">
        <section className="w-1/3">
          {children}
        </section>
      </main>
    );
  }
  