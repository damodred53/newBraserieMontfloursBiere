import { useEffect, useState } from "react";
import styles from "./BeerGrid.module.scss";
import BeerButton from "../BeerButton/BeerButton";
import type { Beer } from "../../../Models/Beers";

const BeerGrid = () => {

    const [beers, setBeers] = useState<Beer[]>([]);

    useEffect(() => {
        const fetchDataBeer = async () => {
            const response = await fetch(`${import.meta.env.BASE_URL}/dataBeer.json`);   
            const data = await response.json();
            setBeers(data);
        };
        fetchDataBeer();
    }, []);

    console.log(beers);

    return (
        <div className={styles.wrapper}>   
            {beers.map((beer) => (
                <BeerButton key={beer.id} logoPath={beer.imagePath} name={beer.name} />
            ))}
        </div>
    );
}

export default BeerGrid;