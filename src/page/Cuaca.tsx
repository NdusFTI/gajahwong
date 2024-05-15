import { Navbar, MarqueeCuaca, InfoCuaca, Footer } from "../components"

export const Cuaca = () => {
    return (
        <>  
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <MarqueeCuaca />
                <InfoCuaca />
                <Footer className="mt-auto"/>
            </div>
        </>
    )
}