import "./Navbar.css"
import Brokee from '../../assets/brokee.png'
import { useNavigate } from "react-router-dom"

type Pages = 1 | 2 | 3;

export default function Navbar() {
    const navigate = useNavigate();

    const handleNavigate = (n:Pages) => {
        n === 1 ?
        navigate('/') :
        n === 2 ?
        navigate('/available-tests') :
        navigate('/features');
    }
  return (
    <nav>
       <img src={Brokee} onClick={() => handleNavigate(1)}/>
        <p onClick={() => handleNavigate(2)} >Available tests</p>
        <p onClick={() => handleNavigate(3)} >Features</p>
    </nav>
  )
}