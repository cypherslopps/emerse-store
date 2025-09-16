import DashboardContainer from "@/components/containers/DashboardContainer";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardContainer>
      {children}
    </DashboardContainer>
  );
}
