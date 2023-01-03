import React from "react";
import Categories from "./categories";
import Feeder from "./_feed";

const Feed = () =>{
    return (
        <>
            <Categories />
            <div className="feed">
                <div className="feed_wrapper">
                    <Feeder />
                </div>
         </div>
        </>
    )
}
export default Feed;