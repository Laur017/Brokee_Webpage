import Pricing from '../assets/pricing.png'

export default function Features() {

  return (
    <div className="div-features">
        <div className='off-div'>
            <img src={Pricing} />
            <div className='text-features'>
                <h3>Introducing Pricing Plans and Free Trial for DevOps Tests</h3>
                <p>We're starting 2024 off with a bang! We are happy to announce our biggest product update yet: the release of payment plans with a free trial.</p>
                <a href="https://blog.brokee.io/free-trial-devops-test-pricing/" target="_blank" rel="noopener noreferrer" >Read more</a>
            </div>
        </div>
    </div>
  )
}
