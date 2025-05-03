import GuestNavigation from "@/components/navigations/GuestNavigation";

export default function GuestLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <GuestNavigation />
        {children}
      </>
    );
  }
  