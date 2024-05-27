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
        
      <div className="left-side">
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
      </Accordion>
        </div> <br />

        <div className="right-side">
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
        </div>
      
      </section>
    </AccordionGroup>
  );
}
export default Faq
