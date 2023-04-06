import "../css/Home.css"
import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CategoryCard from "../Components/CategoryCard";
import img_1 from "../assets/electronics.jpg"
import img_2 from "../assets/jewelery.jpg"
import img_3 from "../assets/men's clothes.jpg"
import img_4 from "../assets/women's-clothes.jpg"

const Home = () => {

    const [categories, setCategories] = useState([])
    const categoriesImgs = [img_1,img_2,img_3,img_4]

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(categoriesData => setCategories(categoriesData))
    }, [])

    return ( 
        <div className="home">
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    rowGap: "70px"
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: "Lato",
                        fontWeight: "300",
                        color: "#5B5B5B",
                        textAlign: {md: "start", xs: "center"}
                    }}
                >
                    Select what kind of products you want to see using API...
                </Typography>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {lg: "auto auto auto auto", md: "auto auto auto", xs: "auto"},
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "25px",
                    }}   
                >
                    {
                        categories.length
                            ?
                        categories.map((category, index) => {
                            return (
                                <Link to='/shop'>
                                    <CategoryCard 
                                        category={category}
                                        categoryImg={categoriesImgs[index]}
                                    />
                                </Link>
                            )
                        })
                            :
                        <div class="lds-dual-ring"></div>
                    }
                </Box>
                {/* <Link to='/shop'>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "var(--main-color)",
                            marginBottom: "50px",
                            width: "150px",
                            height: "50px",
                            borderRadius: "10px"
                        }}
                    >
                        Continue
                    </Button>
                </Link> */}
            </Container>
        </div>
     );
}
 
export default Home;