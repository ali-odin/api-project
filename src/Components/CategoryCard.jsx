import "../css/CategoryCard.css"
import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Context } from "../context/MainContext";
import test_img from "../assets/PngItem_2129108 1.png"

const CategoryCard = (props) => {

    const {handleSelectedCategory} = useContext(Context)

    return ( 
        <div className="category-card" onClick={() => handleSelectedCategory(props.category)}>
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
                    <img src={test_img} alt="" />
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
                        {props.category}
                    </Typography>
                </div>
            </Box>
        </div>
     );
}
 
export default CategoryCard;