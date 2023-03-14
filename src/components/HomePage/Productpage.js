import React, {useState} from 'react'
import product from '../data/data.json'
import '../../App.css'

export default function Productpage() {
    const [items , setItems] = useState(product)
    console.log(items)

    const filterItems = (catItem) => {
        const updateItems = product.filter((curItem)=>{
            return curItem.category === catItem
        });
        setItems(updateItems);
}

    return(
        <div className='container mt-5'>
            <h1>Find the phone that's right for you</h1>
            <br></br>
            <button type="button" class="btn btn-primary me-3" onClick={()=>setItems(product)}>All models</button>
            <button type="button" class="btn btn-primary me-3" onClick={()=>filterItems("X-Series")}>X-Series</button>
            <button type="button" class="btn btn-primary me-3" onClick={()=>filterItems("V-Series")}>V-Series</button>
            <button type="button" class="btn btn-primary me-3" onClick={()=>filterItems("Y-Series")}>Y-Series</button>
            <button type="button" class="btn btn-primary me-3" onClick={()=>filterItems("Series-T")}>Series-T</button>
            <button type="button" class="btn btn-primary me-3" onClick={()=>filterItems("Nex-Series")}>Nex-Series</button>
            <button type="button" class="btn btn-primary me-3" onClick={()=>filterItems("Z-Series")}>Z-Series</button>
            <button type="button" class="btn btn-primary me-3" onClick={()=>filterItems("U-series")}>U-Series</button>
            <button type="button" class="btn btn-primary me-3" onClick={()=>filterItems("S-Series")}>S-Series</button>
            <button type="button" class="btn btn-primary me-3" onClick={()=>filterItems("Accessories")}>Accessories</button>

            
            <div className='row'>
                {items.map((val) => (
                   <div className='col-md-3'>
                        <div class="card">
                        <img src={val.image} class="card-img-top img-fluid" alt="abs"/>
                        <div class="card-body">
                        <h5>{val.name}<span class="badge bg-dark">{val.category}</span></h5>
                        </div>
                        </div>
                   </div>
                ))}
            </div>
        </div>

    )
}