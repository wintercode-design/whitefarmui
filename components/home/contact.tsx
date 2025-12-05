"use client";
import { AtSign, MapPin, Phone } from "lucide-react";
import React, { useRef, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  function isEmail(email: string) {
    return /^[\w-.+]+@[\w-]+\.[a-z]{2,}$/i.test(email);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    if (!email.trim() || !isEmail(email))
      newErrors.email = "Valid email is required";
    if (!subject.trim()) newErrors.subject = "Subject is required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      // focus first invalid
      const firstKey = Object.keys(newErrors)[0];
      const el = formRef.current?.querySelector(
        `[name="${firstKey}"]`
      ) as HTMLElement | null;
      el?.focus();
      return;
    }

    setSubmitting(true);

    // Build mailto link — note: attachments can't be sent through mailto.
    const bodyParts = [] as string[];
    bodyParts.push(`Name: ${name}`);
    bodyParts.push(`Phone: ${phone}`);
    bodyParts.push(`Email: ${email}`);
    bodyParts.push(`Subject: ${subject}`);
    if (url.trim()) bodyParts.push(`URL: ${url}`);
    if (message.trim()) bodyParts.push(`\nMessage:\n${message}`);

    const body = encodeURIComponent(bodyParts.join("\n"));
    const mailto = `mailto:agokengmelanie@gmail.com ?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    // Open the user's mail client with content prefilled
    window.location.href = mailto;

    setTimeout(() => setSubmitting(false), 500);
  }

  return (
    <div
      className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center"
      id="contact"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-32 w-full max-w-7xl"
      >
        <div className="flex flex-col gap-4 w-full md:max-w-[1000px] h-fit p-4">
          <header className="flex justify-between items-end">
            <div className="flex flex-col gap-2 justify-start max-w-xl">
              <h4 className="border-b w-[150px] p-1">Contact</h4>
              <h2 className=" uppercase font-bold">Contactez-nous</h2>
            </div>
          </header>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="p-2 bg-[#c4c4c4] outline-none text-white w-full"
                />
                {errors.name && (
                  <div className="text-sm text-rose-400 mt-1">
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email@gmail.com"
                  className="p-2 bg-[#c4c4c4] outline-none text-white w-full"
                />
                {errors.email && (
                  <div className="text-sm text-rose-400 mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="+2375644902"
                  className="p-2 bg-[#c4c4c4] outline-none text-white w-full"
                />
                {errors.phone && (
                  <div className="text-sm text-rose-400 mt-1">
                    {errors.phone}
                  </div>
                )}
              </div>

              <div>
                <input
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="subject"
                  className="p-2 bg-[#c4c4c4] outline-none text-white w-full"
                />
                {errors.subject && (
                  <div className="text-sm text-rose-400 mt-1">
                    {errors.subject}
                  </div>
                )}
              </div>

              <input
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="url"
                placeholder="https://anylink.com"
                className="p-2 col-span-2 bg-[#c4c4c4] outline-none text-white w-full"
              />
            </div>

            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Content here"
              className="p-2 bg-[#c4c4c4] outline-none text-white min-h-[200px] w-full"
            />

            <div className="flex gap-4 w-full">
              <button
                disabled={submitting}
                type="submit"
                className="px-10 py-2 w-full bg-[#0F6935] text-white"
              >
                {submitting ? "Opening mail client..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setPhone("");
                  setSubject("");
                  setUrl("");
                  setMessage("");
                  setFiles(null);
                  setErrors({});
                }}
                className="px-10 py-2 w-full outline-1 outline-[#0F6935] text-[#0F6935]"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center h-full p-8 md:p-12 md:gap-8 gap-4 w-full max-w-[500px]">
          <img
            src="/boutique/boutique.jpeg"
            className="w-full h-[400px] object-cover"
            alt="silver"
          />
          <div className="grid gap-4">
            <div className="flex gap-2">
              <Phone />
              <a href="tel:+237696636639" className="text-lg font-light">
                +237696636639
              </a>
              <a href="tel:+237679683512" className="text-lg font-light">
                +237679683512
              </a>
            </div>
            <div className="flex gap-2">
              <AtSign />
              <a
                href="mailto:agokengmelanie@gmail.com "
                className="text-lg font-light"
              >
                agokengmelanie@gmail.com
              </a>
            </div>
            <div className="flex gap-2">
              <MapPin />
              <a href="" className="text-lg font-light">
                Douala Cameroon
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
