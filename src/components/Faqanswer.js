import React, { useState } from 'react';

function Faqanswer() {
    const faqContent = [
        {
            title: "Lorem ipsum dolor sit augeu neque",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec purus ut massa hendrerit fringilla lucturs mattis diam. Integer mollis sollicitudin tincidunt."
        },
        {
            title: "Pellentesque nec purus ut massa finibus",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec purus ut massa hendreerit fringilla luctus mattis diam. Integer mollis sollicitudin tincidunt."
        },
        {
            title: "Mauris porttitor tempor orci vitae molestie",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec purus ut massa hendrerit fringilla luctus mattis diam. Integer mollis sollicitudin tincidunt."
        },
        {
            title: "Ut ultricies imperdient volutpat",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec purus ut massa hendrerit fringilla luctus mattis diam, Integer mollis sollicitudin tincidunt."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            <section id='faqContainer' >
                <div className='faq '>
                    <div className='faqImgContainer'>
                        <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/features2.jpg" alt="mobile image for faq" />
                    </div>
                    <div className='faqAnswerContent'>
                        <div className='fqsub'>FAQ</div>
                        <div className='faqTitle'>Get every answer from here.</div>
                        <div className='accordianContainer'>
                        {faqContent.map((faq, index) => (
                            <div key={index} className={`faqAccordian ${index === openIndex ? 'answerOpen' : ''}`} onClick={() => handleAccordionClick(index)}>
                                <div className='faqAnswer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className={`accordion-icon ${index === openIndex ? 'rotate-icon' : ''}`}>
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                    </svg>
                                    <div className='fqtitle'>{faq.title}</div>
                                </div>
                                <div className='fqanswer'>{faq.answer}</div>
                            </div>
                        ))}
                        </div>
                       
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Faqanswer;
