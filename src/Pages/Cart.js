import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Cart = () => {


//Cart
const [state, setState] = useState({
    series: [{
        style: {
            colors: ['#00D8FF'],
          },
        name: 'Present Year',
        data: [31, 40, 28, 51, 42, 109, 100],
        color: '#41B883',
       
    }, {
        name: 'Previous Year',
        data: [11, 32, 45, 32, 34, 52, 41],
        color: '#FECB32',
    }],
    options: {
        chart: {
            height: 200,
            type: 'area'
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth'
        },

        yaxis: {
            labels: {
                style: {
                    colors : ['#ffffff'],
                    
                    
                }
            },
            xaxis: {

                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
        },



        tooltip: {
            x: {
                format: '22/07/2022 05:30'
            },
        },
    },


})




    return (
        <div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class=" font-bold lg:text-5xl text-4xl lg:text-left mb-2 text-gray-900">Present Year User <span className='text-green-light'>Graph</span></h1>
        <div class="leading-relaxed lg:text-left lg:mt-3 mt-2 lg:mb-5 mb-4"><p className='font-medium  lg:text-3xl text-2xl text-green'>We always ensure Our Service Quality and Improving the Product for better User experience</p> </div>
        <div class="leading-relaxed lg:text-left"><p className='f  text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p> </div>
    
       
      </div>
      
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <ReactApexChart options={state.options} series={state.series} type="area"  className=" object-cover object-center w-full h-full" />
    </div>
  </div>
</section>
        </div>
    );
};

export default Cart;