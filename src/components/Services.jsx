import React from 'react'
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Digital Marketing & Brand Growth",
    content:
      "SEO, Paid Ads, Social Media Management, and Data-Driven Campaigns. Content Creation, Video Marketing, and Performance Tracking.",
    imgsrc: "digital.png",
    isreverse: true,
  },
  {
    title: "Website & E-commerce Development",
    content:
      "Custom Web Development: WordPress, Shopify, Magento, and Headless CMS. E-commerce Optimization: UI/UX Design, Mobile Responsiveness, and Checkout Automation.",
    imgsrc: "website.png",
    isreverse: false,
  },
  {
    title: "Software Development & IT Consulting",
    content:
      "Web & Mobile App Development: Native & Cross-Platform Solutions. IT Strategy Consulting: Digital Transformation, Process Automation, and Custom Software.",
    imgsrc: "software.png",
    isreverse: true,
  },
  {
    title: "Cloud Computing & Cybersecurity",
    content:
      "Scalable Cloud Infrastructure: AWS, Azure, and Google Cloud Solutions. Data Security & Compliance: Risk Assessment, Network Protection, and Data Encryption.",
    imgsrc: "cloud.png",
    isreverse: false,
  },
  {
    title: "AI & Automation",
    content:
      "AI-Powered Chatbots, Process Automation, and Predictive Analytics. Machine Learning Integration for Personalized Customer Experiences.",
    imgsrc: "ai.png",
    isreverse: true,
  },
];


const Services = () => {
  return (
    <div id="services" className="w-full flex flex-col md:px-24 py-10 ">
      <h1 className="text-4xl mb-5 self-center text-white font-monserat font-bold">
        Our Core Services
      </h1>
     {services.map((service)=>(
       <ServiceCard {...service} />
     ))}
    </div>
  );
}

export default Services