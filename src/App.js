import React from "react";
import Card from "./Cards";
import Hero from "./Hero";
import Sdata from "./Sdata";

const App = () => (
  <>
    <h1 className="heading_style">Netflix Series List</h1>
    <Hero />
    {Sdata.map((val, index) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      );
    })}
  </>
);
export default App;
