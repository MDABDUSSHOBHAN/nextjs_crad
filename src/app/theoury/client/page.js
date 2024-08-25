'use client'

import { fetchapi } from "@/action";
import { useEffect, useState } from "react";


function Client() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([]);
    async function getData() {
         setLoading(true)
        const api = await fetchapi();
        console.log(api);

        if (api) {
            setProducts(api);
                setLoading(false)
        }
    }

    useEffect(() => {

        getData()
    }, [])
 if(loading) return <div>Loading Data ! please wait</div>
    
 

    return <div>
        <h4>This is client component</h4>

        {

            <ul>
                {
                    products && products.length > 0 ?
                    products.map(item => <li>
                            {item.title}
                        </li>) : <h3>Data not found </h3>
                }
            </ul>
        }

    </div>;
}

export default Client;