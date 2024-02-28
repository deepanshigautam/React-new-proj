import React from 'react'
import './HotelPage.css'
import myImg from '../Assets/about.png'



const HotelPage = () => {
    return (
        <div>
            <nav>
                <h2>R</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Room</a></li>
                    <li><a href="#">Testimonial</a></li>
                </ul>
                <a href="#" class="button"><button>Book Now</button></a>
            </nav>
            <header>
               
                <div class="container">
                    <h2>Stay with us feel like .home in our hotel </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, adipisci.</p>
                    <div class="links">
                        <a href="#"><button>EXPLORER ROOM</button></a>
                        <a href="#">Our services</a>
                    </div>
                </div>

            </header>
            <main id="about">

                <img src={myImg} alt="" />
                <div class="content">
                    <h1>About us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, sunt a minima s aperiam minus a
                        libero ipsam odio eligendi. Necessitatibus!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, iusto. Soluta debitis corrupti mollitia.
                        Aut quisquam eveniet perspiciatis reiciendis, repellat aliquid tempore!
                    </p>
                    <a href="#"><button>Read More</button></a>
                </div>

            </main>
            <div class="room">
                <h1>ROOMS</h1>
            </div>
            <section>
                <div class="shop-section">
                    <div class="box1 box">
                        <div class="box-content">
                            <div class="box-img" ><img src={require('../Assets/room1.png')} alt=""/></div>
                            <h2>Standard Double </h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, minima Lorem ipsum dolor sit
                                amet, consectetu.</p>
                        </div>
                    </div>
                    <div class="box2 box">
                        <div class="box-content">
                            <div class="box-img"><img src={require('../Assets/room2.png')} alt=""/></div>
                            <h2>Minimal Suite</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, minima Lorem ipsum dolor sit
                                amet, consectetu.</p>
                        </div>
                    </div>
                    <div class="box3 box">
                        <div class="box-content">
                            <div class="box-img"><img src={require('../Assets/room3.png')} alt=""/></div>
                            <h2>Standard Double</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, minima Lorem ipsum dolor sit
                                amet, consectetu.</p>
                        </div>
                    </div>
                </div>


            </section>
            <div class="testi-section">
                <div class="hdn">
                    <h2>Testimonial</h2>
                    <h1>What the people Think About us</h1>
                </div>
                <div class="abt-testi">
                    <div class="box3 box-testi">
                        <div class="box-content">
                            <div class="box-img-testi">
                                <img src={require('../Assets/person1.png')} alt=""/>
                            </div>
                            <h2>Alpher Karahan &#11088;&#11088;&#11088;&#11088;&#11088;</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, minima Lorem ipsum dolor sit amet, consectetu.</p>
                        </div>
                    </div>

                    <div class="box3 box-testi">
                        <div class="box-content">
                            <div class="box-img-testi">
                            <img src={require('../Assets/person2.png')} alt=""/>
                            </div>
                            <h2>Aryan Rathore &#11088;&#11088;&#11088;&#11088;&#11088;</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, minima Lorem ipsum dolor sit amet, consectetu.</p>
                        </div>
                    </div>

                    <div class="box3 box-testi">
                        <div class="box-content">
                            <div class="box-img-testi">
                            <img src={require('../Assets/person3.png')} alt=""/>
                            </div>
                            <h2>Mark Smith &#11088;&#11088;&#11088;&#11088;&#11088;</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, minima Lorem ipsum dolor sit amet, consectetu.</p>
                        </div>
                    </div>

                </div>

            </div>
            <footer>
               
                <div class="footer-sec">
                    
                    <div class="foot-img">
                        {/* <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbSUyMGludGVyaW9yfGVufDB8fDB8fHww&w=1000&q=80" alt=""/> */}
                        <img src={require('../Assets/contact.png')} alt=""/>

                            <div class="locs">
                                <a href="#"><i class="fa-solid fa-location-dot"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, alias!</a>
                                    <a href="#"><i class="fa-solid fa-phone"></i> +717-71-11</a>
                                    <a href="#"> <i class="fa-solid fa-envelopes-bulk"></i>abcd@gmail.com</a>
                            </div>
                    </div>
                    <div class="forms">
                        <form >
                            <input type="text" placeholder="Full Name" />
                            <input type="tel" placeholder="Phone" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Room Type" />
                            <input type="tel" placeholder="No. Of Guests" />
                            <a href="#">

                                <button>Book Now</button>
                            </a>


                        </form>
                    </div>

                </div>

            </footer>



        </div>
    )
}

export default HotelPage
