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
               <p>I also participated in an intensive summer program at the <a href="https://www.cam.ac.uk/" target="_blank" rel="noreferrer">University of Cambridge, UK</a>, where I engaged with cutting-edge research methodologies and expanded my understanding of advanced engineering principles in an internationally renowned academic environment.</p>
               <p>
               I am also a <a href="https://www.millenniumfellows.org/class-of-2024-fellows" target="_blank" rel="noreferrer">UN Millennium Fellow</a> working on initiatives to reduce gender disparity in STEM and promote inclusion in tech.
              </p>
              <p>
               Looking ahead, I am planning to pursue graduate studies in Robotics and Control Systems, where I aim to deepen my expertise in autonomous navigation and advance the field of human-robot collaboration.
              </p>
               
                <p> You can email me at: <div className='my-email'><a href="mailto:sashenka.gamage@connect.polyu.hk">sashenka.gamage@connect.polyu.hk</a> or <a href="mailto:sgamage@wisc.edu">sgamage@wisc.edu</a> </div>
                </p>
                </div>
                
                </div>
                
                <div className='wrapper-container'>
                    <img src='./img1-about-me.png' className='wrapper' alt="Sashenka Gamage - Electronics Engineering Student at Hong Kong Polytechnic University specializing in robotics and UAV research"/>
                    
                    <div className='about-me-social-icons'>
                        <a
                            className='social-icon-link github'
                            href='https://github.com/sashenkagamage'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='GitHub'
                        >
                            <i className='fab fa-github fa-2x' style={{color: '#333'}} />
                        </a>
                        <a
                            className='social-icon-link medium'
                            href='https://medium.com/@sashenka.gamage'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Medium'
                        >
                            <i className='fab fa-medium fa-2x' style={{color: '#000000'}} />
                        </a>
                        <a
                            className='social-icon-link instagram'
                            href='https://www.instagram.com/sash__2001/?igshid=NTc4MTIwNjQ2YQ%3D%3D#'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram fa-2x' style={{color: '#E4405F'}} />
                        </a>
                        <a
                            className='social-icon-link x-twitter'
                            href='https://twitter.com/sash__2001'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='X (formerly Twitter)'
                        >
                            <i className='fab fa-twitter fa-2x' style={{color: '#000000'}} />
                        </a>
                        <a
                            className='social-icon-link linkedin'
                            href='https://www.linkedin.com/in/sashenka-gamage-2001/'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin fa-2x' style={{color: '#0077B5'}} />
                        </a>
                    </div>
                </div>
                </div>
                
                 
            </div>
        </div>
        </section>
        <div id='experiences'>
        <div className='education_container'>
            <div className ='content'>
                <h1>Experiences</h1>
                <div className="education">
                    <div className='experience-card'>
                        <div className='experience-header'>
                            <h2>Undergraduate Researcher</h2>
                            <span className='experience-date'>2023 - Present</span>
                        </div>
                        <h3 className='experience-company'>
                            <img src='./polyugradschool-img.png' className='company-logo' alt="Hong Kong Polytechnic University Graduate School logo - Sashenka Gamage Undergraduate Research"/>
                            <a href="https://www.polyu.edu.hk/gs/ug-research/uris/project-21-23/" target="_blank" rel="noreferrer">Graduate School of PolyU</a>
                        </h3>
                        <p className='experience-description'>
                            I am working as an undergraduate researcher in the Graduate School of PolyU, as part of the Undergraduate Research and Innovation Scheme. My research scope is Human-Robot Collaboration, 
                            and I am analyzing how autonomous drones interact in a smart manufacturing field. Currently, I am implementing autonomous navigation, stabilizing drone control, and natural language control. I have a keen interest in flying robots and navigation for flying robots.
                            I am working under the supervision of Ir Dr PAI ZHENG, and you can visit our lab <a href="https://www.raids.group/" target="_blank" rel="noreferrer">RAIDS</a>
                        </p>
                    </div>
                    <div className='experience-card'>
                        <div className='experience-header'>
                            <h2>Drone AI Engineer</h2>
                            <span className='experience-date'>Summer 2025</span>
                        </div>
                        <h3 className='experience-company'>
                            <img src='./lifesparrow-img.png' className='company-logo' alt="LifeSparrow Solutions Limited logo - Sashenka Gamage Drone AI Engineer position"/>
                            <a href="https://www.lifesparrow.com/" target="_blank" rel="noreferrer">LifeSparrow Solutions Limited</a>
                        </h3>
                        <p className='experience-description'>
                            I will be engineering Python-based AI models for analyzing and processing drone imagery, implementing path planning on 3D maps in SparAI to navigate commercial drones, developing a web application for visualizing and analyzing drone data, and optimizing the performance of the AI models and the web application.
                        </p>
                    </div>
                    <div className='experience-card'>
                        <div className='experience-header'>
                            <h2>Engineering Intern</h2>
                            <span className='experience-date'>Summer 2024</span>
                        </div>
                        <h3 className='experience-company'>
                            <img src='./clp-img.png' className='company-logo' alt="CLP Power Hong Kong logo - Sashenka Gamage Engineering Intern experience"/>
                            <a href="https://www.clp.com.hk/en/about-clp" target="_blank" rel="noreferrer">CLP Power Hong Kong</a>
                        </h3>
                        <p className='experience-description'>
                            CLP is one of the largest investor-owned power businesses in Asia. I worked in the Castle Peak Power station under the Electrical Control and Water Management Team. My focus was to study the reliability and life cycle issues of the digital protection relay of high-voltage switchboards.
                        </p>
                        <div className='experience-tasks'>
                            <p>My scope includes:</p>
                            <ul>
                                <li>Conduct a design review of the 11kV station supply system and protection system.</li>
                                <li>Study different types of digital protection relays and propose solutions for improvement.</li>
                            </ul>
                        </div>
                    </div>
               
                    <div className='experience-card'>
                        <div className='experience-header'>
                            <h2>Student Assistant</h2>
                            <span className='experience-date'>2023-2024</span>
                        </div>
                        <h3 className='experience-company'>
                            <img src='./hkpolyu-img.png' className='company-logo' alt="Hong Kong Polytechnic University logo - Sashenka Gamage Student Assistant experience"/>
                            Department of Electrical Engineering and Industrial Center
                        </h3>
                        <p className='experience-description'>
                            As a Student Assistant at PolyU Industrial Center, I trained the MiR250 Robot to perform new tasks by mapping new pathways. 
                            I also worked in programming Universal Robot (UR) using Arduino to perform tasks such as stacking boxes.
                        </p>
                        <p className='experience-description'>
                            The "CLP Generator Inspection Robot" is carried out by the Department of Electrical Engineering in collaboration with CLP Holdings. 
                            I am working under the Electronics and Circuit Designing group and my focus is on designing and debugging the control board and junction board of the robot.
                        </p>
                    </div>
                </div>    
            </div>
        </div>
        </div>
      
        <div id='projects'>
        <Cards />
        </div>

        <div className='research_container'>
            <div className='content'>
                <h1>Conferences</h1>
                <div className='conferences-container'>
                    <div className='conference-row'>
                        <div className='conference-card'>
                            <div className='conference-header'>
                                <h2 className='conference-title'>
                                    <a href="https://ncur.secure-platform.com/2025/" target="_blank" rel="noreferrer">
                                        National Conference on Undergraduate Research (NCUR) 2025
                                    </a>
                                </h2>
                                <span className='conference-location'>Pittsburgh, Pennsylvania</span>
                            </div>
                            <p className='conference-description'>
                                I presented my research on human-robot collaboration in smart manufacturing environments. My presentation, titled 
                                "Enhancing Human-Robot Collaboration in Smart Manufacturing: Autonomous Drone Navigation with Natural Language Processing for Intuitive Control",
                                focused on developing innovative approaches to drone control and automation in industrial settings.
                            </p>
                        </div>
                        <div className='conference-image-container'>
                            <img src='./research-1.jpeg' className='conference-img' alt="Sashenka Gamage presenting Human-Robot Collaboration research at NCUR 2025 Pittsburgh"/>
                        </div>
                    </div>

                    <div className='conference-row'>
                        <div className='conference-card'>
                            <div className='conference-header'>
                                <h2 className='conference-title'>
                                    <a href="https://ugradsymposium.wisc.edu/" target="_blank" rel="noreferrer">
                                        UW-Madison Undergraduate Symposium 2025
                                    </a>
                                </h2>
                                <span className='conference-location'>Madison, Wisconsin</span>
                            </div>
                            <p className='conference-description'>
                                My team and I showcased our robotics research project focusing on autonomous navigation systems. The presentation, "Autonomous Navigation 
                                for Self-Balancing Robots", demonstrated the implementation of ROS2 and Nav2 frameworks to achieve reliable autonomous 
                                navigation in a custom-built self-balancing robot with flat wheels. This work highlighted the integration of modern 
                                robotics frameworks with innovative mechanical design.
                            </p>
                        </div>
                        <div className='conference-image-container'>
                            <img src='./symposium-1.jpeg' className='conference-img' alt="Sashenka Gamage presenting Autonomous Navigation for Self-Balancing Robots at UW-Madison Undergraduate Symposium 2025"/>
                        </div>
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
                <p className='music-text'>During my exchange semester at the <a href="https://www.wisc.edu/" target="_blank" rel="noreferrer">University of Wisconsin-Madison</a>, I had the privilege of playing with the UW-Madison String Orchestra, further expanding my musical experience and collaborating with talented musicians from diverse backgrounds in an American academic setting.</p>
                <p>My favourite orchestra repertoire includes 
                Beethoven Symphony No 9,
                Mozart Requiem,
                and Borodin Polovtsian Dances. 
                </p>
                </div>
                </div>
                
                <img src='./image-7.png' className='wrapper' alt="Sashenka Gamage playing violin - UN Millennium Fellow and musician with PolyU Orchestra"/>
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
                <p className='awards-text'>Won the Merit Award in Hong Kong Techathon 2024 under the category of Digital Economy.</p>
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
