import React from 'react'
import { s1,s2,s3,s4 } from '../static'
const Home = () => {
  return (
    <div>
      <section id="introSection">
                <div className="animate-charcter">Welcome To Dance Academy</div>
            </section>
            <section id="missionSection">
                <h2>Our Mission</h2>
                <div className="card" id="card1">
                    <h3>Dance Perfection</h3>

                    ipsum dolor sit amet consectetur adipisicing elit. Quos facilis dolores doloribus maxime aspernatur excepturi velit numquam ea? Laborum praesentium tempora nisi autem, atque cum hic ducimus at! Ratione numquam vitae omnis vel assumenda! Necessitatibus saepe quia magni consectetur recusandae quae, quo molestiae nisi doloremque non repudiandae, repellendus eaque corporis. Sequi deleniti molestias
                    ipsum dolor sit amet consectetur adipisicing elit. Atque ab sunt officiis id repellat sequi iure deleniti velit et. Possimus quis, nam unde eligendi aperiam iure asperiores, eveniet enim, adipisci vitae maiores. Cupiditate soluta porro quibusdam fugiat commodi quis omnis numquam maxime. Eum dolor ipsam iste sit illo incidunt possimus temporibus tempore quos sed porro aut autem repellat sequi delectus id nemo adipisci ad, quisquam expedita necessitatibus! Doloribus, necessitatibus doloremque atque deleniti facilis temporibus quos reprehenderit, dolorem beatae tempora debitis!
                </div>
                <div className="card" id="card2">
                    <h3>Dance the way you like</h3>
                    ipsum dolor sit, amet consectetur adipisicing elit. Delectus quis possimus velit! Reiciendis qui omnis quis! Dolorem odit rerum iusto, consequuntur quis totam fuga quod, corrupti ab magnam odio ipsum eos, esse labore officiis porro consectetur explicabo illum distinctio blanditiis! Asperiores rerum repellat maiores voluptas expedita obcaecati sunt rem explicabo?
                    ipsum dolor sit amet consectetur adipisicing elit. Atque ab sunt officiis id repellat sequi iure deleniti velit et. Possimus quis, nam unde eligendi aperiam iure asperiores, eveniet enim, adipisci vitae maiores. Cupiditate soluta porro quibusdam fugiat commodi quis omnis numquam maxime. Eum dolor ipsam iste sit illo incidunt possimus temporibus tempore quos sed porro aut autem repellat sequi delectus id nemo adipisci ad, quisquam expedita necessitatibus! Doloribus, necessitatibus doloremque atque deleniti facilis temporibus quos reprehenderit, dolorem beatae tempora debitis!
                </div>
                <div className="card" id="card3">
                    <h3>Expert Teaching</h3>
                    ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint in illo. Optio, expedita atque. Eaque quos illum iste temporibus non esse sed impedit a! Numquam accusantium illo saepe perspiciatis nesciunt quidem quasi officia consequuntur iure temporibus impedit eos similique officiis aut vitae, ipsam eius! Accusantium voluptates expedita error ea.
                    ipsum dolor sit amet consectetur adipisicing elit. Atque ab sunt officiis id repellat sequi iure deleniti velit et. Possimus quis, nam unde eligendi aperiam iure asperiores, eveniet enim, adipisci vitae maiores. Cupiditate soluta porro quibusdam fugiat commodi quis omnis numquam maxime. Eum dolor ipsam iste sit illo incidunt possimus temporibus tempore quos sed porro aut autem repellat sequi delectus id nemo adipisci ad, quisquam expedita necessitatibus! Doloribus, necessitatibus doloremque atque deleniti facilis temporibus quos reprehenderit, dolorem beatae tempora debitis!
                </div>
            </section>
            <section id="sponsorsSection">
                <h2>Our Sponsors </h2>
                <div id="sponsors"> <a href="https://www.sony.co.in" target="_blank"><img class="spImage" src={s1} alt="Sponsor Image" /></a><a href="https://www.apple.com" target="_blank"><img class="spImage" src={s2} alt="Sponsor Image" /></a><a href="https://www.instagram.com" target="_blank"><img class="spImage" src={s3} alt="Sponsor Image" /></a><a href="https://www.skype.com/en/" target="_blank"><img class="spImage" src={s4} alt="Sponsor Image" /></a></div>
            </section>
    </div>
  )
}

export default Home
