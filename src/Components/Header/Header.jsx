import React from 'react'

const Header = () => {
  return (
    <section className="H-wrapper">
        <div className="H-container">

            <img src="./logo.png" alt="logo" width={100} />
            <div className="H-menu">
                <a href="">Residencies</a>
                <a href="">Our Values</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                
                <button>
                    <a href="">Contact</a>
                </button>
                
            </div>
        </div>
    </section>
  )
}



export default Header
