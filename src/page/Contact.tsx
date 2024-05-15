import { Navbar, MarqueeCuaca, Footer } from "../components"
import { MdPermPhoneMsg, MdPhone } from "react-icons/md";

export const Contact = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <MarqueeCuaca />
                <section className="p-[2.5rem]">
                    <div>
                        <h1 className="text-4xl font-black text-center">Kontak Kami</h1>
                        <div className="flex gap-10 justify-center p-5 mt-5">
                            <div className="flex gap-3 items-center">
                                <MdPhone className="text-2xl text-blue-400"/>
                                <p className="font-semibold text-lg">Kontak Person: Denny <span className="font-black">08562862525</span></p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <MdPermPhoneMsg className="text-2xl text-blue-400"/>
                                <p className="font-semibold text-lg">Kontak Saran dan Masukan: Denny <span className="font-black">081347507090</span></p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer className="mt-auto"/>
            </div>
        </>
    )
}