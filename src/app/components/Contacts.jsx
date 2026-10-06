"use client";
import { useState } from "react";
import { FiArrowUpRight, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";

const RECIPIENT = "info@futuretouch.in";
const ENDPOINT = "https://sendingmail-6znv.onrender.com/sendmail";

const emptyForm = {
  S_name: "",
  S_email: "",
  S_phone: "",
  new_url: "",
  message: "",
};

const fields = [
  { name: "S_name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "S_email", label: "Email address", type: "email", autoComplete: "email" },
  { name: "S_phone", label: "Phone (10 digits)", type: "tel", autoComplete: "tel" },
  { name: "new_url", label: "Website", type: "text", autoComplete: "url" },
];

const validate = (data) => {
  if (!data.S_name.trim()) return "Name is required.";
  if (!/\S+@\S+\.\S+/.test(data.S_email)) return "A valid email is required.";
  if (!/^\d{10}$/.test(data.S_phone.trim())) return "A valid 10-digit phone number is required.";
  if (!data.new_url.trim()) return "Website URL is required.";
  if (!data.message.trim()) return "Message cannot be empty.";
  return null;
};

const inputClass =
  "peer w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 pb-2.5 pt-6 text-sm text-white placeholder-transparent outline-none transition focus:border-brand-pink/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-brand-pink/10";

const labelClass =
  "pointer-events-none absolute left-4 top-2 text-[11px] font-medium uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-brand-pink";

const ContactArea = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate(formData);
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setStatus({ type: "loading", message: "" });
    const body = new URLSearchParams({ ...formData, userEmailsir: RECIPIENT });

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus({ type: "success", message: "Thanks! We'll get back to you shortly." });
      setFormData(emptyForm);
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  };

  const loading = status.type === "loading";

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="glow -right-24 -top-24 h-56 w-56 bg-brand-pink/25" />

      <div className="relative">
        <span className="eyebrow">Contact us</span>
        <h2 className="mt-5 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
          Book an online appointment for <span className="text-gradient">business planning</span>
        </h2>
        <p className="mt-3 text-sm text-slate-400">Tell us about your project — we reply within one business day.</p>

        <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-4 sm:grid-cols-2">
          {fields.map((f) => (
            <div key={f.name} className="relative">
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                autoComplete={f.autoComplete}
                placeholder={f.label}
                value={formData[f.name]}
                onChange={handleChange}
                className={inputClass}
              />
              <label htmlFor={f.name} className={labelClass}>
                {f.label}
              </label>
            </div>
          ))}

          <div className="relative sm:col-span-2">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
            <label htmlFor="message" className={labelClass}>
              Your message
            </label>
          </div>

          <div className="sm:col-span-2">
            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70">
              {loading ? (
                <>
                  <FiLoader className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send message <FiArrowUpRight />
                </>
              )}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`mt-4 flex items-center gap-2 text-sm ${
                status.type === "success" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {status.type === "success" && <FiCheckCircle />}
              {status.type === "error" && <FiAlertCircle />}
              {status.message}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactArea;
