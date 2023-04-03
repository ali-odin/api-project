import React, { useContext } from "react";
import "../css/ShopGrid.css"
import { Container, Button } from "@mui/material";
import { Context } from "../context/MainContext";
import { Link } from "react-router-dom";
import ItemCard from "../Components/ItemCard"

const ShopGrid = () => {

    const { filteredProducts } = useContext(Context)
    console.log(filteredProducts)

    return ( 
        <div className="shop-grid">
            <Link to='/home'>
                <Button
                    variant='contained'
                >
                    Previous
                </Button>
            </Link>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: "20px",
                    marginTop: "50px"
                }}
            >
                {
                    filteredProducts.map((product) => {
                        return (
                            <ItemCard
                                product={product}
                            />
                        )
                    })
                }
            </Container>
        </div>
     );
}
 
export default ShopGrid;