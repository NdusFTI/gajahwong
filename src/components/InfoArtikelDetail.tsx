import artikel from '../data/artikel.json';

export const InfoArtikelDetail = ({ id }: { id: number }) => {
    const selectedArtikel = artikel[id];

    return (
        <>
            <div className="text-center">
                <img className="w-full h-[20rem]" src={selectedArtikel.image} alt="Test" />
            </div>
        </>
    )
}