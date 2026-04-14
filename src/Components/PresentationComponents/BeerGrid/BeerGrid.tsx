import { useEffect, useState } from "react";
import styles from "./BeerGrid.module.scss";
import BeerButton from "../BeerButton/BeerButton";
import type { Beer } from "../../../Models/Beers";
import ModalDisplayBeer from "../../Modal/ModalDisplayBeer/ModalDisplayBeer";

const BeerGrid = () => {

    const [beers, setBeers] = useState<Beer[]>([]);
    const [selectedBeer, setSelectedBeer] = useState<Beer | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchDataBeer = async () => {
            const response = await fetch(`${import.meta.env.BASE_URL}/dataBeer.json`);   
            const data = await response.json();
            setBeers(data);
        };
        fetchDataBeer();
    }, []);

    const handleOpenModal = (beer: Beer) => {
        setSelectedBeer(beer);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedBeer(null);
    };

    return (
        <>
            <div className={styles.wrapper}>
                {beers.map((beer) => (
                    <BeerButton
                        key={beer.id}
                        logoPath={beer.imagePath}
                        name={beer.name}
                        onClick={() => handleOpenModal(beer)}
                    />
                ))}
            </div>

            <ModalDisplayBeer
                beer={selectedBeer}
                open={open}
                onClose={handleCloseModal}
            />
        </>
    );
}

export default BeerGrid;