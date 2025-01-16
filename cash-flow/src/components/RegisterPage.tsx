import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
  phonenumber: string;
  name: string;
}

interface ValidationErrors {
  email?: string;
  password?: string;
  phonenumber?: string;
  name?: string;
}

export const RegisterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    phonenumber: "",
    name: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

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

    return newErrors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully:", formData);

      setFormData({
        email: "",
        password: "",
        phonenumber: "",
        name: "",
      });

      // logika rejestracji dalej(Jakies przeslanie do API albo do db)
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
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" name="email" placeholder="Email..." value={formData.email} onChange={handleChange}/>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <input type="password" name="password" placeholder="Password..." value={formData.password} onChange={handleChange}/>
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <div>
          <input type="text" name="phonenumber" placeholder="Phone Number..." value={formData.phonenumber} onChange={handleChange}/>
          {errors.phonenumber && (
            <p style={{ color: "red" }}>{errors.phonenumber}</p>
          )}
        </div>
        <div>
          <input type="text" name="name" placeholder="Name and Surname..." value={formData.name} onChange={handleChange}/>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Powrót</Link>
    </>
  );
};
