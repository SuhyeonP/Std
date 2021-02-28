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
        </div>
      </div>
  );
}

export default Home;
