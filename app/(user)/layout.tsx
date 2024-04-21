import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import { inter, suwannaphum, localCustomFont } from "./fonts";
import { Metadata } from "next";
import StoreProvider from "../StoreProvider";
import SessionWrapper from "../SessionProvider";

export const metadata: Metadata = {
  title: "ISTAD Ecommerce Web",
  description: "ISTAD Ecommerce Web is a web application for selling products.",
  openGraph: {
    title: "ISTAD Ecommerce Web",
    description:
      "ISTAD Ecommerce Web is a web application for selling products.",
    images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
  },
	title: "ISTAD Ecommerce Web",
	description: "ISTAD Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "ISTAD Ecommerce Web",
		description:
			"ISTAD Ecommerce Web is a web application for selling products.",
		images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< HEAD
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}
      >
        <StoreProvider>
          <header>
            <NavbarComponent />
          </header>
          <ErrorBoundary errorComponent={Error}>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </ErrorBoundary>
        </StoreProvider>
      </body>
    </html>
  );
=======
	return (
		<html lang="en">
			<SessionWrapper>
				<body
					className={`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}
				>
					<StoreProvider>
						<header>
							<NavbarComponent />
						</header>
						<ErrorBoundary errorComponent={Error}>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</ErrorBoundary>
					</StoreProvider>
				</body>
			</SessionWrapper>
		</html>
	);
>>>>>>> c5a44ef70c54b85314a2cd827821bc9a126f48fe
}
