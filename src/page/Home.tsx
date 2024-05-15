import aboutUsImage                     from "../assets/AboutUs.png"
import { Navbar, MarqueeCuaca, Footer } from "../components"

export const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <MarqueeCuaca />
                <section className="bg-blue-500 p-[5rem] text-white">
                    <div className="text-center">
                        <h1 className="text-4xl font-black md:mb-3 mb-5">Selamat Datang Di Website Unit PB PALMA GajahWong</h1>
                        <h1 className="text-xl font-medium md:px-48">Tanggap Kedaruratan Banjir Sungai Gadjah Wong melalui Kesiapsiagaan dan Penanganan Bencana yang Efektif dan Inklusif</h1>
                    </div>
                </section>
                <section className="p-10">
                    <div className="md:flex md:justify-center md:items-center md:gap-10 md:px-[5rem] md:py-[2rem]">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl font-black text-center mb-6">Tentang Kami</h1>
                            <p className="md:text-lg md:p-5 text-center mb-10">Aktivis-aktivis yang bergerak dalam bidang sosial kemanusiaan, kebencanaan, inklusi, kelompok rentan, pelayanan kemasyarakatan gereja, dan praktisi teknis dengan pengalaman kerja pada lembaga kemanusiaan dan pendidikan</p>
                        </div>
                        <img src={aboutUsImage} alt="Tentang Kami" className="md:max-w-full rounded-md" />
                    </div>
                </section>
                <Footer className="mt-auto"/>
            </div>
        </>
    )
}
