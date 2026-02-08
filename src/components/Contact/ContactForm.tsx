import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  onSuccess: () => void;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      setError("");

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      onSuccess();
      form.current.reset();
    } catch (err: unknown) {
      setError("Failed to send message. Please try again.");
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-6">
      <div className="border-b border-ddc-black has-[:user-invalid]:border-red-500 max-w-[40rem]">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          className="w-full py-1 bg-ddc-background h3-large-detail placeholder:text-[#A09999] outline-none"
        />
      </div>

      <div className="border-b border-ddc-black has-[:user-invalid]:border-red-500 max-w-[40rem]">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="w-full py-1 bg-ddc-background h3-large-detail placeholder:text-[#A09999] outline-none"
        />
      </div>

      <div className="border-b border-ddc-black has-[:user-invalid]:border-red-500 max-w-[40rem]">
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
          className="w-full py-1 bg-ddc-background h3-large-detail placeholder:text-[#A09999] outline-none"
        />
      </div>

      <div className="border-b border-ddc-black has-[:user-invalid]:border-red-500 max-w-[40rem]">
        <textarea
          id="message"
          name="message"
          placeholder="Please write your message here"
          required
          rows={6}
          className="w-full py-1 bg-ddc-background h3-large-detail placeholder:text-[#A09999] outline-none resize-none"
        />
      </div>

      <div className="flex justify-end mt-[4.06rem]">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-[50%] py-3 px-6 bg-ddc-black text-[#EFEFEF] hover:bg-ddc-highlight transition-colors disabled:opacity-50 h3-large-detail"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded h5-body">
          {error}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
