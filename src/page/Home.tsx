import aboutUs from "../assets/AboutUs.png"
import { Navbar, MarqueeCuaca, Footer } from "../components"

export const Home = () => {
    return (
        <>
            <Navbar />
            <MarqueeCuaca />
            <section className="bg-blue-500 p-[5rem] text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-black">Selamat Datang Di Website Unit PB PALMA GajahWong</h1>
                    <h1 className="text-xl font-medium p-2">Tanggap Kedaruratan Banjir Sungai Gadjah Wong melalui Kesiapsiagaan dan Penanganan Bencana yang Efektif dan Inklusif</h1>
                </div>
            </section>
            <section className="p-[5rem]">
                <div>
                    <h1 className="text-4xl font-black text-center">Tentang Kami</h1>
                    <div className="flex gap-20 p-[5rem]">
                        <p>Aktivis-aktivis yang bergerak dalam bidang sosial kemanusiaan, kebencanaan, inklusi, kelompok rentan, pelayanan kemasyarakatan gereja, dan praktisi teknis dengan pengalaman kerja pada lembaga kemanusiaan dan pendidikan</p>
                        <img src={aboutUs} alt="About Us" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}