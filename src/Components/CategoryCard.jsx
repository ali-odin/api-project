import "../css/CategoryCard.css"
import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Context } from "../context/MainContext";
import test_img from "../assets/PngItem_2129108 1.png"

const CategoryCard = ({category, categoryImg}) => {

    const { handleSelectedCategory } = useContext(Context)
    console.log(category)

    return ( 
        <div className="category-card" onClick={() => handleSelectedCategory(category)}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    rowGap: "20px",
                    padding: "100px 30px 40px 30px",
                }}
            >
                <div className="img-holder">
                    <img src={categoryImg} alt="" />
                </div>
                <div className="category-name">
                    <Typography
                        sx={{
                            fontFamily: 'Josefin Sans',
                            color: "var(--main-color)",
                            fontWeight: "700",
                            textTransform: "capitalize",
                            fontSize: "22px",
                            textAlign: "center"
                        }}
                    >
                        {category}
                    </Typography>
                </div>
            </Box>
        </div>
     );
}
 
export default CategoryCard;