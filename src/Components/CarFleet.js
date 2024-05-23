import React, { useState } from 'react';
import merc from '../assets/benz.jpg'
import audi from '../assets/audia1.jpg'
import bmw from '../assets/bmw320.jpg'
import passat from '../assets/passatcc.jpg'
import camry from '../assets/toyotacamry.jpg'
import golf from '../assets/golf6.jpg'
import BookCar from './BookCar';

function CarFleet() {
  const [activeBtn, setActiveBtn] = useState(0);
  const [car, setCar] = useState(audi);
  const [Att, setAtt] = useState(['45','Audi','A1','2012','4/5','Yes','Manual','Gasoline']);
  let imgs = [audi, golf, camry, bmw, merc, passat];
  let attributes = [['45','Audi','A1','2012','4/5','Yes','Manual','Gasoline'],['37',"Golf 6",'Volkswagen','2008','4/5','Yes','Manual','Deisel'],['30','Camry', 'Toyota','2006','4/5','Yes','Automatic','Hybrid'],['35','320','BMW','2012','4/5','Yes','Manual','Deisel'],['50','Benz GLK','Mercedes','2006','4/5','Yes','Manual','Deisel'],['25','Passat CC','Volkswagen','2008','4/5','Yes','Automatic','Gasoline']];

  function toggleState(btnId) {
    if (btnId === activeBtn) {
      setActiveBtn(null); // Reset active button if clicked again
    }
    else {
      setActiveBtn(btnId); // Set active button
      setCar(imgs[btnId]);
      setAtt(attributes[btnId]);
    }
  }

  return (
    <div className='flex-col fleet txt-c'>
      <div>
        <h3>Vehicle Models</h3>
        <h1>Our rental fleet</h1>
        <p>Choose from a variety of our amazing vehicles to rent for your next</p>
        <p>adventure or business trip</p>
      </div>
      <div className='flex-row fleet-div'>
        <div className='flex-col side-opt'>
          <button className={activeBtn === 0 ? 'orange-car-active' : 'orange-car'} onClick={() => toggleState(0)}>Audi A1 S-Line</button>
          <button className={activeBtn === 1 ? 'orange-car-active' : 'orange-car'} onClick={() => toggleState(1)}>VW Golf 6</button>
          <button className={activeBtn === 2 ? 'orange-car-active' : 'orange-car'} onClick={() => toggleState(2)}>Toyota Camry</button>
          <button className={activeBtn === 3 ? 'orange-car-active' : 'orange-car'} onClick={() => toggleState(3)}>BMW 320 ModernLine</button>
          <button className={activeBtn === 4 ? 'orange-car-active' : 'orange-car'} onClick={() => toggleState(4)}>Mercedes-Benz GLK</button>
          <button className={activeBtn === 5 ? 'orange-car-active' : 'orange-car'} onClick={() => toggleState(5)}>VW Passat CC</button>
        </div>
        <div>
          <img src={car} alt="" />
        </div>
        <div className='flex-col side-det'>
          <button className='orange-car-active txt-c'> <span>{`$${Att[0]}`}</span> / rent per day</button>
          <p>    Model      | {Att[1]}</p>
          <p>    Mark       | {Att[2]}</p>
          <p>    Year       | {Att[3]}</p>
          <p>    Doors      | {Att[4]}</p>
          <p>     AC        | {Att[5]}</p>
          <p> Transmission  | {Att[6]}</p>
          <p>    Fuel       | {Att[7]}</p>
          <button className='orange-car-active txt-c'>RESERVE NOW</button>
        </div>
      </div>
    </div>
  )
}

export default CarFleet;
