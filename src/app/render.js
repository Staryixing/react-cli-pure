import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from './ErrorBoundary';

export default function render(Component, props){
  const rootElement = document.getElementById("root")
  ReactDOM.render(
    <ErrorBoundary>
      <Component {...props}/>
    </ErrorBoundary>,
    rootElement
  )
}

