import { useEffect, useState }  from "react";
import { Loading }              from "../page";
import * as cuacaAssets         from "../assets/cuaca";
import Marquee                  from "react-fast-marquee";
import { getBmkg }              from "../functions/getBmkg";

export const MarqueeCuaca = () => {
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
        <Marquee loop={0} pauseOnHover={true} autoFill={true} className="bg-gray-200 py-1">
            {(datas as any).params[6].times.map((data: any, index: number) => {
                let asset = null;

                let isAM = false;
                if (parseInt(data.times.split(":")[0]) < 12) {
                    isAM = true;
                }

                switch (data.name) {
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

                return (
                    <>
                        <span key={index} className="flex gap-3 px-4 whitespace-nowrap">
                            <span>{data.date}</span>
                            <span>{data.times} WIB</span>
                            {asset && <img className="w-[1.5rem] mx-auto" src={asset} alt={data.name} />}
                        </span>
                    </>
                )
            })}
        </Marquee>
    );
};
