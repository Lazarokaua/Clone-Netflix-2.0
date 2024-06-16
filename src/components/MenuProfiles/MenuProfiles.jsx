import React from "react";
import { ProfilesCard } from "../Profiles/Profiles";
import profile1 from "../../assets/ProfilePicture.png";
import profile2 from "../../assets/ProfilePicture2.png";
import profile3 from "../../assets/ProfilePicture3.png";
import profile4 from "../../assets/ProfilePicture4.png";
import profile5 from "../../assets/Add.png";

export function MenuProfiles(props) {
  return (
    <div className="bg-black flex justify-center flex-col pt-48">
      <h2 className="text-white flex justify-center text-6xl font-bold">{props.title}</h2>

      <div className="flex gap-10 justify-center pt-7">
        <ProfilesCard imgProfile={profile1} nameProfile="Murat" />
        <ProfilesCard imgProfile={profile2} nameProfile="Umut" />
        <ProfilesCard imgProfile={profile3} nameProfile="Kemal" />
        <ProfilesCard imgProfile={profile4} nameProfile="Çocuk" />
        <ProfilesCard imgProfile={profile5} nameProfile="Profil Ekle" />
      </div>
      <div className="flex justify-center">
        <button className="w-72 h-12 text-gray-700 border-2 border-gray-700 hover:text-white  hover:bg-gray-500/75 rounded-lg">
          {props.button}
        </button>
      </div>
    </div>
  );
}
