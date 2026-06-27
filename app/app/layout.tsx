import "./globals.css";

export const metadata = {
  title: "Healzila SaaS",
  description: "AI Health Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
