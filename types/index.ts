import React from "react";

export interface AlgorandsTypes {
    assetID: number,
    name: string,
    available: boolean,
    unitname1: string,
    logo: string
}
export type AlgorandsContextType = {
    datas:  AlgorandsTypes[];
    loading: boolean,
    errorMessage: string,
    fetchData: () => void,
}