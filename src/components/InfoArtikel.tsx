import artikel from '../data/artikel.json';
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export const InfoArtikel = () => {
    return (
        <>
            <div className="text-center p-[3rem]">
                <h1 className="text-4xl font-black mb-5">Artikel Terkini</h1>
                <div className="flex flex-wrap justify-center">
                    {artikel.map((data: any, index: number) => (
                        <div key={index} className="relative bg-gray-200 border border-1 border-gray-200 shadow-lg rounded-lg m-5 w-1/4">
                            <div className="absolute top-0 right-0 p-2 bg-gray-200/40 border border-1 border-gray-400 rounded-full m-3">
                                <Link to={`/artikel/${index + 1}`}>
                                    <FiArrowUpRight className="text-2xl text-gray-200 transition-transform transform hover:scale-110 hover:rotate-45"/>
                                </Link>
                            </div>
                            <img src={data.image} alt="Test" className="w-full h-1/2 mb-5 rounded-t-lg" />
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <p className="text-sm">{data.content[0].substring(0, 70)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}