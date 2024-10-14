import React, { useState } from 'react';
import './index.css';
import { LuPill } from "react-icons/lu";
import { GiGraduateCap } from "react-icons/gi";
import { LiaLanguageSolid } from "react-icons/lia";


const FindDoctors = () => {
    const [filters, setFilters] = useState({
        expertise: '',
        gender: '',
        fees: '',
        language: '',
        allFilters: ''
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const clearFilter = (filterName) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: ''
        }));
    };

    return (
        <div className="find-doctors-container">
            <img src="/images/find.png" alt="find" className="find-image" />
            <div className="filter-section">
                <select
                    name="expertise"
                    aria-label="Expertise"
                    className="filter-select"
                    value={filters.expertise}
                    onChange={handleFilterChange}
                >
                    <option value="">Expertise</option>
                    <option value="womens-health">Women's Health</option>
                    <option value="hair-care">Hair Care</option>
                    <option value="skin-care">Skin Care</option>
                    <option value="immunity">Immunity</option>
                </select>
                <select
                    name="gender"
                    aria-label="Gender"
                    className="filter-select"
                    value={filters.gender}
                    onChange={handleFilterChange}
                >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <select
                    name="fees"
                    aria-label="Fees"
                    className="filter-select"
                    value={filters.fees}
                    onChange={handleFilterChange}
                >
                    <option value="">Fees</option>
                    <option value="0-500">0-500</option>
                    <option value="500-10000">500-10000</option>
                </select>
                <select
                    name="language"
                    aria-label="Language"
                    className="filter-select"
                    value={filters.language}
                    onChange={handleFilterChange}
                >
                    <option value="">Language</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="telugu">Telugu</option>
                </select>
                <select
                    name="allFilters"
                    aria-label="All Filters"
                    className="filter-select"
                    value={filters.allFilters}
                    onChange={handleFilterChange}
                >
                    <option value="">All Filters</option>
                </select>
            </div>
            <hr className='line-three' />
            <div className='selected-filters'>
                {filters.expertise && (
                    <p className='select-filter'>
                        {filters.expertise}  
                        <span className="clear-filter" onClick={() => clearFilter('expertise')}>❌</span>
                    </p>
                )}
                {filters.gender && (
                    <p className='select-filter'>
                        {filters.gender}  
                        <span className="clear-filter" onClick={() => clearFilter('gender')}>❌</span>
                    </p>
                )}
                {filters.fees && (
                    <p className='select-filter'>
                        {filters.fees} 
                        <span className="clear-filter" onClick={() => clearFilter('fees')}>❌</span>
                    </p>
                )}
                {filters.language && (
                    <p className='select-filter'>
                        {filters.language} 
                        <span className="clear-filter" onClick={() => clearFilter('language')}>❌</span>
                    </p>
                )}
            </div>
            <div className='doctor-book-section'>
                <div className='doctor-card'>
                    <img src='/images/doctor-image.png' alt='doctor' className='doctor-card-image'/>
                    <h1 className='doctor-name'>Dr.Prerana Narang</h1>
                    <div className='doctor-options'>
                        <LuPill/>
                        <p>Male Female Infertility</p>

                    </div>
                    <div className='doctor-options'>
                        <GiGraduateCap/>
                        <p>7 Years Of Experiece</p>

                    </div>
                    <div className='doctor-options'>
                        <LiaLanguageSolid/>
                        <p>Speaks : English,Telugu,Hindi</p>
                    </div>
                    <div className='book-type'>
                        <div className='book-type-item'>
                            <p>Video Consultation</p>
                            <p className='price'>4000</p>
                        </div>
                        <div className='book-type-item'>
                            <p>Chat Consultation</p>
                            <p className='price'>Free</p>
                        </div>

                    </div>
                    <button type="button" className='view-btn'>View Profile</button>
                    <button type="button" className="book-consul-btn">Book A Consultation</button>

                </div>
                <div className='doctor-card'>
                    <img src='/images/doctor-image.png' alt='doctor' className='doctor-card-image'/>
                    <h1>Dr.Prerana Narang</h1>
                    <div className='doctor-options'>
                        <LuPill/>
                        <p>Male Female Infertility</p>

                    </div>
                    <div className='doctor-options'>
                        <GiGraduateCap/>
                        <p>7 Years Of Experiece</p>

                    </div>
                    <div className='doctor-options'>
                        <LiaLanguageSolid/>
                        <p>Speaks : English,Telugu,Hindi</p>
                    </div>
                    <div className='book-type'>
                        <div className='book-type-item'>
                            <p>Video Consultation</p>
                            <p className='price'>4000</p>
                        </div>
                        <div className='book-type-item'>
                            <p>Chat Consultation</p>
                            <p className='price'>Free</p>
                        </div>

                    </div>
                    <button type="button" className='view-btn'>View Profile</button>
                    <button type="button" className="book-consul-btn">Book A Consultation</button>

                </div>
                
            </div>
        </div>
    );
};

export default FindDoctors;
