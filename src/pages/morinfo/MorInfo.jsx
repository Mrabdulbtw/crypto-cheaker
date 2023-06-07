import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../morinfo/more.css"

export default function MorInfo() {
  const { id } = useParams()
  const [singleData, setSingleData] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    getSingleData()
  }, [])

  const getSingleData = async () => {
    const res = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=0`)
    const coinName = res.data.coins
    let data = [...coinName].find((coin) => coin.id === id)
    setSingleData(data)
  }

  console.log(singleData.name);

  if (singleData.name) {
   
    return (
      <div className="full-page" style={{ background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url('https://source.unsplash.com/random/?${id}')`, backgroundSize: 'cover', height: '100vh', objectFit: 'cover' }} >
        <div className='single-currency'>
          <h2>{singleData.name}</h2>
          <img src={singleData.icon} alt="" />
          <div className="discrip">
            <div className="data-row">
              <div className="data">symbol :</div>
              <p>{singleData.symbol}</p>
            </div>
            <div className="data-row">
              <div className="data">currentprice :</div>
              <p> $ {singleData.price.toFixed()}</p>
            </div>
            <div className="data-row">
              <div className="data">volume :</div>
              <p> $ {singleData.volume.toLocaleString()}</p>
            </div>
            <div className="data-row">
              <div className="data">marketCap :</div>
              <p> $ {singleData.marketCap.toLocaleString()}</p>
            </div>
            <div className="data-row">
              <div className="data">priceChange1h :</div>
              <p className={singleData.priceChange1h > 0 ? 'green' : "red"} >{singleData.priceChange1h}</p>
            </div>
            <div className="data-row">
              <div className="data">priceChange1d :</div>
              <p className={singleData.priceChange1d > 0 ? 'green' : "red"}>{singleData.priceChange1d}</p>
            </div>
          </div>
          <button onClick={() => navigate('/')}>goback</button>
        </div>
      </div>
    )

  } else {
  return null
  }
}
