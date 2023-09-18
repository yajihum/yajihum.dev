import Footer from "../Footer";
import Header from "../Header";

export default function BasicLayout ({
  children,
}: {
  children: React.ReactNode;
}){
    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto max-w-4xl px-4 md:px-6">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold text-zinc-900">News Site</h1>
                    <p className="text-zinc-900 text-lg">News from all over the world in one place</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}