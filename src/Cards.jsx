import React from 'react';
import './index.css'

function Card(props){
    //console.log(props);
    return(
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="my pic" className="cardimg" />
          <div className="cardinfo">
          <span className="cardcategory">{props.title}</span>
            <h3 className="cardtitle">{props.sname}</h3>
            <a href={props.link} targe="_blank">
              <button>Watch Now</button>
            </a>
          </div>
      </div>
    </div>
    </>
    );
}

export default Card;