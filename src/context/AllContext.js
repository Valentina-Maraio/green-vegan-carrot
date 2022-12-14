import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import greenVeganCarrot from '../api/apiCalls';
import { useParams } from "react-router-dom";

//data for searched recipes

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);

    let params = useParams();

    useEffect(() => {
        getSearchedRecipe(params.search)
    }, [params.search]);

    const getSearchedRecipe = async (input) => {
        try {
            const response = await axios.get(greenVeganCarrot.searchCall + `query=${input}`)
            setSearchedRecipes(response.data.results)
            console.log(response)
        } catch (err) { console.log(err) }
    }

    return (
        <SearchContext.Provider value={[searchedRecipes, setSearchedRecipes]}>{children}</SearchContext.Provider>
    )
}


//data for Vegan Dessert't Carousel

export const DessertContext = createContext();

export const DessertProvider = ({ children }) => {
    const [dessert, setDessert] = useState([])

    useEffect(() => { getDessert() }, [])

    const getDessert = async () => {
        try {
            const inLocalStorage = localStorage.getItem('dessert')
            if (inLocalStorage) { setDessert(JSON.parse(inLocalStorage)) }
            else {
                const response = await axios.get(greenVeganCarrot.fewDessert)
                localStorage.setItem('dessert', JSON.stringify(response.data.recipes).replace(/<[^>]*>/g, ''))
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

export const AllDessertProvider = ({ children }) => {
    const [allDessert, setAllDessert] = useState([]);

    useEffect(() => { getAllDessert() }, [])

    const getAllDessert = async () => {
        try {
            const inLocalStorage = localStorage.getItem('all-dessert')
            if (inLocalStorage) { setAllDessert(JSON.parse(inLocalStorage)) }
            else {
                const response = await axios.get(greenVeganCarrot.allDessert)
                localStorage.setItem('all-dessert', JSON.stringify(response.data.recipes).replace(/<[^>]*>/g, ''))
                setAllDessert(response.data.recipes)
            }
        } catch (error) { console.log(error) }
    }

    return (
        <AllDessertContext.Provider value={[allDessert, setAllDessert]}>{children}</AllDessertContext.Provider>
    )
}


//add recipes to fav page

export const FavRecipesContext = createContext({
    favs: [],
    addToFav: () => { },
    deleteFav: () => { },
});

export const FavRecipesProvider = ({ children }) => {
    const [favRec, setFavRec] = useState(() => {
        try {
            const savedRecipes = localStorage.getItem("saved-recipes");
            return savedRecipes ? JSON.parse(savedRecipes) : [];
        } catch (error) {
            console.log(error)
        }
    })

    useEffect(() => {
        localStorage.setItem("saved-recipes", JSON.stringify(favRec).replace(/<[^>]*>/g, ''));
    }, [favRec]);

    const addToFav = (title, image) => {
        setFavRec((prevState) => [...prevState, { title, image }])
    };

    //delete all fav from fav recipes page
    const deleteFav = (id) => setFavRec((favRec) => favRec.filter((fav) => fav.id !== id));



    return (
        <FavRecipesContext.Provider value={{ favRec, addToFav, deleteFav }}>{children}</FavRecipesContext.Provider>
    )
}