import React from 'react'
import Image from 'next/image'

export default function Notfoud() {
  return (
    <div>
        <h1> TA CERTO NAO DOIDO! 404</h1>
        <p>!Not Found</p>
        <Image
            src="https://httpstatusdogs.com/200-ok"
            alt="cavacava"
            width={500}
            height={500}
            />
    </div>
  )
}
