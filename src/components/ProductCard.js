import React, { Component } from 'react';


const CardExampleCardProps = () => (
    <div className='ui card col-md-3 col-sm-4' style={{margin:'10px 15px'}}>
        <img src={'./images/logo.png'} className='ui image' />
        <div class='content'>
            <div class='header'>Item 1</div>
            <div class='meta'>Category</div>
            <div class='description'>
                Description
        </div>
        </div>
        <div class='extra content'>
            <a>
                <i aria-hidden='true' class='shop icon' />
                Add to cart
        </a>
        </div>
    </div>
)

export default CardExampleCardProps