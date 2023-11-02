import React from 'react'

import "./Profile.css"

const Profile = () => {
  return (
    <div className='profile__grp'>
        <div className="profile__container">
            <section className="photo__section">
                <div className="img__profile">Фото</div>
                <div className="about__grp">
                    <h1 className="name">Ім’я Прізвище <span className='age__span'>Вік</span></h1>
                    <h2 className="Education">Навчальний заклад</h2>
                </div>
                <div className="btn__edit">
                    <button className='edit'>Редагувати</button>
                </div>
            </section>
            <hr  className='line'/>
            <div className="phone__number disc__section">
                <h1 className="title__profile">Номер телефону:</h1>
                <h2 className="desc__profile">+380 97 000 00 00</h2>
            </div>
            <div className="email disc__section">
                <h1 className="title__profile">Електронна пошта:</h1>
                <h2 className="desc__profile">E-mail</h2>
            </div>
            <hr  className='line'/>
            <div className="disc__section">
                <h1 className="title__profile">Ключові навички:</h1>
                <h2 className="desc__profile">HTML <br /> HTML</h2>
            </div>
            <div className="disc__section">
                <h1 className="title__profile">Володіння мовами:</h1>
                <h2 className="desc__profile">українська <br /> англійська</h2>
            </div>
            <div className="disc__section">
                <h1 className="title__profile">Бажана вакансія:</h1>
                <h2 className="desc__profile">Frontend-розробник</h2>
            </div>
            <hr className="line" />
            <div className="disc__section">
                <h1 className="title__profile">Додаткова інформація:</h1>
            </div>
        </div>
    </div>
  )
}

export default Profile
