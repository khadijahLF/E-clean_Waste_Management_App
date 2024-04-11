import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';

function Faq() {
  return (
    <AccordionGroup
      sx={{
        maxWidth: 400,
        [`& .${accordionSummaryClasses.indicator}`]: {
          transition: '0.2s',
        },
        [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
          transform: 'rotate(45deg)',
        },
      }}
    >
      <div className="faq-h">
        <h3 className="faq-heading">Frequently Asked Questions</h3>
        </div>
      <section className="faq-container">
        
      <Accordion>
        <AccordionSummary indicator={<AddIcon />} className="accordion-summary">How does EClean work?</AccordionSummary>
        <AccordionDetails className="accordion-details">
        Using the EClean app, users can easily sort their recyclable materials, indicate the type and quantity, and schedule a pick-up or drop-off. Our team will then collect the materials, process them responsibly, and ensure they are recycled or disposed of properly
        </AccordionDetails>
      </Accordion><br />
      <Accordion>
        <AccordionSummary indicator={<AddIcon />} className="accordion-summary">What types of materials does EClean accept?</AccordionSummary>
        <AccordionDetails className="accordion-details">
        Using the EClean app, users can easily sort their recyclable materials, indicate the type and quantity, and schedule a pick-up or drop-off. Our team will then collect the materials, process them responsibly, and ensure they are recycled or disposed of properly
        </AccordionDetails>
      </Accordion><br />
      <Accordion>
        <AccordionSummary indicator={<AddIcon />} className="accordion-summary">How do I schedule a pick-up or drop-off?</AccordionSummary>
        <AccordionDetails className="accordion-details">
        Using the EClean app, users can easily sort their recyclable materials, indicate the type and quantity, and schedule a pick-up or drop-off. Our team will then collect the materials, process them responsibly, and ensure they are recycled or disposed of properly
        </AccordionDetails>
      </Accordion><br />
      <Accordion>
        <AccordionSummary indicator={<AddIcon />} className="accordion-summary">How do I get paid for my recyclables?</AccordionSummary>
        <AccordionDetails className="accordion-details">
        Using the EClean app, users can easily sort their recyclable materials, indicate the type and quantity, and schedule a pick-up or drop-off. Our team will then collect the materials, process them responsibly, and ensure they are recycled or disposed of properly
        </AccordionDetails>
      </Accordion><br />
      <Accordion>
        <AccordionSummary indicator={<AddIcon />} className="accordion-summary">Is EClean available in my area?</AccordionSummary>
        <AccordionDetails className="accordion-details">
        Using the EClean app, users can easily sort their recyclable materials, indicate the type and quantity, and schedule a pick-up or drop-off. Our team will then collect the materials, process them responsibly, and ensure they are recycled or disposed of properly
        </AccordionDetails>
      </Accordion><br />
      <Accordion>
        <AccordionSummary indicator={<AddIcon />} className="accordion-summary">What are the benefits of using EClean?</AccordionSummary>
        <AccordionDetails className="accordion-details">
        Using the EClean app, users can easily sort their recyclable materials, indicate the type and quantity, and schedule a pick-up or drop-off. Our team will then collect the materials, process them responsibly, and ensure they are recycled or disposed of properly
        </AccordionDetails>
      </Accordion>
      </section>
    </AccordionGroup>
  );
}
export default Faq




















// import React, { useEffect } from "react";

// const Faq = () => {
//   useEffect(() => {
//     const acc = document.querySelectorAll(".accordion");

//     const toggleAccordion = (event) => {
//       const panel = event.target.nextElementSibling;
//       event.target.classList.toggle("active");

//       if (panel.style.display === "block") {
//         panel.style.display = "none";
//       } else {
//         panel.style.display = "block";
//       }
//     };

//     acc.forEach((button) => {
//       button.addEventListener("click", toggleAccordion);
//     });

//     // Cleanup
//     return () => {
//       acc.forEach((button) => {
//         button.removeEventListener("click", toggleAccordion);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <h2 className="faq-heading">Frequently Asked Questions</h2>
//       <section className="faq-container">
//         <div className="faq-border">
//           <div className="accordion">How does EClean work?</div>
//           <div className="panel">
//             <p>
//               Using the EClean app, users can easily sort their recyclable
//               materials, indicate the type and quantity, and schedule a pick-up
//               or drop-off. Our team will then collect the materials, process
//               them responsibly, and ensure they are recycled or disposed of
//               properly
//             </p>
//           </div>
//         </div>

//         <div className="accordion">Section 2</div>
//         <div className="panel">
//           <p>Lorem ipsum...</p>
//         </div>

//         <div className="accordion">Section 3</div>
//         <div className="panel">
//           <p>Lorem ipsum...</p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Faq;
