import { useEffect, useState }  from "react";
import { Loading }              from "../page";
import * as cuacaAssets         from "../assets/cuaca";
import { getBmkg }              from "../functions/getBmkg";

export const InfoCuaca = () => {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getBmkg("DIYogyakarta", "Yogyakarta");
            setDatas(result);
        };

        fetchData();
    }, []);

    if (!datas) {
        return <Loading />;
    }

    return (
        <>
            <div className="text-center p-[3rem]">
                <h1 className="text-4xl font-black">Cuaca Terkini</h1>
                <h2 className="p-5 text-xl">{(datas as any).description}</h2>
                <div className="flex flex-wrap justify-center">
                    {(datas as any).params[5].times.map((data: any, index: number) => {
                        let asset = null;

                        let isAM = false;
                        if (parseInt(data.times.split(":")[0]) < 12) {
                            isAM = true;
                        }

                        const conditionName = (datas as any).params[6].times[index].name;

                        switch (conditionName) {
                            case "Berawan":
                                asset = isAM ? cuacaAssets.berawanAm : cuacaAssets.berawanPm;
                                break;
                            case "Cerah":
                                asset = isAM ? cuacaAssets.cerahAm : cuacaAssets.cerahPm;
                                break;
                            case "Hujan Ringan":
                                asset = isAM ? cuacaAssets.hujanRinganAm : cuacaAssets.hujanRinganPm;
                                break;
                            case "Hujan Petir":
                                asset = isAM ? cuacaAssets.hujanPetirAm : cuacaAssets.hujanPetirPm;
                                break;
                            case "Hujan Sedang":
                                asset = isAM ? cuacaAssets.hujanSedangAm : cuacaAssets.hujanSedangPm;
                                break;
                            case "Cerah Berawan":
                                asset = isAM ? cuacaAssets.cerahBerawanAm : cuacaAssets.cerahBerawanAm;
                                break;
                            default:
                                break;
                        }

                        const bgClass = isAM ? "bg-blue-100" : "bg-gray-200";

                        return (
                            <>
                                <div key={index} className={`text-center md:w-[11.5rem] w-1/2 md:p-4 border border-gray-300 md:my-4 ${bgClass}`}>
                                    {asset && <img className="w-[5rem] p-2 mx-auto" src={asset} alt={conditionName} />}
                                    <p className="text-2xl font-black my-2">{data.date}</p>
                                    <p className="text-lg font-black my-2">{data.times} WIB</p>
                                    <p className="my-1">{data.celcius} <span className="text-xl font-black">/</span> {data.fahrenheit}</p>
                                    <p className="my-3">💧 {(datas as any).params[0].times[index].value}</p>
                                    <p>{conditionName}</p>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};