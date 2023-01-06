import Header from "../src/components/Header";
import RocketsNavBar from "../src/components/NavBar/RocketsNavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <main>
          <RocketsNavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
