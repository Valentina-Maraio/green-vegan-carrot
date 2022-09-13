import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import greenVeganCarrot from '../../api/apiCalls';

//data for Vegan Dessert't Carousel

export const DessertContext = createContext();

export const DessertProvider = ({children}) => {
    const [dessert, setDessert] = useState([])

    useEffect(() => { getDessert() }, [])

    const getDessert = async () => {
        try {
            const inLocalStorage = localStorage.getItem('dessert')
            if (inLocalStorage) { setDessert(JSON.parse(inLocalStorage)) }
            else {
                const response = await axios.get(greenVeganCarrot.fewDessert)
                localStorage.setItem('dessert', JSON.stringify(response.data.recipes))
                setDessert(response.data.recipes)
            }
        } catch (error) { console.log(error) }
    }

    return (
        <DessertContext.Provider value={[dessert, setDessert]}>{children}</DessertContext.Provider>
    )
}

//data for the Vegan Dessert Page

export const AllDessertContext = createContext();

export const AllDessertProvider = ({children}) => {
    const [allDessert, setAllDessert] = useState([]);

    useEffect(() => {getAllDessert() }, [])

    const getAllDessert = async() => {
        try {
            const inLocalStorage = localStorage.getItem('all-dessert')
            if (inLocalStorage) { setAllDessert(JSON.parse(inLocalStorage)) }
            else {
                const response = await axios.get(greenVeganCarrot.allDessert)
                localStorage.setItem('all-dessert', JSON.stringify(response.data.recipes))
                setAllDessert(response.data.recipes)
            }
        } catch (error) { console.log(error) }
    }

    return (
        <AllDessertContext.Provider value={[allDessert, setAllDessert]}>{children}</AllDessertContext.Provider>
    )
}