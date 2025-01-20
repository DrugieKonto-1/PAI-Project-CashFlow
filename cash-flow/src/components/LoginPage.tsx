import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/Login-animation.json";
import "../mocks/HomePage.css";
import { doSignInWithEmailAndPassword } from "../firebase/auth.js";
import { useUser } from "../Context/UserContext.tsx";

// interfejsy
interface FormData {
  email: string;
  password: string;
}

interface ValidationErrors {
  email?: string;
  password?: string;
  phonenumber?: string;
  name?: string;
}

export const LoginPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const navigate = useNavigate();
  const { setUserData } = useUser();

  const validate = (): ValidationErrors => {
    const newErrors: ValidationErrors = {};
    // Weryfikacja danych
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

    return newErrors;
  };
  // Obsluga danych
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        // Próba logowania w Firebase
        const userData = await doSignInWithEmailAndPassword(formData.email, formData.password);

        alert("Zalogowano pomyślnie");
        setUserData({ name: "Imię", lastname: "Nazwisko" });
        navigate("/");
      } catch (error) {
        setErrors({ email: "Nieprawidłowe dane logowania." });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <Link to="/" className="back-link">Back</Link>
    </div>
  );
};