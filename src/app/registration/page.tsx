"use client";
import React, { useState, useEffect, use } from "react";
import styles from "./RegistrationPage.module.css";

export default function RegistrationPage() {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [errors, setErrors] = useState({
        fullName: "",
        phone: "",
        email: "",
        birthdate: "",
    });

    useEffect(() => {
        const newErrors = { ...errors };

        if (fullName.trim() === "") {
            newErrors.fullName = "";
        }
        else {
            const nameParts = fullName.trim().split(" ");
            if (nameParts.length < 2) {
                newErrors.fullName = "Please enter your full name.";
            } else if (nameParts.some(part => /^\d/.test(part))) {
                newErrors.fullName = "Name cannot begin with numbers.";
            }
            else {
                newErrors.fullName = "";
            }
        }

        if (phone === "") {
            newErrors.phone = "";
        } else if (!/^\+972-?\d{1,2}-?\d{7,8}$/.test(phone)) {
            newErrors.phone = "Please enter a valid Israeli phone number.";
        } else {
            newErrors.phone = "";
        }

        if (email === "") {
            newErrors.email = "";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        } else {
            newErrors.email = "";
        }

        if (birthdate === "") {
            newErrors.birthdate = "";
        } else {
            const birthDateObj = new Date(birthdate);
            const today = new Date();
            const age = today.getFullYear() - birthDateObj.getFullYear();
            const monthDiff = today.getMonth() - birthDateObj.getMonth();
            const dayDiff = today.getDate() - birthDateObj.getDate();

            if (
                age < 18 ||
                (age === 18 && monthDiff < 0) ||
                (age === 18 && monthDiff === 0 && dayDiff < 0)
            ) {
                newErrors.birthdate = "You must be at least 18 years old.";
            } else {
                newErrors.birthdate = "";
            }
        }

        setErrors(newErrors);
    }, [fullName, phone, email, birthdate]);



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!errors.fullName && !errors.phone && !errors.email && !errors.birthdate) {
            // If there are no errors, submit the form
            alert("Form submitted successfully!");
        }
        else {
            alert("Please fix the errors in the form before submitting.");
        }
        // Submit the form
    };

    return (
        <main className={styles.pageContent}>
            <h1 className={styles.title}>Registration Page</h1>
            <form className={styles.registrationForm} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                    />
                    {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
                </div>
                <div className={styles.field}>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                    />
                    {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>
                <div className={styles.field}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
                <div className={styles.field}>
                    <label>Birthdate:</label>
                    <input
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                    {errors.birthdate && <span className={styles.error}>{errors.birthdate}</span>}
                </div>

                <button type="submit" className={styles.submit}>Register</button>
            </form>
        </main>
    );
};
