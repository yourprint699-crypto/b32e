import React from 'react'
import PageWrapper from '../components/common/PageWrapper'

const PrivacyPolicy = () => {
  return (
    <PageWrapper className='section-dark text-white'>
      <div className="cinematic-overlay"></div>
      <div className='container mx-auto section-padding'>
        <div className='max-width-content'>
          <h1 className='font-[font2] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase mb-6 sm:mb-8 leading-tight text-layer-3 text-glow'>
            Privacy Policy
          </h1>
          
          <div className='font-[font1] text-xs sm:text-sm text-layer-1 mb-8 sm:mb-12'>
            Last updated: January 15, 2025
          </div>

          <div className='space-y-8 sm:space-y-10 lg:space-y-12 floating-panel-dark'>
            {/* Introduction */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Introduction
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                At K72 Wedding Videography, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services or visit our website.
              </p>
            </section>

            {/* Information We Collect */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Information We Collect
              </h2>
              <div className='space-y-3 sm:space-y-4'>
                <h3 className='font-[font2] text-lg sm:text-xl uppercase text-layer-2'>Personal Information</h3>
                <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-1 sm:space-y-2 list-disc list-inside'>
                  <li>Name, email address, and phone number</li>
                  <li>Wedding date and venue information</li>
                  <li>Communication preferences and special requests</li>
                  <li>Payment and billing information</li>
                </ul>
                
                <h3 className='font-[font2] text-lg sm:text-xl uppercase text-layer-2 mt-4 sm:mt-6'>Technical Information</h3>
                <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-1 sm:space-y-2 list-disc list-inside'>
                  <li>IP address and browser information</li>
                  <li>Website usage patterns and preferences</li>
                  <li>Device information and screen resolution</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                How We Use Your Information
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-1 sm:space-y-2 list-disc list-inside'>
                <li>To provide and improve our wedding videography services</li>
                <li>To communicate with you about your project and appointments</li>
                <li>To process payments and manage billing</li>
                <li>To send you updates about our services (with your consent)</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Data Protection & Security
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                We implement industry-standard security measures to protect your personal information. Your data is encrypted during transmission and stored securely. We regularly review and update our security practices to ensure your information remains protected.
              </p>
            </section>

            {/* Your Rights */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Your Rights
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1 mb-3 sm:mb-4'>
                Under applicable data protection laws, you have the right to:
              </p>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-1 sm:space-y-2 list-disc list-inside'>
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your data</li>
                <li>Data portability and withdrawal of consent</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                Contact Us
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className='glass rounded-lg sm:rounded-xl responsive-padding-md space-y-1 sm:space-y-2'>
                <p className='font-[font1] text-responsive text-layer-1 break-all sm:break-normal'>
                  <strong>Email:</strong> privacy@amouraworks.com
                </p>
                <p className='font-[font1] text-responsive text-layer-1'>
                  <strong>Address:</strong> 22 ruelle du Clerc, 59126, Linselles (France)
                </p>
                <p className='font-[font1] text-responsive text-layer-1'>
                  <strong>Response Time:</strong> Within 30 days of your request
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default PrivacyPolicy