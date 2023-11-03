import React from 'react'

import './Profile.css'

const EmployerProfile = () => {
  return (
    <div className='profile__grp'>
        <div className="profile__container">
            <section className="photo__section">
                <div className="about__grp about__grp__employer">
                    <h1 className="name name__employer">Ім’я Прізвище </h1>
                </div>
                <div className="btn__edit ">
                    <button className='edit btn__edit__employer'>Редагувати</button>
                </div>
            </section>
            <hr  className='line'/>
         
            <div className="disc__section disc__section__column">
                <h1 className="title__profile">Назва вакансії:</h1>
                <h2 className="desc__profile desc__profile__employer">Назва компанії</h2>
            </div>
            <hr  className='line'/>
            <div className="phone__number disc__section">
                <h1 className="title__profile">Номер телефону:</h1>
                <h2 className="desc__profile">+380 97 000 00 00</h2>
            </div>
            <div className="email disc__section">
                <h1 className="title__profile">Електронна пошта:</h1>
                <h2 className="desc__profile">E-mail</h2>
            </div>
            <hr className="line" />
            <div className="disc__section">
                <h1 className="title__profile">Опис вакансії:</h1>
                <h2 className="desc__profile">Привіт. Ми можемо надати тобі практику ...</h2>
            </div>
        </div>
    </div>
  )
}

export default EmployerProfile
