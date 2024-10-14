import './index.css';
import { useState } from 'react';
import { MdVerified, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaPlus, FaStar, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuTwitter, LuIndianRupee } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaHospitalAlt } from "react-icons/fa";

const Home = () => {
    const [selectedType, setSelectedType] = useState('Video');
    const [selectedDate, setSelectedDate] = useState('Tue, 11 Oct');

    const handleTypeSelect = (type) => {
        setSelectedType(type);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="home-section">
            <div className='doctor-banner'></div>
            <div>
                <div className='about-doctor'>
                    <div className='personal-details'>
                        <img src="/images/profile.png" alt="profile" className='profile-image' />
                        <div>
                            <div className='name-section'>
                                <h3 className='doctor-name'>Dr.Bruce Williams</h3>
                                <MdVerified size={23} className='verify-icon' />
                            </div>
                            <p className='doctor-type'>Gynaecologist</p>
                            <div className='rating-section'>
                                <p>Rating</p>
                                {[...Array(4)].map((_, index) => (
                                    <FaStar key={index} className='star-icon' size={23} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='followers-details'>
                        <div className='follow-item'>
                            <p>Followers</p>
                            <h2 className='no'>865</h2>
                        </div>
                        <div className='follow-item'>
                            <p>Following</p>
                            <h2 className='no'>18K</h2>
                        </div>
                        <div className='follow-item'>
                            <p>Posts</p>
                            <h2 className='no'>18</h2>
                        </div>
                    </div>
                    <div className='booking-section'>
                        <button type="button" className='book-btn'>Book An Appointment</button>
                    </div>
                </div>
            </div>

            <div className='bottom-section'>
                <div className='bottom-first-part'>
                    <div className='about-me'>
                        <div className='about-me-header'>
                            <h4>A Little About Me</h4>
                            <div className='follow-me'>
                                <button className='follow-btn'>Follow</button>
                                <FaPlus />
                            </div>
                        </div>
                        <p className='about-para'>
                            Hello I am Dr. Bruce Willis, a Gynaecologist at Sanjivni Hospital Surat. 
                            I love working with all my hospital staff and senior doctors.
                            Completed my graduation in Gynaecological Medicine.
                        </p>
                        <div className='line-section'>
                            <hr className='line' />
                            <p className='read-more-text'>Read More</p>
                        </div>
                        <div className='lan-section'>
                            <p className='lan-text'>Language Spoken</p>
                            <button className='lan-btn'>English</button>
                            <button className='lan-btn'>Hindi</button>
                            <button className='lan-btn'>Telugu</button>
                        </div>
                        <div className='social-icons'>
                            <FaFacebookF className='social-icon' size={30} />
                            <FaInstagram className='social-icon' size={30} />
                            <AiOutlineYoutube className='social-icon' size={30} />
                            <LuTwitter className='social-icon' size={30} />
                        </div>
                    </div>
                    <div className='specialize-in'>
                        <div className='about-me-header'>
                            <h3>I Specailize in</h3>
                        </div>
                        <div className='photo-section'>
                            <img src='/images/womenshealth.png' alt='womens health' className='img-item'/>
                            <img src='/images/haircare.png' alt='haircare' className='img-item'/>
                            <img src='/images/immunity.png' alt='immunity' className='img-item'/>
                            <img src='/images/skincare.png' alt='skin-care' className='img-item'/>
                        </div>

                    </div>
                    <div className='concerns-section'>
                        <div className='about-me-header'>
                            <h3>The Concerns I Treat</h3>
                        </div>
                        <div className='concerns-items'>  
                            {['Skin Treatment','Pregnancy','Period Doubts',
                            'Endometriosis','Pelvic Pain','Ovarian Cysts','+5 More'].map((eachTreatment)=>(
                                <button type="button" className='each-type'>
                                    {eachTreatment}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='experience-section'>
                        <div className="about-me-header">
                            <h3>My Work Experience</h3>
                        </div>
                        <h2 className='about-para'>I have been in practice for : 7+ Years</h2>
                        <hr className='line'/>
                        <div className='experience-item'>
                            <div className='hospital-row'>
                                <FaHospitalAlt className='social-icon'/>
                                <div className='hospital-details'>
                                    <h3>Midtown Medical Clinic</h3>
                                    <p>Senoir Doctor</p>
                                </div>
                            </div>
                            <p>2016-Present</p>

                        </div>
                        <div className='experience-item'>
                            <div className='hospital-row'>
                                <FaHospitalAlt className='social-icon'/>
                                <div className='hospital-details'>
                                    <h3>Midtown Medical Clinic</h3>
                                    <p>Senoir Doctor</p>
                                </div>
                            </div>
                            <p>2016-Present</p>

                        </div>


                    </div>
                    <div className='review-section'>
                        <div className='about-me-header'>
                            <h3>Featured Reviews (102)</h3>
                        </div>
                        
                        <div className='review-item'>
                            <div className='diff'>
                                <div className='hospital-row'>
                                    <img src='/images/review.png' alt="review" className='review-img'/>
                                    <div className='hospital-details'>
                                        <h3>Midtown Medical Clinic</h3>
                                        <p>Senoir Doctor</p>
                                    </div>
                                    
                                </div>
                                <p>20 January 2023</p>
                            </div>
                            <div className='star-section'>
                                {[...Array(4)].map((_, index) => (
                                    <FaStar key={index} className='star-icon' size={23} />
                                ))}
                            </div>
                            <p>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. 
                                will write again after using it for longer periods</p>
        
                        </div>
                        <div className='review-item'>
                            <div className='diff'>
                                <div className='hospital-row'>
                                    <img src='/images/review.png' alt="review" className='review-img'/>
                                    <div className='hospital-details'>
                                        <h3>Midtown Medical Clinic</h3>
                                        <p>Senoir Doctor</p>
                                    </div>
                                    
                                </div>
                                <p>20 January 2023</p>
                            </div>
                            <div className='star-section'>
                                {[...Array(4)].map((_, index) => (
                                    <FaStar key={index} className='star-icon' size={23} />
                                ))}
                            </div>
                            <p>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. 
                                will write again after using it for longer periods</p>
        
                        </div>

                    </div>
                </div>

                <div className='bottom-second-part'>
                    <div className='appointment-head'>
                        <h3 className='appointment-text'>Appointment Fee</h3>
                        <div className='price-section'>
                            <LuIndianRupee />
                            <p>600.00</p>
                        </div>
                    </div>
                    <div className='line-section-part-two'>
                        <p className='line-para'>Select Your Mode of Session</p>
                        <hr className='line' />
                    </div>
                    <div className='appointment-type'>
                        {['In-Clinic', 'Video', 'Chat'].map(type => (
                            <div
                                key={type}
                                className={`appointment-item ${selectedType === type ? 'selected' : ''}`}
                                onClick={() => handleTypeSelect(type)}
                            >
                                <p className='type-name'>{type}</p>
                                <p className='time'>{type === 'Chat' ? '30 Mins' : '45 Mins'}</p>
                            </div>
                        ))}
                    </div>
                    <div className='line-section-part-two'>
                        <p>Pick a time slot</p>
                        <hr className='line' />
                        <SlCalender className='social-icon' size={30} />
                    </div>
                    <div className='date-section'>
                        <MdKeyboardArrowLeft />
                        {['Mon, 10 Oct', 'Tue, 11 Oct', 'Wed, 12 Oct'].map(date => (
                            <div
                                key={date}
                                className={`date-item ${selectedDate === date ? 'selected' : ''}`}
                                onClick={() => handleDateSelect(date)}
                            >
                                <p className='type-name'>{date}</p>
                                <p className='time'>{date === 'Tue, 11 Oct' ? '2 Slots' : '5 Slots'}</p>
                            </div>
                        ))}
                        <MdKeyboardArrowRight />
                    </div>
                    <p className='mrng-txt'>Morning</p>
                    <div className='time-section'>
                        {['9:00 AM','10:00 AM','11:00 AM','12:00 AM'].map((time)=>(
                            <div className='time-item'>
                                <p>{time}</p>
                            </div>
                        ))}
                    </div>
                    <p className='mrng-txt'>Evening</p>
                    <div className='time-section'>
                        {['4:00 PM','5:30 PM','6:00 PM','7:00 PM'].map((time)=>(
                            <div className='time-item'>
                                <p>{time}</p>
                            </div>
                        ))}
                    </div>
                    <button type="button" className='book-appointment'>Make An Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
