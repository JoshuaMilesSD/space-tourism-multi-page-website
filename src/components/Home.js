import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <section className="home">
        <div className="overlay">
            <article>
            <h1 className='text-2xl text-gray-400'>SO, YOU WANT TO  TRAVEL TO <span>SPACE</span> </h1>
        <p className="text-gray-400 md:w-11/12 lg:w-1/2">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well, sit back, and relax because we'll give you a truly out
              of this world experience!
            </p>
            </article>
            <article>
                <button> <Link to="/destination">Destination</Link></button>
            </article>
       </div>
    </section>
    </>
  )
}
