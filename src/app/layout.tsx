import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";

const robotoFont = Roboto({
	subsets: ["cyrillic"],
	weight: ["400", "700"],
	variable: "--font-sans",
});

type RootLayoutProps = {
	children: Readonly<React.ReactNode>;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="ru" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					robotoFont.variable
				)}
			>
				{children}
			</body>
		</html>
	);
}
