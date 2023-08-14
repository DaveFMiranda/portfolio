import React from 'react'

export default function Project(props) {
  const {name, description, img, ghLink, deployLink} = props;
  return (
    <div className="box">
 <h2>{name}</h2>
        <p>{description}</p>
        <img src={img} alt={name}></img>
        <a href={ghLink}>GitHub Repo</a>
        <a href ={deployLink}>Deployed App</a>
        {/* DAVE STYLE THIS AND LAY IT OUT */}
      
    </div>
  );
}
