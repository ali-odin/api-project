import "../css/ItemCard.css"
import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const ItemCard = ({product}) => {
    return ( 
        <div className="item-card">
            <div className="img-holder">
                <img src={product.image} alt="" />
            </div>
            <Typography
                variant='h5'
                className=""
                sx={{
                    fontFamily: "Josefin Sans",
                    fontWeight: "700",
                    color: "var(--main-color)",
                    flexWrap: "nowrap",
                    maxWidth: '300px !important',
                    height: "30px",
                    overflow: 'hidden',
                    textAlign: "center",
                    marginTop: "10px"
                }}
            >
                {product.title}
            </Typography>
            <Box 
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: 'center',
                    width: "100%"
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "Josefin Sans",
                        fontWeight: "700",
                        color: '#1E1E1E',
                        fontSize: "20px"
                    }}
                >
                    ${product.price}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Josefin Sans",
                        fontWeight: "700",
                        color: '#1E1E1E',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        fontSize: "20px"
                    }}
                >
                    <StarIcon
                        sx={{
                            color: "#FFE457"
                        }}
                    />
                    {product.rating.rate}
                </Typography>
            </Box>
        </div>
     );
}
 
export default ItemCard;