import { useContext, useEffect } from "react"
import { AppContent } from "../Context/AppContext"
import { useSearchParams } from "react-router-dom"


const PlaylistSongs = ()=>{
    const  {backendURL} = useContext(AppContent)
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("query") || "";

    useEffect(()=>{
        try{
            const res = await 
        }
    })
}