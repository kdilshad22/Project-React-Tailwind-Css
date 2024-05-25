import React, {useEffect} from 'react';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedinIn
} from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        Aos.init();
    },[]);
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' data-aos="fade-right" data-aos-duration="1600">
            <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.sed excepturi illum corporis ut aperiam animi exercitationem at. Fugiat cum harum laborum.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                < FaLinkedinIn size={30} className='cursor-pointer'/>
                < FaGithubSquare size={30} className='cursor-pointer'/>
                < FaFacebookSquare size={30} className='cursor-pointer'/>
                < FaInstagramSquare size={30} className='cursor-pointer'/>
            </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
