import ContactComponent from '@/components/Contact/contactcomponent'
import QuoteCOontact from '@/components/Contact/quote'
import Response from '@/components/Contact/responseform'
import Question from '@/components/Contact/section1'
import React from 'react'

const Contact = () => {
  return (
    <>
     <Question/>
     <QuoteCOontact/>
     <Response/>
     <ContactComponent/>
    </>
  )
}

export default Contact
