import Layout from "@/Components/Header/Header";

export const metadata = {
  title: "Test tecnico",
  description: "Test tecnico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout />
        {children}
      </body>
    </html>
  );
}
