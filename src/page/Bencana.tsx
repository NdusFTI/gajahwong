import { Navbar, MarqueeCuaca, Footer } from "../components"

export const Bencana = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <MarqueeCuaca />
                <Footer className="mt-auto"/>
            </div>
        </>
    )
}