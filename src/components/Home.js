import React from 'react';
import "../App.css"
import Cards from './Cards';
import './mainCon.css';
import Footer from './Footer'; 

function Home(){
   
    return(
        <> 
      
       
        < section id='aboutme'>
        <div className='about-me_container'>
            <div className ='content'>
                <div className='about-me'>
                    
                <div>
                <h1>About me</h1>
                <div className="location">
                    <p> A Sri Lankan in Hong Kong</p>
                </div>
                <div className='about-me-text'>
                    <p>
               Hi! I am Sashenka Gamage, a rising senior studying Electronics Engineering at <a href="https://www.polyu.edu.hk/" target="_blank" rel="noreferrer">The Hong Kong Polytechnic University</a>. My work centers on autonomous navigation for Unmanned Aerial Vehicles (UAVs), with a focus on developing algorithms using the Robot Operating System (ROS).
               I’m passionate about Robotics, UAVs, and Navigation systems—so if you’re into any of those areas, feel free to reach out!
               </p>
               <p>I recently completed an exchange semester at the <a href="https://www.wisc.edu/" target="_blank" rel="noreferrer">University of Wisconsin-Madison, USA</a> where I further explored my research interests and collaborated with peers in the robotics and embedded systems community.</p>
               <p>
               I am also a <a href="https://www.millenniumfellows.org/class-of-2024-fellows" target="_blank" rel="noreferrer">UN Millennium Fellow</a> working on initiatives to reduce gender disparity in STEM and promote inclusion in tech.
              </p>
               
                <p> You can email me at: <div className='my-email'><a href="mailto:sashenka.gamage@connect.polyu.hk">sashenka.gamage@connect.polyu.hk</a> or <a href="mailto:sgamage@wisc.edu">sgamage@wisc.edu</a> </div>
                </p>
                </div>
                
                </div>
                
                <img src='./img-abut-me.png' className='wrapper' alt=""/>
                </div>
                
                 
            </div>
        </div>
        </section>
        <div id='experiences'>
        <div className='education_container'>
            <div className ='content'>
                <h1>Experiences</h1>
                <div className="education">
                <ul className='education-text'><h1>Undergraduate Researcher</h1>
                <h7>2023 - Present</h7>
                <h3> <a href="https://www.polyu.edu.hk/gs/ug-research/uris/project-21-23/" target="_blank" rel="noreferrer">Graduate School of PolyU</a></h3>
                <p className='education-text'>I am working as an undergraduate researcher in the Graduate School of PolyU, as part of the Undergraduate Research and Innovation Scheme. My research scope is Human-Robot Collaboration, 
                    and I am analyzing how autonomous drones interact in a smart manufacturing field.  Currently, I am implementing autonomous navigation, stabilizing drone control, and natural language control. I have a keen interest in flying robots and navigation for flying robots.
                    I am working under the supervision of Ir Dr PAI ZHENG, and you can visit to our lab <a href="https://www.raids.group/" target="_blank" rel="noreferrer">RAIDS</a></p>
                </ul>
            <ul className='education-text'>
            <h1>Engineering Intern</h1>
                <h7>Summer 2024</h7>
                <h3> <a href="https://www.clp.com.hk/en/about-clp" target="_blank" rel="noreferrer">CLP Power Hong Kong</a></h3>
                <p>CLP is one of the largest investor-owned power businesses in Asia. I work in the Castle Peak Power station under the Electrical Control and Water Management Team. My focus is to study the reliability and life cycle issues of the digital protection relay of high-voltage switchboards. 
                My scope includes:
                    <li className='education-text'>Conduct a design review of the 11kV station supply system and protection system.</li>
                    <li className='education-text'>Study different types of digital protection relays and propose solutions for improvement.</li>
                </p>
                </ul> 
               
                <ul className='education-text'>
                <h1>Student Assistant </h1>
                <h7>2023-2024</h7>
                <h3>Department of Electrical Engineering and Industrial Center </h3>
                <p className='education-text'>As a Student Assistant at PolyU Industrial Center, I trained the MiR250 Robot to perform new tasks by mapping new pathways. 
                    I also worked in programming Universal Robot (UR) using Arduino to perform tasks such as stacking boxes. </p>
                <p className='education-text'>The "CLP Generator Inspection Robot" is carried out by the Department of Electrical Engineering in collaboration with CLP Holdings. 
                    I am working under the Electronics and Circuit Designing group and my focus is on designing and debugging the control board and junction board of the robot.</p>
                </ul>
            
            
                    </div>    
            </div>
        </div>
        </div>
      
        <div id='projects'>
        <Cards />
        </div>

        <div className='research_container'>
            <div className='content'>
                <div className='research'>
                    <div>
                        <h1>Conferences</h1>
                        
                        <div className='research-text'>
                            <h3 className='conference-title'>
                                <a href="https://ncur.secure-platform.com/2025/" target="_blank" rel="noreferrer">
                                    National Conference on Undergraduate Research (NCUR) 2025
                                </a>
                            </h3>
                            <h7>Pittsburgh, Pennsylvania</h7>
                            <p>
                            I presented my research on human-robot collaboration in smart manufacturing environments. My presentation, titled 
                            "Enhancing Human-Robot Collaboration in Smart Manufacturing: Autonomous Drone Navigation with Natural Language Processing for Intuitive Control",
                            focused on developing innovative approaches to drone control and automation in industrial settings.
                            </p>
                        </div>

                        <div className='research-text'>
                            <h3 className='conference-title'>
                                <a href="https://ugradsymposium.wisc.edu/" target="_blank" rel="noreferrer">
                                    UW-Madison Undergraduate Symposium 2025
                                </a>
                            </h3>
                            <h7>Madison, Wisconsin</h7>
                            <p>
                            My team and I showcased our robotics research project focusing on autonomous navigation systems. The presentation, "Autonomous Navigation 
                            for Self-Balancing Robots", demonstrated the implementation of ROS2 and Nav2 frameworks to achieve reliable autonomous 
                            navigation in a custom-built self-balancing robot with flat wheels. This work highlighted the integration of modern 
                            robotics frameworks with innovative mechanical design.
                            </p>
                        </div>
                    </div>
                    
                    <div className='conference-images'>
                        <img src='./research-1.jpeg' className='wrapper-1' alt="NCUR Presentation"/>
                        <img src='./symposium-1.jpeg' className='wrapper-1' alt="UW-Madison Symposium"/>
                    </div>
                </div>
            </div>
        </div>


        <div id='music'>
        <div className='music_container'>
            <div className ='content'>
                <div className='music'>
                <div>
                <h1>Music</h1>
                <div className="location">
                    <p><a href="https://www.instagram.com/sasha.violin?igsh=ZG9wZmE4N3Nldnlq&utm_source=qr" target="_blank" rel="noreferrer">🎻🎶 Violin Page </a></p>
                </div>
                <div className='music-text'>
               <p className='music-text'>I started playing violin when I was twelve years old, under the guidance of renowned musician Mr. Diliup Gabadamudalige. </p>
                <p>In 2016, I joined <a href="https://en.wikipedia.org/wiki/Symphony_Orchestra_of_Sri_Lanka" target="_blank" rel="noreferrer">the Junior Symphony Orchestra of Sri Lanka</a> and played several concerts in collaboration with the Symphony Orchestra of Sri Lanka under Mrs. Dushyanthi Perera. I was also a violinist in my school, Visakha Vidyalaya orchestra, from 2015 to 2020. Currently, I am learning music under famous violinist and musician Mr. Ananda Dabare. </p>
               <p className='music-text'>In 2022, I joined PolyU Orchestra, conducted by <a href="http://www.leungkinfung.com/bio.php" target="_blank" rel="noreferrer">Mr. Kin Fung Leung</a>, a world-class musician awarded outstanding recognition around the globe. So far, I have played in three major concerts, including Beethoven's Symphony No. 9 and the "I Love HK" concert. I am looking forward to playing with renowned soloists and musicians at PolyU Orchestra. </p>
                <p>My favourite orchestra repertoire includes 
                Beethoven Symphony No 9,
                Mozart Requiem,
                and Borodin Polovtsian Dances. 
                </p>
                </div>
                </div>
                
                <img src='./image-7.png' className='wrapper' alt=""/>
                </div>
                
                 
            </div>
        </div>
        </div>
        <div id='awards'>
        <div className='awards_container'>
        <h1 className='content'>Awards</h1>
            <div className ='content'> 
               <div className="awards">
               <div>
                <ul className='awards-text'>
                <h3> Winner HKEAS Global Grand Challengers Pitch Competition 2024</h3>
                <h7>2024</h7>
                <p className='awards-text'>My Team will be representing Hong Kong and China for Global Grand Challenges held in the United States of America.</p>
                </ul> 
                <ul className='awards-text'>
                <h3> CLP Scholarship</h3>
                <h7>2024</h7>
                <p className='awards-text'>Associated with CLP Power Hong Kong</p>
                </ul> 
                <ul className='awards-text'>
                <h3> Belt and Road Scholarship</h3>
                <h7>2022-2026</h7>
                <p className='awards-text'>Associated with The Hong Kong Polytechnic University</p>
                </ul>
                <ul className='awards-text'>
                <h3> HKSAR Government Scolarship Fund Reaching Out Award</h3>
                <h7>2023</h7>
                <p className='awards-text'>Issued by Hong Kong SAR Government</p>
                </ul> 
                
                </div>

                <div>
                <ul className='awards-text'>
                <h3> Dean's Honors List</h3>
                <h7>2023</h7>
                <p className='awards-text'>Associated with The Hong Kong Polytechnic University</p>
                </ul> 
                <ul className='awards-text'>
                <h3> CURI Residential College Scholarship</h3>
                <h7>2023</h7>
                <p className='awards-text'>Associated with The Hong Kong Polytechnic University</p>
                </ul>
                <ul className='awards-text'>
                <h3> Hong Kong Techathon 2024 Merit Award (Open Group)</h3>
                <h7>2024</h7>
                <p className='awards-text'>FinTrust won the Merit Award in Hong Kong Techathon 2024 under the category of Digital Economy.</p>
                </ul>
                <ul className='awards-text'>
                <h3> Dr Winnie S M Tang-PolyU Student Innovation & Entrepreneurship Scholarship</h3>
                <h7>2023</h7>
                <p className='awards-text'>Awarded HK$10,000 to fund the project "GoPark"</p>
                </ul>
                       </div>
                <div>
        
                <ul className='awards-text'>
                <h3> Idealize 2021 - Overall Championship: School Category</h3>
                <h7>2021</h7>
                <p className='awards-text'>Issued by AIESEC in University of Moratuwa</p>
                </ul>
                <ul className='awards-text'>
                <h3>Susan George Pulimood Memorial Award</h3>
                <h7>2021</h7>
                <p className='awards-text'>Academic Excellence in Physical Science and All Round Performance</p>
                </ul>
                <ul className='awards-text'>
                <h3>President's Guide</h3>
                <h7>2019</h7>
                <p className='awards-text'>Issued by Sri Lanka Girl Guides Association</p>
                </ul>
                <ul className='awards-text'>
                <h3>Upali Dias Memorial Award</h3>
                <h7>2017</h7>
                <p className='awards-text'>Best All Rounder Junior Secondary Section</p>
                </ul>
                </div>
                    </div>    
            </div>
        </div>
        </div>
       
        <Footer/>
     
        </>
        
    );
}
export default Home;
