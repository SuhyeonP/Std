import React from "react";
import Link from 'next/link'

const Home=()=> {
  return (
      <div className="container">
        <div>
            <Link href="/reactVis">
                <a>react-vis</a>
            </Link>
            <br/>
            <Link href="/victory">
                <a>victory</a>
            </Link>
            <br/>
            <Link href="/victory2">
                <a>victory2</a>
            </Link>
            <br/>
            <Link href="/victory3">
                <a>victory3</a>
            </Link>
            <br/>
            <Link href="/victory4">
                <a>victory4</a>
            </Link>
        </div>
      </div>
  );
}

export default Home;
