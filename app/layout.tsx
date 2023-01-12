import { Suspense } from "react";
import RocketsNavBar from "../SpaceX/library/navBar/RocketsNavBar";
import Header from "../src/components/Header";
import "./globals.css";
import Loading from "./rocket/[id]/loading";

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
          {/* @ts-expect-error Server Component */}
          <RocketsNavBar />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
