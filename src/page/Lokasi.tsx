import { Navbar, MarqueeCuaca, Footer } from "../components"

export const Lokasi = () => {
    return (
        <>  
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <MarqueeCuaca />
                <section className="p-[2.5rem]">
                    <div>
                        <h1 className="text-4xl font-black text-center">Lokasi Kami</h1>
                        <div className="max-w-full list-none transition-none overflow-hidden p-5 max-h-full">
                            <div className="h-full w-full max-w-full mt-5">
                                <iframe className="h-[35rem] w-full border-0" src="https://www.google.com/maps/embed/v1/search?q=Gereja+Kristen+Jawa+Ambarrukma+꧋ꦒꦼꦫꦺꦗꦏꦿꦶꦱ꧀ꦠꦼꦤ꧀ꦗꦮꦄꦩ꧀ꦧꦂꦫꦸꦏ꧀ꦩ,+Jalan+Ampel,+Papringan,+Caturtunggal,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer className="mt-auto"/>
            </div>
        </>
    )
}