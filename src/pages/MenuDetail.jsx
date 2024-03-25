import { Navbar } from "../component/Navbar";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const base_url = import.meta.env.VITE_BASE_URL

const Menu = () => {
	const [data,setData] = useState(null)
	const {id} = useParams()
	
	async function getData() {
		try{
			let res = await axios.get(`${base_url}/recipes/${id}`)
			console.log(res.data.data)
			setData(res.data.data)
		} catch(err){
			console.log(err)
		}
	}

	useEffect(()=>{
		getData()
		console.log(id)
	},[])

	useEffect(()=>{
		console.log(data)
	},[data])
	

    return (
        <div>
            <Navbar />
            <h1 style={{ color: "black" }} onClick={()=>getData()}>Menu</h1>
					<div className="alert-primary" >
				<h3>
					{data ? (data.title ? data.title : null) : null}
				</h3>
				<p>
					{data?.ingredient}
				</p>
				</div>
        </div>
    );
};

export default Menu