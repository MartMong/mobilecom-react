import React, { Component } from 'react';


const CardExampleCardProps = (props) => {
    return (
        <div className='ui card col-md-3 col-sm-4' style={{margin:'15px 40px'}}>
            <img src={props.pictures[0]} className='ui image' />
            <div className='content'>
                <div className='header'>{props.brand}</div>
                <div className='meta'>Category</div>
                <div className='description'>
                    {props.details[0]}<br/>
                    {props.details[1]}
        </div>
            </div>
            <div className='extra content'>
                {/* <a> */}
                <i aria-hidden='true' className='shop icon' />
                Add to cart
        {/* </a> */}
            </div>
        </div>
    )
}

export default CardExampleCardProps