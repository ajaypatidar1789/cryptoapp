import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../CryptoContext';


const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    }}));

const Carousel = () => {
    const [Trending , setTrending] =useState([]);
    const {currency} = CryptoState();
    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency));
    
        console.log(data);
        setTrending(data);
      };
        console.log(Trending);

      useEffect(() => {
        fetchTrendingCoins();
      },[currency]);

      
        const classes = useStyles();

  return (
    <div className={classes.carousel}>carousel</div>
  )
}

export default Carousel;
