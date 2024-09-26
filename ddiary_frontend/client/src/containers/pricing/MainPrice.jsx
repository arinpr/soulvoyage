import React from 'react'
import './mainPrice.css';
import { BsCheckCircleFill } from "react-icons/bs";

function MainPrice() {
  return (
    <>
        <section className='Journal_price py-2' id='pricing'>
            <h1 className='text-center py-5'>
                Pricing
            </h1>
            <div className="Journal_Price_box">
                <div className="Price1 ">
                        <h4 className='text-center'>Basic</h4>
                        <h3 className='text-center py-2'>$X</h3>
                        <div className="row g-0">
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>Journal</p>
                            </div>
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>Journal analysis and emotion tracker</p>
                            </div>
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>Smart search</p>
                            </div>
                        </div>
                    </div>
                    <div className="Price1 ">
                        <h4 className='text-center'>Monthly</h4>
                        <h3 className='text-center py-2'>$XX</h3>
                        <div className="row g-0">
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>All in free plan</p>
                            </div>
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>Psychologist recommendation based on journals</p>
                            </div>
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>Mindset and Emotional State Analysis</p>
                            </div>
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>Personalized Feedback and Suggestions</p>
                            </div>
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>Motivational stories</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="Price1 ">
                        <h4 className='text-center'>Annual</h4>
                        <h3 className='text-center py-2'>$XXX</h3>
                        <div className="row g-0">
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>All in free plan</p>
                            </div>
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>Psychologist recommendation based on journals</p>
                            </div>
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>Mindset and Emotional State Analysis</p>
                            </div>
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>Personalized Feedback and Suggestions</p>
                            </div>
                            <div className="col-1">
                                <BsCheckCircleFill size={25} />
                            </div>
                            <div className="col-11">
                                <p className='px-2'>Motivational stories</p>
                            </div>
                        </div>
                    </div>
            </div>
            {/* <div className="row g-0">
                <div className="col-12 col-md-4 pr-5">
                    <div className="Price1 ">
                        <h4 className='text-center'>Basic</h4>
                        <h3 className='text-center'>$X</h3>
                        <ul>
                            <li><BsCheckCircleFill size={25}  className='m-2'/> Journal</li>
                            <li><BsCheckCircleFill size={25}  className='m-2'/>Journal analysis and emotion tracker</li>
                            <li><BsCheckCircleFill size={25}  className='m-2'/>Smart search</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-4 px-4">
                <div className="Price1 ">
                        <h4 className='text-center'>Basic</h4>
                        <h3 className='text-center'>$X</h3>
                        <ul>
                            <li><BsCheckCircleFill size={25}  className='m-2'/> Journal</li>
                            <li><BsCheckCircleFill size={25}  className='m-2'/>Journal analysis and emotion tracker</li>
                            <li><BsCheckCircleFill size={25}  className='m-2'/>Smart search</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-4 pl-5">
                    <div className="bg-primary ">
                        world
                    </div>
                </div>
            </div> */}
        </section>
    </>
  )
}

export default MainPrice