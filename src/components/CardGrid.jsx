import { useEffect, useState } from "react";
import Card from "./Card";
import { getData } from "../api/getData";


function CardGrid({ featuresData }) {

    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setDataProduct(data);

        }
        fetchData();
    }, [])

    dataProduct.map((data) => {
        console.log(data.title, 'TITLE');
    })


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-2 border-slate-200 p-6 rounded-lg">
            {/*
                featuresData.map((data) => {
                    return (
                        <Card
                            key={data.id}
                            icon={data.icon}
                            title={data.title}
                            description={data.subtitle}
                        />
                    );
                })
            */}
            {
                dataProduct.map((data) => {
                    return (
                        <Card
                            key={data.id}
                            image={data.image}
                            title={data.title}
                            price={data.price}
                            description={data.description}
                        />
                    );
                })
            }
        </div>
    )
}
export default CardGrid;