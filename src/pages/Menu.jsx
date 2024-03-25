import { Navbar } from "../component/Navbar";
import axios from "axios";
import { useState,useEffect } from "react";

const base_url = import.meta.env.VITE_BASE_URL

const Menu = () => {
	const [data,setData] = useState([])
	
	async function getData() {
		try{
			let res = await axios.get(`${base_url}/recipes`)
			console.log(res.data.data)
			setData(res.data.data)
		} catch(err){
			console.log(err)
		}
	}

	useEffect(()=>{
		getData()
	},[])

	useEffect(()=>{
		console.log(data)
	},[data])
	

    return (
        <div>
            <Navbar />
            <h1 style={{ color: "black" }} onClick={()=>getData()}>Menu</h1>
			{data.length ? data.map((item,index)=>(
					<div className="alert-primary" key={index}>
				<h3>
					{item.title}
				</h3>
				<p>
					{item.ingredient}
				</p>
				</div>
					)
			) : null}
        </div>
    );
};

export default Menu