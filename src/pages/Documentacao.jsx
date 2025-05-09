import React from 'react';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const Documentacao = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Documentação da API</h1>
      <SwaggerUI url="/swagger.json" />
    </div>
  );
};


export { Documentacao };
