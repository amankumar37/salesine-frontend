 import React from "react";


 function ImageCard(props){
    return (
        <div className="m-10">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={props.image} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{props.tagLine}</div>
    <p class="text-gray-700 text-base">
        {props.quote}
    </p>
  </div>
  
</div>
        </div>
     )
 }

 export default ImageCard;