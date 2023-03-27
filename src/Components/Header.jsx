import "../css/Header.css"
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
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
                    Api Project
                </Typography>
                <Box>
                    <KeyboardArrowDownIcon
                        sx={{
                            color: "var(--main-color)",
                            fontSize: "35px",
                            cursor: "pointer"
                        }}
                    />
                </Box>
            </Container>
        </div>
     );
}
 
export default Header;