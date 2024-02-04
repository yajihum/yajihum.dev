import BasicLayout from "@/components/layouts/BasicLayout";
import type { Metadata } from "next";
import "./globals.css";

const siteName = "yajihum.dev";
const description = `Yajihum's personal website`;
const url = "https://yajihum.dev";
const image = "https://images.site.yajihum.dev/ogp.png";

export const metadata: Metadata = {
	metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
	title: {
		default: siteName,
		template: "%s | yajihum.dev",
	},
	description: description,
	openGraph: {
		type: "website",
		title: "Home",
		description: description,
		url: url,
		siteName: siteName,
		images: [image],
	},
	twitter: {
		card: "summary",
		title: "Home",
		description: description,
		creator: "@yajihum",
		images: [image],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body>
				<BasicLayout>{children}</BasicLayout>
			</body>
		</html>
	);
}
