import React from 'react'
import PersistentForm from '../common/PersistentForm'

const ContactForm = () => {
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
  }

  return (
    <div className='floating-panel-dark'>
      <h2 className='font-[font2] heading-responsive-lg uppercase text-[#D3FD50] mb-6 sm:mb-8 lg:mb-10 text-layer-2 text-glow'>
        Inquire Now
      </h2>
      
      <PersistentForm 
        formId="contact-inquiry" 
        onSubmit={handleSubmit}
        className='space-y-6 sm:space-y-8'
      >
        <ContactFormFields />
      </PersistentForm>
    </div>
  )
}

const ContactFormFields = ({ formData = {}, onInputChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    if (onInputChange) {
      onInputChange(name, value)
    }
  }

  return (
    <>
      <div className='form-grid form-grid-2 gap-4 sm:gap-6'>
        <input 
          type="text" 
          name="firstName"
          placeholder="First Name *"
          value={formData.firstName || ''}
          onChange={handleChange}
          required
          className='w-full input-inset text-white placeholder:text-gray-400'
        />
        <input 
          type="text" 
          name="lastName"
          placeholder="Last Name *"
          value={formData.lastName || ''}
          onChange={handleChange}
          required
          className='w-full input-inset text-white placeholder:text-gray-400'
        />
      </div>
      
      <input 
        type="email" 
        name="email"
        placeholder="Email Address *"
        value={formData.email || ''}
        onChange={handleChange}
        required
        className='w-full input-inset text-white placeholder:text-gray-400'
      />
      
      <input 
        type="tel" 
        name="phone"
        placeholder="Phone Number"
        value={formData.phone || ''}
        onChange={handleChange}
        className='w-full input-inset text-white placeholder:text-gray-400'
      />
      
      <input 
        type="date" 
        name="weddingDate"
        placeholder="Wedding Date *"
        value={formData.weddingDate || ''}
        onChange={handleChange}
        required
        className='w-full input-inset text-white placeholder:text-gray-400'
      />
      
      <input 
        type="text" 
        name="venue"
        placeholder="Wedding Venue"
        value={formData.venue || ''}
        onChange={handleChange}
        className='w-full input-inset text-white placeholder:text-gray-400'
      />
      
      <select 
        name="package"
        value={formData.package || ''}
        onChange={handleChange}
        className='w-full input-inset text-white'
      >
        <option value="">Select Package</option>
        <option value="essential">Essential Package</option>
        <option value="premium">Premium Package</option>
        <option value="luxury">Luxury Package</option>
        <option value="custom">Custom Package</option>
      </select>
      
      <textarea 
        name="message"
        placeholder="Tell us about your wedding vision, special requests, or any questions you have..."
        value={formData.message || ''}
        onChange={handleChange}
        rows="4"
        className='w-full input-inset text-white placeholder:text-gray-400 resize-none'
      />
      
      <button 
        type="submit"
        className='w-full btn-pill btn-primary h-12 sm:h-14 lg:h-16 font-[font2] text-base sm:text-xl lg:text-2xl'
      >
        Send Inquiry
      </button>
    </>
  )
}

export default ContactForm