import H2WithId from "@/components/atoms/H2WithId";
import { LinkToPage } from "@/components/atoms/LinkToPage";
import PostLinks from "@/components/molecules/PostLinks";
import SnsLinks from "@/components/molecules/SnsLinks";
import SpeachLinks from "@/components/molecules/SpeachLinks";
import WorksCards from "@/components/molecules/WorksCards";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getPostsByTag } from "@/lib/blog";
import { speakerDeckEmbeddings } from "../speacker-deck";

const greetingTitle = `This is Yajihum's portfolio website `;

export default function Home() {
	const newPosts = getPostsByTag(
		"tech",
		["title", "description", "pubDate", "tags", "icon", "slug"],
		4,
	);

	return (
		<>
			<section className="grid grid-cols-1 justify-items-center gap-10 py-12">
				<section className="grid grid-cols-1 gap-2 whitespace-pre-wrap text-center font-semibold md:gap-6">
					<p className="text-3xl md:text-5xl">Welcome!</p>
					<p className="flex items-center text-lg md:text-2xl">
						<span className="inline-block">{greetingTitle}</span>
						<img
							src="https://cdn.emoji.yajihum.dev/animals-and-nature/131.png"
							height="30"
							alt="芽が出ている絵文字"
							className="inline-block h-6 w-6 md:h-8 md:w-8"
						/>
					</p>
				</section>
				<img
					src="https://images.site.yajihum.dev/rorisu.png"
					width={200}
					height={200}
					alt="正面から見て左に体を傾け左腕をあげているロリスの画像"
					className="h-36 w-36 md:h-64 md:w-64"
				/>
			</section>
			<div className="grid grid-cols-1 gap-20">
				<section
					className="grid grid-cols-1 place-items-stretch gap-6"
					aria-label="About me"
				>
					<SectionTitle
						id="about"
						title="About"
						description="Here is my introduction and my social media links."
					/>
					<Card className="border border-neutral-700 bg-neutral-800 text-white backdrop-blur transition-colors">
						<CardHeader className="grid grid-cols-1 gap-3">
							<CardTitle>
								<p className="flex items-center gap-2 text-xl">
									<Avatar>
										<AvatarImage
											src="https://github.com/yajihum.png"
											alt="@yajihum"
											className="inline-block"
										/>
										<AvatarFallback>yajihum</AvatarFallback>
									</Avatar>
									やじはむ
								</p>
							</CardTitle>
							<CardDescription className="text-neutral-200">
								<span className="block">
									{`I'm a frontend engineer working at `}
									<a
										href="https://qubena.com/"
										className="text-blue-500 hover:underline"
									>
										COMPASS
									</a>
									.
								</span>
								<span className="block">
									ぬいぐるみとヨルシカがとても好き。毎日ほっこり生きている...😴
								</span>
							</CardDescription>
						</CardHeader>
						<Separator className="bg-neutral-700" />
						<CardContent className="p-6 md:p-5">
							<SnsLinks />
						</CardContent>
					</Card>
				</section>
				<section
					className="grid grid-cols-1 place-items-stretch gap-6"
					aria-label="works"
				>
					<SectionTitle
						id="works"
						title="Works"
						description="Here are the library and applications I have created."
					/>
					<WorksCards />
				</section>
				<section
					className="grid grid-cols-1 place-items-stretch gap-3"
					aria-label="speach"
				>
					<div className="flex flex-col gap-2 md:flex-row md:place-content-between">
						<SectionTitle
							id="speach-new-slides"
							title="Speach / New Slides"
							description="Here is the new slide from my presentation."
						/>
						<LinkToPage href="/speach" title="Speach Page" />
					</div>
					<SpeachLinks speackerDeckEmbeddings={speakerDeckEmbeddings} />
				</section>
				<section
					className="grid grid-cols-1 place-items-stretch gap-3"
					aria-label="blog"
				>
					<div className="flex flex-col place-content-between gap-2 md:flex-row">
						<SectionTitle
							id="blog-new-posts"
							title="Blog / New Posts"
							description="Here are the posts I recently published on my blog."
						/>
						<LinkToPage href="/blog" title="Blog Page" />
					</div>
					<PostLinks items={newPosts} tag="tech" />
				</section>
			</div>
		</>
	);
}

const SectionTitle = ({
	id,
	title,
	description,
}: {
	id: string;
	title: string;
	description: string;
}) => {
	return (
		<div className="grid grid-cols-1 gap-3 px-1">
			<H2WithId id={id} title={title} />
		</div>
	);
};
