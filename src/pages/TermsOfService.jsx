import React from 'react'
import PageWrapper from '../components/common/PageWrapper'

const TermsOfService = () => {
  return (
    <PageWrapper className='section-dark text-white'>
      <div className="cinematic-overlay"></div>
      <div className='container mx-auto section-padding'>
        <div className='max-width-content'>
          <h1 className='font-[font2] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase mb-6 sm:mb-8 leading-tight text-layer-3 text-glow'>
            Terms of Service
          </h1>
          
          <div className='font-[font1] text-xs sm:text-sm text-layer-1 mb-8 sm:mb-12'>
            Last updated: January 15, 2025
          </div>

          <div className='space-y-8 sm:space-y-10 lg:space-y-12 floating-panel-dark'>
            {/* Introduction */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Agreement to Terms
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                By engaging K72 Wedding Videography for your wedding or event, you agree to be bound by these Terms of Service. Please read these terms carefully before booking our services.
              </p>
            </section>

            {/* Services */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Our Services
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1 mb-3 sm:mb-4'>
                K72 Wedding Videography provides professional wedding and event videography services including:
              </p>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-1 sm:space-y-2 list-disc list-inside'>
                <li>Wedding ceremony and reception filming</li>
                <li>Professional video editing and post-production</li>
                <li>Highlight reels and full-length wedding films</li>
                <li>Drone footage (subject to venue permissions and regulations)</li>
                <li>Live streaming services</li>
              </ul>
            </section>

            {/* Booking and Payment */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Booking & Payment Terms
              </h2>
              <div className='space-y-3 sm:space-y-4'>
                <h3 className='font-[font2] text-lg sm:text-xl uppercase text-layer-2'>Booking Process</h3>
                <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-1 sm:space-y-2 list-disc list-inside'>
                  <li>A 50% deposit is required to secure your wedding date</li>
                  <li>Final payment is due 30 days before your wedding date</li>
                  <li>All payments must be made in Euros (EUR)</li>
                  <li>Late payment fees may apply for overdue balances</li>
                </ul>
                
                <h3 className='font-[font2] text-lg sm:text-xl uppercase text-layer-2 mt-4 sm:mt-6'>Cancellation Policy</h3>
                <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-1 sm:space-y-2 list-disc list-inside'>
                  <li>Cancellations more than 90 days before: 50% refund of deposit</li>
                  <li>Cancellations 30-90 days before: 25% refund of deposit</li>
                  <li>Cancellations less than 30 days before: No refund</li>
                </ul>
              </div>
            </section>

            {/* Delivery and Timeline */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Delivery Timeline
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-1 sm:space-y-2 list-disc list-inside'>
                <li>Highlight reel: 2-3 weeks after your wedding</li>
                <li>Full wedding film: 6-8 weeks after your wedding</li>
                <li>Raw footage delivery: Available upon request for additional fee</li>
                <li>Rush delivery: Available for 50% surcharge</li>
              </ul>
            </section>

            {/* Liability and Limitations */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Liability & Limitations
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                While we take every precaution to ensure the highest quality service, our liability is limited to the total amount paid for our services. We recommend couples have backup photography arrangements and understand that unforeseen circumstances may affect our ability to deliver services.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Intellectual Property
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                You retain ownership of your wedding footage. K72 Wedding Videography retains the right to use excerpts for promotional purposes unless otherwise specified in writing. We respect your privacy and will always seek permission before using your content publicly.
              </p>
            </section>

            {/* Contact Information */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Legal Inquiries
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1 mb-3 sm:mb-4'>
                For questions regarding these terms or legal matters, please contact us:
              </p>
              <div className='glass rounded-lg sm:rounded-xl responsive-padding-md space-y-1 sm:space-y-2'>
                <p className='font-[font1] text-responsive text-layer-1 break-all sm:break-normal'>
                  <strong>Email:</strong> legal@amouraworks.com
                </p>
                <p className='font-[font1] text-responsive text-layer-1'>
                  <strong>Address:</strong> 22 ruelle du Clerc, 59126, Linselles (France)
                </p>
                <p className='font-[font1] text-responsive text-layer-1'>
                  <strong>Business Hours:</strong> Monday-Friday, 9am-7pm (UTC+1)
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default TermsOfService