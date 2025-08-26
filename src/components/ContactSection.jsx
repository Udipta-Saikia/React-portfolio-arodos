import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import ContactForm from "./contact"

export const ContactSection = () => {
  return (
    <section id="contact" className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-primary'>Touch</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Want to chat or collaborate?
          I’m always open to mentorship and exploring new opportunities—feel free to reach out!
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

            <div className='space-y-6 justify-center'>
              <div className="flex items-start space-x-4">
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary'/>
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <a href="mailto:udiptasaikia21@outlook.com" className='text-muted-foreground hover:text-primary transition-colors'>
                    udiptasaikia21@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary'/>
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <a href="tel:+917099412649" className='text-muted-foreground hover:text-primary transition-colors'>
                    +91-70994-12649
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary'/>
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <p className='text-muted-foreground'>Guwahati, Assam, IN</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/udipta-dev-saikia-545a99222/" target='_blank' rel="noreferrer">
                  <Linkedin className='h-6 w-6 text-primary hover:text-primary/80 transition-colors'/>
                </a>
                 <a href="https://www.github.com/udipta-saikia" target='_blank' rel="noreferrer">
                  <Github className='h-6 w-6 text-primary hover:text-primary/80 transition-colors'/>
                </a>
                <a href="https://www.instagram.com/udiptasaaikia/" target='_blank' rel="noreferrer">
                  <Instagram className='h-6 w-6 text-primary hover:text-primary/80 transition-colors'/>
                </a>
              </div>
              
                    <div className="relative pt-8 px-4 sm:px-8 md:px-20 flex justify-center md:justify-center animate-fadein-float scale-100">
                          <img 
                            src="/assets/img/Photo.png" 
                            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-full border-2 border-primary shadow-lg" 
                            alt="pfp" 
                          />
                    </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-card shadow-xs rounded-lg p-8'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
