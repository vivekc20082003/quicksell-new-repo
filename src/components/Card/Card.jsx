import React from 'react'
import './Card.css';
import { BsExclamationSquareFill } from "react-icons/bs";

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://media.licdn.com/dms/image/D5603AQGPifxl2cNLKw/profile-displayphoto-shrink_800_800/0/1681204529238?e=1705536000&v=beta&t=0EcKJz79VrAdOa9C4952IXeAA_pAzuDGWC--klp5Cr0" alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey "> ... </div>
        {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;