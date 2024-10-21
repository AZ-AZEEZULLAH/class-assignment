import Image from "next/image";
// import  Image  from "next/image";
import image1 from "../app/images/images1.jpeg"
export default function Home() {
  return (
   <main className="maincontainer">
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
    rel="stylesheet"
/>
    <div className="mainpart1">
      <div className="part1textsec" >
        <div id="firsttext" >
          <p id="paragraph"> PROJECT LUROM</p>
        </div>
        <div id="firstbutton">
          <button className="main1partbutt"><i className="ri-arrow-right-fill"></i></button>
          <button className="main1partbutt"><i className="ri-arrow-left-line"></i></button>
        </div>
      </div>
      <div className="part1imgsec"><Image src={image1} alt="" id="firstimage" /></div>
    </div>
   </main>
    
    
  );
}



  