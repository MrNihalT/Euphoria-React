import React, { useEffect, useState } from "react";
import data from "../data.json";

function Brands(props) {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        setBrands(data.brands);
    }, []);

    // console.log(brands);

    return (
        <div className="brands">
            <h1>Top Brands Deal</h1>
            <p>
                Up To <span>60%</span> off on brands
            </p>
            <ul>
                {brands.map((item, index) => (
                    <li key={index}>
                        <a href="">
                            <img
                                src={require(`../assets/icons/${item.image}`)}
                                alt={item.name}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Brands;
