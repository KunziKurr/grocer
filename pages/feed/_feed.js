import React,{useEffect,useRef} from "react";
import iconPack from '../../icon_service';
import Image from 'next/image';
import onee from '../../assets/fruits/amy-shamblen-euqiHwS38Rw-unsplash.jpg'

const groce_list = [
    {
        id: 'Ov',
        image: "alexandra-kikot-mjP6MQz834E-unsplash.jpg",
        g_name: "grapes",
        price: 500
    },
    {
        id: 'ml',
        image: "amy-shamblen-euqiHwS38Rw-unsplash.jpg",
        g_name: "water melons",
        price: 500
    },
    {
        id: 'orr',
        image: "fahd-khan-mrFdBdTlElk-unsplash.jpg",
        g_name: "raw oranges",
        price: 500
        
    },
    {
        id: 'pine',
        image: "fernando-andrade-nAOZCYcLND8-unsplash.jpg",
        g_name: "pineapples",
        price: 500
    },
    {
        id: 'berry',
        image: "lewis-fagg-CE1yaljvkb0-unsplash.jpg",
        g_name: "berries",
        price: 500
    },
    {
        id: 'ttt',
        image: "tijana-drndarski-ta0b_NDxi6k-unsplash.jpg",
        g_name: "tree tomatoes",
        price: 500
    }

]
const Feeder = () => {
    const basePath = '../../../assets/fruits/';

    return (

        <>
            <div  className="feed_container" >
                <div className="feed_container_wrapper">
                    <h1 className="feed_container_wrapper_title">
                        Available Groceries
                    </h1>
                    <div className="feed_container_wrapper_list">


                        {groce_list.map((g_item, i) => {
                            // console.log()
                            // console.log(`${basePath}/${g_item.image}`)
                            return (
                                <div className="feed_container_wrapper_list_item" key={i}>
                                    <div className="feed_container_wrapper_list_item_name" >
                                        {g_item.g_name}
                                    </div>
                                    <Image
                                        className="feed_container_wrapper_list_item_img"
                                        src={onee}
                                        alt={`Groce ${g_item.g_name}`}
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
    )
}
export default Feeder;