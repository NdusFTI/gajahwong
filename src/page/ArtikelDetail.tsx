import artikel from '../data/artikel.json';
import { useParams } from 'react-router-dom';
import { Navbar, MarqueeCuaca, InfoArtikelDetail, Footer } from "../components"

export const ArtikelDetail = () => {
    const { id } = useParams();
    const artikelIndex = parseInt(id || "") - 1;
    const selectedArtikel = artikel[artikelIndex];

    if (!selectedArtikel) {
        throw new Error('Artikel Not Found');
    }

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <MarqueeCuaca />
                <InfoArtikelDetail id={artikelIndex}/>
                <Footer className="mt-auto"/>
            </div>
        </>
    );
};
