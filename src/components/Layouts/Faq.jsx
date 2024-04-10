import React, { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    const acc = document.querySelectorAll(".accordion");

    const toggleAccordion = (event) => {
      const panel = event.target.nextElementSibling;
      event.target.classList.toggle("active");

      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    };

    acc.forEach((button) => {
      button.addEventListener("click", toggleAccordion);
    });

    // Cleanup
    return () => {
      acc.forEach((button) => {
        button.removeEventListener("click", toggleAccordion);
      });
    };
  }, []);

  return (
    <>
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <section className="faq-container">
        <div className="faq-border">
          <div className="accordion">How does EClean work?</div>
          <div className="panel">
            <p>
              Using the EClean app, users can easily sort their recyclable
              materials, indicate the type and quantity, and schedule a pick-up
              or drop-off. Our team will then collect the materials, process
              them responsibly, and ensure they are recycled or disposed of
              properly
            </p>
          </div>
        </div>

        <div className="accordion">Section 2</div>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>

        <div className="accordion">Section 3</div>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>
      </section>
    </>
  );
};

export default Faq;
