import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar/navbar";

export default function Home(){
    const [backendData, setBackendData] = useState();

    const API = "http://localhost:8000";
    const getApiData = async (url) => {
        try {
            const res = await axios.get(url);
            setBackendData(res.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getApiData(`${API}/`);
    }, [])

    return(
        <>
            <div id="home">
                <Navbar />
                <p>Home Page</p>
                <p>{backendData}</p>
            </div>
        </>
    );
}