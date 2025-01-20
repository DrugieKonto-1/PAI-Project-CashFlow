import { useState, FormEvent } from "react";
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";
import animationData from '../assets/Login-animation.json';
import '../mocks/HomePage.css';

// Interfejsy
interface FormData {
  email: string;
  password: string;
  phonenumber: string;
  name: string;
  gender: string;
}

interface ValidationErrors {
  email?: string;
  password?: string;
  phonenumber?: string;
  name?: string;
  gender?: string;
}

export const RegisterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    phonenumber: "",
    name: "",
    gender: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  // Weryfikacja danych
  const validate = (): ValidationErrors => {
    const newErrors: ValidationErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!formData.phonenumber.trim()) {
      newErrors.phonenumber = "Phone number is required.";
    } else if (!/^\d{9}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = "Phone number must be 9 digits.";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name and surname are required.";
    }

    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required.";
    }

    return newErrors;
  };

  // Obsługa formularza
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully:", formData);

      // Reset forma
      setFormData({
        email: "",
        password: "",
        phonenumber: "",
        name: "",
        gender: "",
      });

      // Logika Rejestracji
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container-form">
      <Lottie 
        animationData={animationData}
        style={{ width: 400, height: 400 }}
      />
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input type="email" name="email" placeholder="Email..." value={formData.email} onChange={handleChange}/>
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="input-field">
          <input type="password" name="password" placeholder="Password..." value={formData.password} onChange={handleChange}/>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <div className="input-field">
          <input type="text" name="phonenumber" placeholder="Phone Number..." value={formData.phonenumber} onChange={handleChange}/>
          {errors.phonenumber && <p className="error-message">{errors.phonenumber}</p>}
        </div>
        <div className="input-field">
          <input type="text" name="name" placeholder="Name and Surname..." value={formData.name} onChange={handleChange}/>
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="input-field">
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="error-message">{errors.gender}</p>}
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
      <Link to="/" className="back-link">Back</Link>
    </div>
  );
};