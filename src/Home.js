import React from 'react'
import './home.css'


export default function Home() {
    return (
        <div className="home" >
            <div className="home__baner">
                <h1>Fabian <strong>Barbón</strong> </h1>
            </div>
            <div className="home__subanner">
                <p>Programador </p>
            </div>
            <div className="home__content" id="Home">
                <div className="home__content__title">
                    <h2>Peliculas</h2>
                </div>
                <div className="home__content_movies">
                    <div>
                        <a href="/">
                            <h3>Pelicula # 1</h3>
                        </a>
                    </div>

                    <div>
                        <a href="/">
                            <h3>Pelicula # 2</h3>
                        </a>
                    </div>

                    <div>
                        <a href="/">
                            <h3>Pelicula # 3</h3>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <h3>Pelicula # 4</h3>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <h3>Pelicula # 5</h3>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <h3>Pelicula # 6</h3>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
