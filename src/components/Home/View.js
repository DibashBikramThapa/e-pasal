import React from 'react'
import CarouselView from '@/components/Carousel/View'

const images = [
  {'source': '/images/carousel/IMG_1.JPG'},
  {'source': '/images/carousel/IMG_2.JPG'},
  {'source': '/images/carousel/IMG_3.JPG'},
  {'source': '/images/carousel/IMG_4.JPG'},
  {'source': '/images/carousel/IMG_5.JPG'},
]

function View({mobile_view}) {

  return (
    <CarouselView images={images} mobile_view={mobile_view}/>
  )
}

export default View
