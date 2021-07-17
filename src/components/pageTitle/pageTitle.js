import React from "react";
import PropTypes from 'prop-types';
import "./pageTitle.css"
export default function PageTitle({headline}){
    return <p className="m_top_11">{headline}</p>
}

PageTitle.propTypes = {
    headline: PropTypes.string
  };