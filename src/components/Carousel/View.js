import { Carousel } from "@/app/material-ui/view";

import React from 'react'

function View({images, mobile_view}) {
    console.log("🚀 ~ View ~ mobile_view:", mobile_view)
    return (
        <Carousel
            className="rounded-xl"
            autoplay={true}
            loop={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                />
                ))}
            </div>
            )}
        >
            {
                images.map((each, index) =>{
                    return(
                        <img key={index} src={each.source} className={`object-cover ${mobile_view? 'h-full w-full' : 'h-[40rem] w-full'}`} alt="..."/>
                    )
                })
            }
        </Carousel>
    )
}

export default View
