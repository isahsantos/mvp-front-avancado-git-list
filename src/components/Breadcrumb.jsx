import React from 'react';
import '../assets/styles/breadcrumb-style.css';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ paths }) => {
  return (
    <div id="crumbs">
    <ul className="breadcrumb">
      {paths.map((path, index) => (
        <li key={index}>
          {index === paths.length - 1 ? (
            <span>
              {path.icon && <img src={path.icon} alt="Icon" />}
              {path.name}
            </span>
          ) : (
            <Link to={path.url}>
              {path.icon && <img src={path.icon} alt="Icon" />}
              {path.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Breadcrumb;


