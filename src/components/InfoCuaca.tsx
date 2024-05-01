import { useEffect, useState } from "react"
import { getBmkg } from "../functions/getBmkg"
import { Loading } from "../page"

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

    console.log(datas)

    return (
        <div className="text-center p-[3rem]">
            <h1 className="text-4xl font-black">Cuaca Terkini</h1>
            <h1 className="p-5 text-xl">{(datas as any).description}</h1>
            <div className="flex flex-wrap justify-center">
                {(datas as any).params[5].times.map((data: any, index: number) => (
                    <div key={index} className="text-center w-[10rem] p-4 border border-gray-300 my-4">
                        <p className="text-2xl font-black">{data.date}</p>
                        <p className="text-xl font-black">{data.times}</p>
                        <p>{data.celcius}</p>
                        <p>{data.fahrenheit}</p>
                        {(datas as any).params[6].times[index] && (
                            <p>{(datas as any).params[6].times[index].name}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}