import React from 'react'

// Importing Navbar
import Navbar from '../components/navbar'

// Importing Footer
import Footer from '../components/footer'

// Importing url form
import Urlform from '../components/urlForm'

const UrlGenerator = () => {
  return (
    <>
    {/* Navbar */}
      <Navbar />
    
    {/*  */}
      <Urlform />
    
    {/* Footer */}
      <Footer />
    </>
  )
}

export default UrlGenerator