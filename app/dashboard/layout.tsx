import DashboardNavigation from "@/components/navigations/DashboardNavigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <DashboardNavigation />
      {children}
    </main>
  );
}
