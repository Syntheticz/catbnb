import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel = "icon" href ="logo.svg"  type = "image/x-icon"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet"/>
        </Head>
        <body>
            <Main/>
            <NextScript/>
        </body>
    </Html>
  )
}
