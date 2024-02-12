import AvailableTests from "./AvailableTests";
import Features from "./Features";

export default function Home() {
  return (
    <div className="home-div">
        <h3 className="text">Available Tests</h3>
        <AvailableTests />
        <h3 className="text">Features</h3>
        <Features />
    </div>
  )
}
