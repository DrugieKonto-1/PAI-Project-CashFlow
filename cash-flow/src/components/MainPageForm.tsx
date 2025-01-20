import { useState, FormEvent, ChangeEvent } from 'react';
// interfejsy
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const MainPageForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) { //Weryfikacja/Walidacja
      newErrors.email = "Valid email is required.";
    }
    if (!formData.message) newErrors.message = "Message cannot be empty.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <section id="contact" className="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h4>Name: </h4>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <br />

          <h4>Email: </h4>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <br />

          <h4>Message: </h4>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
          <br />
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </section>
  );
};
