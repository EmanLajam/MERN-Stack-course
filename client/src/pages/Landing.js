import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
        <nav>
           <Logo/>
            </nav>
    <div className='container page'>
    <div className='info'>
    <h1>
jop <span>tracking</span> app
    </h1>
<p>
I'm baby leggings tattooed lomo mustache, XOXO yes plz enamel pin vice distillery fam. Cronut VHS skateboard adaptogen kickstarter vape chicharrones vegan distillery. Irony celiac palo santo pickled lo-fi butcher.

</p>
<Link to='/register' className='btn btn-hero'>Login/Register</Link>
    </div>
<img src={main} alt='job hunt' className='img main-img'></img>
    </div>
    

  
    </Wrapper>
  )
}


export default Landing