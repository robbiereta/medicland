import Image from 'next/image'
import Link from 'next/link'

import Navbar from './components/navbar'
import FeatureOne from './components/features/featuresOne'
import DrTimeTable from './components/drTimeTable'
import CtaOne from './components/cta/ctaOne'
import Patients from './components/patients'
import Footer from './components/footer'
import ScrollTop from './components/scrollTop'
import AboutImage from './components/aboutImage'

import {RiArrowRightLine, FiFacebook, FiLinkedin, FiGithub, FiTwitter, FiCalendar, FiClock } from './assets/icons/vander'

import { medicalServices, doctorData, blogData, partners } from './data/data'

export default function Home() {
  return (
   <>
   <Navbar manuClass="navigation-menu nav-left nav-light" containerClass="container"/>

    <section className="bg-half-260 d-table w-100"  style={{backgroundImage:`url('/images/bg/01.jpg')`}}>
      <div className="bg-overlay bg-overlay-dark"></div>
      <div className="container">
          <div className="row mt-5 mt-lg-0">
              <div className="col-12">
                  <div className="heading-title">
                      <Image src='/images/logo-icon.png' width={54} height={50} alt=""/>
                      <h4 className="display-4 fw-bold text-white title-dark mt-3 mb-4">Meet The <br/> Best Doctor</h4>
                      <p className="para-desc text-white-50 mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                      
                      <div className="mt-4 pt-2">
                          <Link href="/booking-appointment" className="btn btn-primary">Make Appointment</Link>
                          <p className="text-white-50 mb-0 mt-2">T&C apply. Please read <Link href="#" className="text-white-50">Terms and Conditions <i className="ri-arrow-right-line align-middle"></i></Link></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <FeatureOne/>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <AboutImage colClass="col-lg-5 col-md-6"/>

              <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                  <div className="ms-lg-4">
                      <div className="section-title">
                          <h4 className="title mb-4">About Our Treatments</h4>
                          <p className="text-muted para-desc">Great doctor if you need your family member to get effective immediate assistance, examination, emergency treatment or a simple consultation. Thank you.</p>
                          <p className="text-muted para-desc mb-0">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words.</p>
                      </div>

                      <div className="mt-4">
                          <Link href="/aboutus" className="btn btn-primary">Read More <RiArrowRightLine className="align-middle"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <span className="badge rounded-pill bg-soft-primary mb-3">Departments</span>
                      <h4 className="title mb-4">Our Medical Services</h4>
                      <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                  </div>
              </div>
          </div>

          <div className="row">
              {medicalServices.slice(0,8).map((item,index) => {
                  let Icon = item.icon
                  return(
                  <div className="col-xl-3 col-md-4 col-12 mt-5" key={index}>
                      <div className="card features feature-primary border-0">
                          <div className="icon text-center rounded-md">
                              <Icon className="h3 mb-0"/>
                          </div>
                          <div className="card-body p-0 mt-3">
                              <Link href="/departments" className="title text-dark h5">{item.title}</Link>
                              <p className="text-muted mt-3">{item.desc}</p>
                              <Link href="/departments" className="link">Read More <RiArrowRightLine className="align-middle"/></Link>
                          </div>
                      </div>
                  </div>
                  )
              })}
          </div>
      </div>
    </section>


    <CtaOne/>


    <section className="py-4 bg-light">
        <div className="container">
            <div className="row justify-content-center">
                {partners.map((item, index) => {
                    return(
                        <div className="col-lg-2 col-md-2 col-6 text-center py-4" key={index}>
                            <Image src={item} width={125} height={25} className="avatar avatar-client" alt=""/>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>

    <Footer/>
    <ScrollTop/>
   </>
  )
}
