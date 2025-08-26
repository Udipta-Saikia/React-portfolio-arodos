// src/components/ContactForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { contactSubmit } from "../api";
import { Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [success, setSuccess] = React.useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    console.log("Form Submitted:", data);
    try {
      await contactSubmit(data);
      setSuccess("Ty :D Message sent successfully!");
      reset();

      // Auto-hide success after 4s
      setTimeout(() => setSuccess(null), 4000);
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-primary-foreground">
        <h3 className="text-2xl font-semibold">Send a Message</h3>
      </div>
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Your Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="John Trump"
          className="w-full px-4 py-3 rounded-md border border-input bg-background 
          focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Your Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          })}
          placeholder="john@gmail.com"
          className="w-full px-4 py-3 rounded-md border border-input bg-background 
          focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1">Your Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Hello, I'd like to talk about..."
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-input bg-background 
          focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Success Message */}
      {success && (
        <p className="text-green-500 text-sm text-center">{success}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className=" cosmic-button w-full flex items-center justify-center gap-2
        hover:bg-primary/90 transition-colors duration-300"
      >
        {isSubmitting ? "Sending..." : "Send Message"}<Send size={16}/>
      </button>
    </form>
  );
};

export default ContactForm;
