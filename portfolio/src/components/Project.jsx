import React from 'react'

export default function Project(props) {
  const {name, description, img, ghLink, deployLink} = props;
  return (
    <div className = 'box'>    
      <div className="box-content">
 <div className="box-header">
 <h2>{name}</h2>
        <p>{description}</p>
        </div>
        <a href={deployLink}>
        <img src={img} alt={name}></img>
        </a>
        <div className = 'link-container'>
        <a href={ghLink}>GitHub Repo</a>
        <a href ={deployLink}>Deployed App</a>
        </div>
        </div>
    </div>
  );
}
