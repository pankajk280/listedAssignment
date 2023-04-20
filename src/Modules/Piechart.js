import React from "react";
import { useState, useEffect } from "react";
import './Piechart.css';
import Chart from "react-apexcharts"



const Piechart = () => {

const [product,setProduct] = useState([]);
const [unit,setUnit] = useState([]);

useEffect(() =>{
    const getData = async() =>{
        const temp = await fetch("https://dashboard-backend-0pyv.onrender.com/piechart");
        const response = await temp.json();
        
        const temp_product = [];
        const temp_unit = [];
        response.map((item) => {
            temp_product.push(item.product);
            temp_unit.push(item.units);
        })
        setProduct(temp_product);
        setUnit(temp_unit);
    }
    getData();
},[]);


    return(
        <div className="piechart">
            <Chart
            type="pie"
            width={300}
            height={300}
            series = {unit}
            options={{
                labels:product,
                dataLabels: {
                    enabled: false
                  }
            }
            
        }
            ></Chart>
        </div>
    )
}

export default Piechart;