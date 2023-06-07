import React, { useEffect, useRef, useState } from 'react'
import "../home/home.css"
import Coin from './coin'
import axios from 'axios'
import { GrRefresh } from "react-icons/gr"


export default function Home() {


  const [coindata, setCoindata] = useState([])
  const [search, setSearch] = useState()
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    fetchCoin()
  }, [])



  const fetchCoin = async () => {
    try {
      setIsLoad(true)
      const res = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
      setCoindata(res.data.coins)


    } catch (error) {
      setIsLoad(true)
      console.log(error);
    }
    setIsLoad(false)
    setSearch("")
  }




  const searChange = (e) => {
    setSearch(e.target.value.trim())
    console.log(search);

    let data = coindata.filter((coin) => {
      return (coin.name.toLowerCase().includes(search.toLowerCase()));

    })
    setCoindata(data)
    if (e.target.value === "") {
      fetchCoin()
    }
  }



  return (
    <div className='crypto-page' >
      <div className="head">
        <h2>CryptoCheaker</h2>
      </div>

      <div className="list-container">

        <div className="search-holder">
          <input value={search} onChange={(e) => { searChange(e) }} type="text" placeholder='Search the coin...' className='coin-search' />
          <div className='refersh-icon' onClick={fetchCoin}><GrRefresh /></div>
        </div>


        {isLoad && <h5 className="loading">Loading....</h5>}
        <div className="coin-list">
          {
            coindata.map((coin) => {
              return <Coin id={coin.id}
                coinSymbol={coin.symbol}
                coinName={coin.name}
                icon={coin.icon}
                price={coin.price}
                percentage={coin.priceChange1h}
                marketCap={coin.marketCap}
                key={coin.id} />
            })
          }
        </div>

      </div>


    </div>
  )
}
