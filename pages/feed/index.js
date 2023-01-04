import React from "react";
import Categories from "./categories";
import Feeder from "./_feed";
import Image from 'next/image';




const groce_list = [
    {
        id: 'Ov',
        image: "/assets/fruits/alexandra-kikot-mjP6MQz834E-unsplash.jpg",
        g_name: "grapes",
        price: 500
    },
    {
        id: 'ml',
        image: "/assets/fruits/amy-shamblen-euqiHwS38Rw-unsplash.jpg",
        g_name: "water melons",
        price: 500
    },
    {
        id: 'orr',
        image: "/assets/fruits/fahd-khan-mrFdBdTlElk-unsplash.jpg",
        g_name: "raw oranges",
        price: 500
        
    },
    {
        id: 'pine',
        image: "/assets/fruits/fernando-andrade-nAOZCYcLND8-unsplash.jpg",
        g_name: "pineapples",
        price: 500
    },
    {
        id: 'berry',
        image: "/assets/fruits/lewis-fagg-CE1yaljvkb0-unsplash.jpg",
        g_name: "berries",
        price: 500
    },
    {
        id: 'ttt',
        image: "/assets/fruits/tijana-drndarski-ta0b_NDxi6k-unsplash.jpg",
        g_name: "tree tomatoes",
        price: 500
    }

]


const basePath = '/assets/fruits/';

const Feed = () =>{
    return (
        <>
            <Categories />
            <div className="feed">
                <div className="feed_wrapper">
                <>
            <div  className="feed_container" >
                <div className="feed_container_wrapper">
                    <h1 className="feed_container_wrapper_title">
                        Available Groceries
                    </h1>
                    <div className="feed_container_wrapper_list">


                        {groce_list.map((g_item, i) => {
                            console.log(decodeURIComponent(g_item.image))
                            // console.log(`${basePath}/${g_item.image}`)
                            return (
                                <div className="feed_container_wrapper_list_item" key={i}>
                                    <div className="feed_container_wrapper_list_item_name" >
                                        {g_item.g_name}
                                    </div>

                                    <Image
                                        className="feed_container_wrapper_list_item_img"
                                        src={`${decodeURIComponent(g_item.image)}`}
                                        alt={`Groce ${g_item.name}`}
                                        height="110"
                                        width="110"
                                    />


                                   
                                    <div className="feed_container_wrapper_list_item_rice">
                                        {g_item.price}
                                    </div>

                                </div>
                            )
                        })
                        }
                        
                       
                    </div>
                </div>
            </div>
        </>
                </div>
         </div>
        </>
    )
}
export default Feed;