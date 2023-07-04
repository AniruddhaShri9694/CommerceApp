export interface valuationCheckData {
    status: string;
    valuations: Valuation[];
    message?: any;
  }
  
  export interface Valuation {
    collaterals: Collateral[];
  }
  
  export interface Collateral {
    item: string;
    noOfItems: string;
    grossWt: string;
    deductions: string;
    netWt: string;
    carat: string;
    rpg: string;
    valuation: string;
  }