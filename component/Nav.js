import React from 'react'
import Image from 'next/image'
import style from '../styles/Header.module.css'
import logo from '../images/logo.svg'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={style.header}>
        <span className={style.logoImage}>
            <Image src={logo} layoyt='fill' objectFit='contain' width='100%' height='100%'/>
        </span> 
        <a href="#" className={style.logoTitle}><h3 >Genesis</h3></a>
        <div className={style.linksContainer}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/"><a>Cats</a></Link>
            <Link href="/"><a>About</a></Link>
        </div>
    </div>
  )
}
