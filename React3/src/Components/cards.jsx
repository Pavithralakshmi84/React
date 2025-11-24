import Alai from '../assets/Alaipayuthe.jpg'
import nayagan from '../assets/Nayagan.jpg'
import okok from '../assets/okok.jpg'
import Mounaragam from '../assets/MR.jpg'
import '../App.css'
const Cards = () => {
    const Friends = [
        {name:"Alaipayuthey", img:Alai, Story:"Young lovers Karthik and Shakthi marry secretly against their families' wishes and face the challenges and growth of married life.", isActive:true},
        {name:"Nayagan", img:nayagan, Story:"An ordinary man rises to become a powerful underworld don in Mumbai, grappling with loyalty, justice, and the cost of violence.", isActive:true},
        {name:"Oh Kadhal Kanmani", img:okok, Story:"Oh Kadhal Kanmani is a modern romantic drama about Aditya, a video game developer, and Tara, a lively young woman, who enter a live-in relationship agreeing that marriage is not for them.", isActive:true},
        {name:"Mouna Ragam", img:Mounaragam, Story:"Oh Kadhal Kanmani: A modern couple navigates the complexities of love and career aspirations in urban life, blending romance with contemporary challenges.", isActive:true},
       
    ]
  return (
    <>
    <h2>Maniratham Movies</h2>
       <div className="maincard">
          {Friends.map((e,i)=>(
            <div className="childcard" key={i}>
            <div className="cardimg">
               <img src={e.img} alt="cardimg" />
            </div>
            <div className="cardinfo">
                  <h3>Name: {e.name}</h3>
                  <h3>Story: {e.Story}</h3>
                  <h3>Ticket: {e.isActive ? "Available" : "Inactive"}</h3>
            </div>
            </div>
          ))}
       </div>
    </>
  )
}

export default Cards