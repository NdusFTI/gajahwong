import artikel from '../data/artikel.json';

export const InfoArtikelDetail = ({ id }: { id: number }) => {
    const selectedArtikel = artikel[id];

    return (
        <>
            <div className="text-center">
                <h2 className="text-base font-semibold mt-5">Artikel</h2>
                <h1 className="text-2xl font-bold">{selectedArtikel.title}</h1>
                <p className="text-sm mb-5">Penulis: {selectedArtikel.author}</p>
                <img className="w-full h-[20rem] object-cover" src={selectedArtikel.image} alt="Test" />
                <p className="text-right mx-5 my-2 text-sm">Tanggal: {selectedArtikel.date}</p>
                <div>
                    {selectedArtikel.content.map((item, index) => (
                        <p key={index} className="mb-5 mt-5 text-justify px-24">{item}</p>
                    ))}
                </div>
            </div>
        </>
    )
}