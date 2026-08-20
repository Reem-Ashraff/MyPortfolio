import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
    // emailjs.init("Qql56KKayAZ7N5Eub")

    const formRef = useRef(null);

    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({
        name: "",
        subject: "",
        email: "",
        message: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const validation = () => {
        let newErrors = {}

        if (form.name == "") {
            newErrors.name = "Name is required"
        }
        if (form.subject == "") {
            newErrors.subject = "Subject is required"
        }
        if (form.email == "") {
            newErrors.email = "Email is required"
        }

        if (form.message == "") {
            newErrors.message = "Message is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        const isValid = validation();
        if (isValid) {
            emailjs
                .sendForm(
                    "service_kjp481f",
                    "template_mtom7s8",
                    formRef.current,
                    {
                        publicKey: "Qql56KKayAZ7N5Eub",
                    }
                )
                .then(
                    () => {
                        setLoading(false);
                        setSent(true);

                        e.target.reset();

                        setTimeout(() => {
                            setSent(false);
                        }, 10000);
                    },
                    (error) => {
                        console.log("FAILED...", error);
                        setLoading(false);
                    }
                );
        }
        else {
            e.preventDefault();
            setLoading(false);
            setSent(false);
            setMsg("Enter all required data!")
        }

    };
    return (
        <>
            <section className="contact-section content">
                <div className="d-flex flex-wrap">
                    <div className="col-12 col-lg-5 contact-div">
                        <div className="contact-head">
                            <h3 className="mb-0">Get In Touch</h3>
                            <div className="line">________</div>
                        </div>
                        <p className="contact-description">
                            I'm open to new opportunities and collaborations.<br />
                            Feel free to reach out!
                        </p>
                        <div className="personal-info">
                            <div className="info-item d-flex align-items-center">
                                <i className="bi bi-envelope"></i>
                                <div>
                                    <span>Email</span>
                                    <p className="mb-0">reemashraff7@gmail.com</p>
                                </div>
                            </div>
                            <div className="info-item d-flex align-items-center">
                                <i className="bi bi-telephone"></i>
                                <div>
                                    <span>Phone</span>
                                    <p className="mb-0">+20 109 073 8742</p>
                                </div>
                            </div>
                            <div className="info-item d-flex align-items-center">
                                <i className="bi bi-geo-alt"></i>
                                <div>
                                    <span>Location</span>
                                    <p className="mb-0">Cairo, Egypt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 d-flex justify-content-end mt-3 mt-md-0 contact-div">
                        <form onSubmit={(e)=>sendEmail(e)} ref={formRef} className="d-flex flex-column">
                            <div className="d-flex justify-content-between">
                                <input type="text" name="name" placeholder="Your Name" className="input width" value={form.name} onChange={(e) => handleChange(e)} />
                                <input type="email" name="email" placeholder="Your Email" className="input width" value={form.email} onChange={(e) => handleChange(e)} />
                            </div>
                            <input type="text" name="subject" placeholder="Subject" className="input" value={form.subject} onChange={(e) => handleChange(e)}/>
                            <textarea name="message" rows={6} placeholder="Message" className="input" value={form.message} onChange={(e) => handleChange(e)}></textarea>
                            <button type="submit" disabled={loading} className="submit"><i className="bi bi-send"></i>
                                {loading
                                    ? "Sending..."
                                    : "Send Message"
                                }
                            </button>
                            {sent && (
                                <p className="success-message mb-0">
                                    <i className="bi bi-check-circle"></i>
                                    Your message has been sent successfully!
                                </p>
                            )}
                            {!sent && (
                                <p className="success-message mb-0">
                                    {msg}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;