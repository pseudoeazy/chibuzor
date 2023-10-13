interface Props {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: Props) {
  return (
    <main className="main-page-layout mx-auto max-w-[90rem] border overflow-x-hidden">
      {children}
    </main>
  );
}
