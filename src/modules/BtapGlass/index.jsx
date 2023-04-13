import React, { Component } from 'react'

export default class Glass extends Component {

    products = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

    state = {
        spChiTiet: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    }

    renderGlass = (itemClick) => {
        const newState = {spChiTiet: itemClick}
        this.setState(newState);
    }

    renderListGlass = () => {
        return this.products.map((item, index) => {
            return (
                <button key={index} onClick={() => {
                    this.renderGlass(item)
                }}>
                    <img style={{width: 200}} src={item.url} alt="" />
                </button>
            )
        })
    }

  render() {
    const x = '50%';
    const y = '50%';
    const styles = { 
        transform: `translate(${-x}, -${-y})` 
    };
    
    return (
      <div style={{backgroundColor: 'gray'}} className='container'>
        <div style={{position: 'relative'}} className="img-top">
            <img style={{width: 300}} src="./glassesImage/model.jpg" alt="" />
            <img style={{width: 150, position: 'absolute', top: '25%', left: '43%', styles}} src={this.state.spChiTiet.url} alt="" />
            <div style={{backgroundColor: 'yellow', position: 'absolute', bottom: '0', left: '20%'}} className="description">
                <h5>{this.state.spChiTiet.name}</h5>    
                <p>{this.state.spChiTiet.desc}</p>
            </div>    
        </div>

        <div className="row mt-5">
        {this.renderListGlass()}
            
        </div>
      </div>
    )
  }
}
