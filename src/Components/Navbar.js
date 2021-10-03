import React from 'react'
import BTC from '../BTC.svg'
import Custombutton from './Custombutton';
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

function Navbar() {


    const styles = makeStyles({
        bar:{
            paddingTop: "1.15rem",
            backgroundColor: "#fff",
            ['@media (max-width:780px)']: { 
               flexDirection: "column"
              }
        },
        BTC: {
            width: "15%", 
            ['@media (max-width:780px)']: { 
               display: "none"
               }
        },
        // logoMobile:{
        //     width: "100%", 
        //     display: "none", 
        //     ['@media (max-width:780px)']: { 
        //         display: "inline-block"
        //         }
        // },
        menuItem: {
            cursor: "pointer", 
            flexGrow: 1,
            "&:hover": {
                color:  "#4f25c8"
            },
            ['@media (max-width:780px)']: { 
                paddingBottom: "1rem"    }
        }
    })
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={BTC} className={classes.BTC}/> 
                {/* <img src={logoMobile} className={classes.logoMobile}/>  */}
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Blog
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Careers
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Demos 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <Custombutton txt="Trial Our Product"/>
            </Toolbar>
    )
}

export default Navbar
