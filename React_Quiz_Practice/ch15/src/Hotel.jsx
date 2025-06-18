import HotelFooter from "./components/HotelFooter"
import Hotelmain from "./components/Hotelmain"
import Hotelmenu from "./components/Hotelmenu"

function Hotel() {
   return (
      <div className="wrap">
         <Hotelmenu></Hotelmenu>
         <Hotelmain></Hotelmain>
         <HotelFooter></HotelFooter>
      </div>
   )
}

export default Hotel
