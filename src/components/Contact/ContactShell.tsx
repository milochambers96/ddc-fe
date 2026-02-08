import { useRef, useState } from "react";
import ContactForm from "./ContactForm";

const ContactShell = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const formIntro: string =
    "For any enquiries on available pieces, upcoming shows, speaking requests, and more - please fill out the contact form.";

  return (
    <main className="mt-[6rem]">
      {!isSuccess && (
        <div className="flex justify-center gap-x-[8rem] items-start max-w-[81.25rem] mx-auto">
          <section className="flex flex-col gap-y-4 flex-1 text-justify">
            <h4 className="h4-bold-header">{formIntro}</h4>
            <h4 className="h4-bold-header">
              I am also on Instagram, where you can follow me{" "}
              <a
                href="https://www.instagram.com/denisedecordova1/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ddc-highlight underline"
              >
                here
              </a>
              .
            </h4>
          </section>
          <section className="flex-shrink-0 w-[40rem]">
            <ContactForm onSuccess={() => setIsSuccess(true)} />
          </section>{" "}
        </div>
      )}
      {isSuccess && (
        <div className="flex justify-center items-center">
          <article className="text-center space-y-6">
            <p className="h3-large-detail">
              Thank you for your enquiry! I endeavour to reply soon.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="py-3 px-6 bg-ddc-text text-white hover:bg-ddc-text/90 transition-colors h5-body uppercase"
            >
              Back home
            </button>
          </article>
        </div>
      )}
    </main>
  );
};

export default ContactShell;
