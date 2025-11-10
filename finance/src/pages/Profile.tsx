import React from "react";
import Infos from "../components/Infos";
import Currency from "../components/Currency";
import "./Profile.css"; // Importe o CSS

function Profile() {
  return (
    // 1. Classe de página padronizada
    <div className="profile-page"> 
      {/* 2. Textos atualizados da imagem */}
      <h1>Perfil e Configurações</h1>
      <p>Personalize sua experiência no FinTrack</p>

      {/* 3. Adicionada a div de Grid */}
      <div className="profile-grid">
        <Infos />
        <Currency />
      </div>
      
    </div>
  );
}

export default Profile;