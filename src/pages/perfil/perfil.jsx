import React from 'react'
import "./perfil.css"

function perfil() {
  return (
    <div className='bodyPer'>
      <div className="profile-container">
        <h1 className='h1Per'></h1>
        <div className="profile-info">
          <div className="profile-picture">
            <img src=".\src\assets\images\perfil.jpg" alt="Foto do perfil"/>
          </div>
          <div className="user-info">
            <label for="name">Nome:</label>
            <p className='pPer' id="name">João da Silva</p>

            <label for="email">E-mail:</label>
            <p className='pPer' id="email">joao.silva@email.com</p>

            <label for="phone">Telefone:</label>
            <p className='pPer' id="phone">(11) 91234-5678</p>
            <input type="button" value="Editar Perfil" onclick="editProfile()"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default perfil