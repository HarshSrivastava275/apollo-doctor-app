// components/faq/FAQSection.js
import { useState } from "react";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  // Q&A Data
  const faqs = [
    {
      question: "What is an online doctor consultation?",
      answer:
        "An online doctor consultation allows you to consult with a doctor via video call, phone, or chat, without needing to visit a clinic in person. It’s convenient for non-emergency medical advice, follow-ups, and prescriptions.",
    },
    {
      question: "How do I book an online consultation?",
      answer:
        "You can book an online consultation by selecting a doctor from the list, clicking 'Visit Doctor,' and following the booking instructions. You may need to provide your details and select a time slot.",
    },
    {
      question: "Are online consultations safe and private?",
      answer:
        "Yes, online consultations are safe and private. Platforms use secure, encrypted connections to protect your personal and medical information, ensuring confidentiality.",
    },
    {
      question: "What types of doctors can I consult online?",
      answer:
        "You can consult a wide range of doctors online, including general physicians, specialists like cardiologists, dermatologists, pediatricians, and more, depending on the platform's offerings.",
    },
  ];

  // Toggle function for Q&A
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div style={{ padding: "40px "}}>
      <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        FAQs
      </h2>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #ccc",
              padding: "10px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => toggleQuestion(index)}
            >
              <h3 style={{ fontSize: 18, margin: 0 }}>{faq.question}</h3>
              <span>{openQuestion === index ? "−" : "+"}</span>
            </div>
            {openQuestion === index && (
              <p style={{ margin: "10px 0 0 0", color: "#6a737d" }}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;