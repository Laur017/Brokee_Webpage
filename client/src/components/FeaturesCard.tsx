import { useState } from 'react'
import Pricing from '../assets/pricing.png'
import Accept from '../assets/accept.png'
import Calendar from '../assets/calendar.png'
import Discount from '../assets/discount.png'
import Exam from '../assets/exam.png'
import Management from '../assets/management.png'

export default function FeaturesCard() {
    const [more,setMore] = useState<boolean>(false)
  return (
    <div className={`div-features ${more ? 'flip-container' : ''}`}>
      <div className={`flip-card ${more ? 'flipped' : ''}`}>
        <div className={`front ${more ? 'more-div' : 'off-div'}`}>
          <img src={Pricing} />
          <div className="text-features">
            <h3>Introducing Pricing Plans and Free Trial for DevOps Tests</h3>
            <p>We're starting 2024 off with a bang! We are happy to announce our biggest product update yet: the release of payment plans with a free trial.</p>
            <a onClick={() => setMore(!more)}>{more ? 'Read less' : 'Read more'}</a>
          </div>
          {more &&
            <div className="text-features backface">
                <h3>Introducing Pricing Plans and Free Trial for DevOps Tests</h3>
                <p>We're starting 2024 off with a bang! We are happy to announce our biggest product update yet: the release of payment plans with a free trial.
                <br />
                To make this a reality, we:</p>
                <div className='benefits'>
                    <div>
                        <img src={Calendar} />
                        <h5>Developed payment plans and integrated our platform with Stripe</h5> 
                    </div>    
                    <div>
                        <img src={Exam} />
                        <h5>Opened sign-ups to the public</h5> 
                    </div>    
                    <div>
                        <img src={Discount} />
                        <h5>Developed free tests specifically for the free trial</h5> 
                    </div>    
                    <div>
                        <img src={Management} />
                        <h5>Added team management</h5> 
                    </div>    
                    <div>
                        <img src={Accept} />
                        <h5>Implemented a permissions system for various platform features based on payment plans</h5> 
                    </div>    
                </div>
                <a onClick={() => setMore(!more)}>{more ? 'Read less' : 'Read more'}</a>
            </div>
        }
        </div>
      </div>
    </div>
  )
}
