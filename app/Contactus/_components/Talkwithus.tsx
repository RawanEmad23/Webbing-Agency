"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { api } from "@/lib/axios";


const validationSchema = Yup.object({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
  subject: Yup.string().required("Please select a subject"),
});

export default function Contactus() {


  const sendForm = async (values, { resetForm }) => {
    try {
     let req= await api.post("/contacts", { data: values });
      console.log(req);
      
   
      resetForm();
    } catch (error) {
      console.error("Error:", error);
    
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f3f7fc]">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="bg-gradient-to-r from-[#3d84a7] to-[#5e9ab8] text-white p-8 md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">Talk with us</h2>
          <p className="mb-6">
            Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="material-icons mr-2">phone</span> 01012345678
            </li>
            <li className="flex items-center">
              <span className="material-icons mr-2">email</span> demo@gmail.com
            </li>
            <li className="flex items-center">
              <span className="material-icons mr-2">location_on</span> 81 Mohamed Mqld, Nasr City
            </li>
          </ul>
        </div>

      
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
            subject: "",
          }}
          validationSchema={validationSchema}
          onSubmit={sendForm}
        >
          {({ isSubmitting }) => (
            <Form className="p-8 md:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold text-[#1f7099] mb-2">First Name</label>
                  <Field
                    type="text"
                    name="firstname"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Rawan"
                  />
                  <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className="block font-bold text-[#1f7099] mb-2">Last Name</label>
                  <Field
                    type="text"
                    name="lastname"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Emad"
                  />
                  <ErrorMessage name="lastname" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className="block font-bold text-[#1f7099] mb-2">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className="block font-bold text-[#1f7099] mb-2">Phone Number</label>
                  <Field
                    type="tel"
                    name="phone"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="0123456789"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                </div>
              </div>

              <div className="mt-6">
                <label className="block font-bold text-[#1f7099] mb-2">Select Subject?</label>
                <div className="flex flex-wrap gap-4">
                  {["General Inquiry", "New Project", "Customer Service", "Technical Issue"].map(
                    (subject) => (
                      <label key={subject} className="flex items-center">
                        <Field type="radio" name="subject" value={subject} className="mr-2" />
                        {subject}
                      </label>
                    )
                  )}
                </div>
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mt-6">
                <label className="block font-bold text-[#1f7099] mb-2">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  className="w-full border border-gray-300 p-2 rounded"
                  rows="4"
                  placeholder="Write your message..."
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#1f7099] hover:bg-[#14597b] text-white px-6 py-2 rounded"
                
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
           
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
