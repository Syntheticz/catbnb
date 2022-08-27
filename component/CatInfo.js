import React from 'react'
import style from '../styles/Info.module.css'
import Footer from './Footer'
import sample from '../images/Grumpy.jpg'
import Image from 'next/image'
import star from '../images/star.svg'
import { Button, Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default function CatInfo({props: {data}}) {
  
  return (
    <>
    <div className={style.container}>
      <div className={style.bannerWrapper}>
        <div className={style.banner}>
        </div>
        <div className={style.imageCircle}>
          <div className={style.imageContainer}>
            <img src={data.img} />
          </div>
        </div>
      </div>
      <div className={style.dummy}></div>
      
      <div className={style.cardInfo}>
        <Container fluid className={style.cardInfoContainer}>
          <Header as='h1'>{data.name}</Header>
          <div className={style.ratings}>
            <Image src={star}/>
          <Header as='h3'>{data.ratings} Stars out of &#40; 7 Reviews &#41;</Header>
          </div>
          <Header as='h3'>Price: {data.price} Catfoods</Header>
          <div className={style.statusContainer}>
            <Header as='h3'>Status: </Header>
            <div className={style.status}>
              <Header as='h3'>Available</Header>
            </div> 
          </div>
          <button className={style.button}>GET NOW</button>
        </Container>
      </div>
      <div className={style.infoContainer}>
      <Container fluid textAlign='justified' className={style.textContainer}>
        <Header as='h1'>About</Header>
        <p>
        &emsp;&emsp;&emsp;&emsp;{data.about}
        </p>
      </Container>
      <Container fluid textAlign='justified' className={style.textContainer}>
        <Header as='h1'>Services</Header>
        <p>
        &emsp;&emsp;&emsp;&emsp;{data.services}
        </p>
      </Container>
      </div>
      
    </div>
    <div className={style.dummy}></div>
    <Footer/>
    </>
  )
}
