import React, {ReactNode} from 'react';

interface Props{
    children:ReactNode
}

const Layout=({children}:Props)=>{
    return (
        <>
            <header>
                <div>logo</div>
                <div>user data</div>
            </header>
            <section>
                {children}
            </section>
            <footer>

            </footer>
        </>
    )
}

export default Layout;