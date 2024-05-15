
import { Navbar, MarqueeCuaca, InfoArtikel, Footer } from "../components"

export const Artikel = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <MarqueeCuaca />
                <InfoArtikel />
                <Footer className="mt-auto"/>
            </div>
        </>
    )
}