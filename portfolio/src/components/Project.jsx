import React from 'react'

export default function Project(props) {
  const {name, description, img, ghLink, deployLink} = props;
  return (
    <div className="box">
      <h2 className="box-title">Project</h2>
      <p className="box-content">
        {name}
        {description}
        {img}
        {ghLink}
        {deployLink}
        {/* DAVE STYLE THIS AND LAY IT OUT */}
      </p>
    </div>
  );
}
