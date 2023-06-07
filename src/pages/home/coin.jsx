import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Coin({
    coinSymbol,
    coinName,
    icon,
    price,
    percentage,
    marketCap,
    id
}) {
    const navigate = useNavigate()
    return (
        <div className='coin-details'>
            <div className="coin-row">
                <img className='icon' src={icon} alt="icon" />
                <div className="coinName">{coinName}</div>
                <div className="coinSymbol">{coinSymbol}</div>
                <div className="price">$ {price.toFixed(2)}</div>
                {percentage < 0 ?
                    (<b className='red'>{percentage.toFixed(2)}</b>) :
                    (<b className='green'>{percentage.toFixed(2)}</b>)
                }
                <p className='market-c'> $ {marketCap.toLocaleString()}</p>
                <button className='more' onClick={() => {
                    navigate(`/coinpage/${id}`)
                }} >moreInfo</button>
            </div>
        </div>
    )
}
