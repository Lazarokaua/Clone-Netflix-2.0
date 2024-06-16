import React from "react";

export function ProfilesCard(props){
    return (
        <div className="flex gap-6 flex-col items-center pt-7">
            <img className="w-48 cursor-pointer" src={props.imgProfile}/>
            <h3 className="text-gray-700 pb-20 text-3xl">{props.nameProfile}</h3>
        </div>
    )
}