import "../css/Header.css"
import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {

    const [isMenu, setIsMenu] = useState(false)

    return ( 
        <div className="header">
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "bold",
                        color: "var(--main-color)",
                    }}
                >
                    Karim
                </Typography>
                <Typography
                    sx={{
                        fontWeight: "700",
                        fontStyle: "italic",
                    }}
                >
                    API Project
                </Typography>
                <Box
                    sx={{
                        position: "relative"
                    }}
                >
                    <KeyboardArrowDownIcon
                        onClick={() => setIsMenu(prev => !prev)}
                        sx={{
                            color: "var(--main-color)",
                            fontSize: "35px",
                            cursor: "pointer"
                        }}
                    />
                    {
                        isMenu &&
                            <Box
                                sx={{
                                    width: "150px",
                                    backgroundColor: "red",
                                    position: "absolute",
                                    top: "60px",
                                    right: "40px",
                                    borderRadius: '10px',
                                    backgroundColor: "white",
                                    boxShadow: "0px 2px 14px 10px rgba(220,210,210,0.65)",
                                }}
                            >
                                <ul>
                                    <li><a href="https://allaw-dev.netlify.app/html">Portfolio</a></li>
                                    <li><a href="https://wa.link/2us214">Contact</a></li>
                                </ul>
                            </Box>
                    }
                </Box>
            </Container>
        </div>
     );
}
 
export default Header;