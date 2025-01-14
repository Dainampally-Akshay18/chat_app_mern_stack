import React from 'react'

const DeveloperPage = () => {
    console.log('developer page')
  return (
    <div className=''>
            <br /><br /><br />
            <h1 style={{ textAlign: "center", fontSize: "2rem" }}>About The Developer</h1>
            <br /><br />
            <div className="card card bg-base-50 ">
                <figure>
                    <img 
                    style={{height:"300px",width:"175px"}}
                        src="https://w0.peakpx.com/wallpaper/1004/647/HD-wallpaper-virat-kohli-batting-virat-kohli-batting-king-kohli-cricketer-sports-face-background.jpg"
                        alt="Movie" />
                </figure>
                <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>Akshay Kireet</h1>
                <div className="card-body">
                    <h2 className="card-title">Mission</h2>
                    <p>My mission is to develop a chat application that delivers seamless and secure communication, empowering users to connect effortlessly and meaningfully, regardless of distance. This project reflects my dedication to creating a platform that prioritizes user experience, privacy, and innovation</p>

                    <h2 className="card-title">Vision</h2>
                    <p> My vision is to establish this application as a trusted and versatile communication tool, setting a benchmark for accessibility, reliability, and security. As a solo developer, I aim to continuously refine and innovate the platform, ensuring it grows to meet the ever-evolving needs of its users</p>
                    <h2 className="card-title">Commitment to Security and Privacy</h2>
                    <p>We understand that security and privacy are paramount in today’s digital world. That’s why we’ve built our chat application with a steadfast commitment to protecting your data at every level.</p>
                    <ul>
                        <li><h6><b>End-to-End Encryption</b></h6> All messages and chats are encrypted to ensure that your conversations remain private and accessible only to you and your intended recipients.</li>
                        <li><h6><b>Secure Account Features</b></h6> With robust security measures, including multi-factor authentication and advanced encryption protocols, we safeguard your account against unauthorized access.</li>
                        <li><h6><b>Data Minimization</b></h6>We collect only the essential information needed to deliver a seamless experience. Your data is never shared with third parties without your explicit consent.</li>
                    </ul>

                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DeveloperPage
