import * as React from "react";
import { createContext, useState } from "react";
import { AvisameSiGanoParams } from "../../models/avisame-si-gano/AvisameSiGanoParams";
import { IAvisameSiGanoState } from "./avisame-si-gano.types";

const initialState = {} as IAvisameSiGanoState;

export const AvisameSiGanoContext = createContext(initialState);

export const AvisameSiGanoProvider: React.FC = ({ children }) => {

  const [avisameSiGanoParams, setAvisameSiGanoParams] = useState<AvisameSiGanoParams>();

  const avisameSiGanoState = {
    avisameSiGanoParams: avisameSiGanoParams,
    setAvisameSiGanoParams: setAvisameSiGanoParams
  } as IAvisameSiGanoState;

  return (
    <AvisameSiGanoContext.Provider value={avisameSiGanoState}>
      {children}
    </AvisameSiGanoContext.Provider>
  );
};
