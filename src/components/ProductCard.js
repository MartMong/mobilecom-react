import React, { Component } from 'react';


const CardExampleCardProps = () => (
    <div className='ui card col-md-3 col-sm-4' style={{margin:'10px 15px'}}>
        <img src={'./images/logo.png'} className='ui image' />
        <div className='content'>
            <div className='header'>Item 1</div>
            <div className='meta'>Category</div>
            <div className='description'>
                Description
        </div>
        </div>
        <div className='extra content'>
            {/* <a> */}
                <i aria-hidden='true' class='shop icon' />
                Add to cart
        {/* </a> */}
        </div>
    </div>
)

export default CardExampleCardProps