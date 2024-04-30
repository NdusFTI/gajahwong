import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { getBmkg } from "../functions/getBmkg";
import { Loading } from "../page";

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
            {(datas as any).params[6].times.map((data: any, index: number) => (
                <span key={index} className="px-4 whitespace-nowrap">
                    <span>{data.date} / </span>
                    <span>{data.times} / </span>
                    <span>{data.name}</span>
                </span>
            ))}
        </Marquee>
    );
};
