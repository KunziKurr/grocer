import React,{useEffect,useRef} from "react";
import iconPack from '../../icon_service';
import Image from 'next/image';
import onee from '../../assets/fruits/fahd-khan-mrFdBdTlElk-unsplash.jpg';
import { usePalette } from "react-palette";
import {Palette} from "react-palette";
const groce_list = [
    {
        id: 'Ov',
        image: "https://cdn.pixabay.com/photo/2018/04/12/11/37/apple-3313209_1280.jpg",
        g_name: "grapes",
        price: 500
    },
    {
        id: 'ml',
        image: "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg",
        g_name: "water melons",
        price: 500
    },
    {
        id: 'orr',
        image: "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg",
        g_name: "raw oranges",
        price: 500
        
    },
    {
        id: 'pine',
        image: "https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955_1280.jpg",
        g_name: "pineapples",
        price: 500
    },
    {
        id: 'berry',
        image: "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg",
        g_name: "berries",
        price: 500
    },
    {
        id: 'ttt',
        image: "https://cdn.pixabay.com/photo/2017/05/23/22/36/vegetables-2338824_1280.jpg",
        g_name: "tree tomatoes",
        price: 500
    }

]

    

const Feeder = () => {
    const basePath = '../../assets/fruits';


    // const { data, loading, error } = usePalette(onee.src)
    // console.log(data)

    const imageBackRef = useRef();
    useEffect(() => {
        console.log(imageBackRef.current)
        // let dataQuery = document.querySelectorAll(`[data-feed="${imageBackRef.current}"]`);
    })



    return (

            <div  className="feed_container" >
                <div className="feed_container_wrapper">
                    <h1 className="feed_container_wrapper_title">
                        Available Groceries
                    </h1>
                    <div className="feed_container_wrapper_list">

                   

                        {groce_list.map((g_item, i) => {
                            // console.log(`${basePath}/${g_item.image}`)
                            return (
                                <>
                                    <Palette src={g_item.image} key={Math.random()}>
                                        {({ data, loading, error }) => (
                                          
                                            <div className="feed_container_wrapper_list_item" key={i} style={{
                                                backgroundImage:`linear-gradient(to bottom right, ${data.lightMuted}, ${data.darkMuted})`,
                                                // backgroundColor: `${(data.lightMuted)}`,
                                                boxShadow: `0px 2px 5px ${data.darkMuted}`
                    }}>
                      
                                                
                                                <Image
                                        className="feed_container_wrapper_list_item_img"
                                        src={g_item.image}
                                        alt={`Groce ${g_item.g_name}`}
                                        height="110"
                                        width="110"
                                                />
                                                  <div className="feed_container_wrapper_list_item_name" >
                            {g_item.g_name}
                                                </div>


                        <div className="feed_container_wrapper_list_item_rice">
                            {g_item.price}
                                    </div>
                        </div>

                                        )}
                                    </Palette>
                                </>
                            )
                        })  
                        }
                        
                    </div>
                </div>
            </div>
    )
}
export default Feeder;