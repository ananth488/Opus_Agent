"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    type: "sales",
    message: "",
    captchaInput: "",
  });

  const [captchaText, setCaptchaText] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate random 6-character captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(code);
    setCaptchaError("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Draw captcha onto canvas with distortions & noise
  useEffect(() => {
    if (!canvasRef.current || !captchaText) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background
    ctx.fillStyle = "#f3f4f6";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid lines / noise
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(91, 99, 255, ${Math.random() * 0.4 + 0.1})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Draw characters
    ctx.font = "bold 24px monospace";
    for (let i = 0; i < captchaText.length; i++) {
      ctx.fillStyle = "#1e1b4b";
      ctx.save();
      const x = 20 + i * 24;
      const y = 32 + (Math.random() * 6 - 3);
      const angle = (Math.random() * 20 - 10) * (Math.PI / 180);
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(captchaText[i], 0, 0);
      ctx.restore();
    }
  }, [captchaText]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.captchaInput.toUpperCase() !== captchaText.toUpperCase()) {
      setCaptchaError("Incorrect security verification code. Please try again.");
      generateCaptcha();
      return;
    }

    setCaptchaError("");
    setIsSubmitted(true);
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-dark-section bg-[#0b192c] bg-gradient-to-br from-[#07111e] via-[#0c2340] to-[#05162a] pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-100 font-medium mb-8">
              Have questions about our products or services? We&apos;re here to
              help. Reach out to our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="section bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* India Office */}
            <div className="card card-hover group text-center p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-primary-400 transition-all">
              <div className="text-primary-600 mb-4 flex justify-center group-hover:text-primary-700 transition-colors">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">India</h3>
              <h5 className="text-sm font-semibold text-primary-600 mb-2 uppercase tracking-wide">
                Registered Office
              </h5>
              <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                No:G-1, Door No 4/608, V.O.C Street, Kottivakkam, Perungudi, OMR,
                Chennai 600 041.
              </p>
              <p className="text-gray-800 mb-4 font-medium">
                <a href="tel:+919790965960" className="hover:text-primary-600">
                  +91 97909 65960
                </a>
              </p>
              <a
                href="mailto:reachus@opusinfiniti.com"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                reachus@opusinfiniti.com
              </a>
            </div>

            {/* USA Office */}
            <div className="card card-hover group text-center p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-primary-400 transition-all">
              <div className="text-primary-600 mb-4 flex justify-center group-hover:text-primary-700 transition-colors">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">USA</h3>
              <h5 className="text-sm font-semibold text-primary-600 mb-2 uppercase tracking-wide">
                North America Branch
              </h5>
              <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                405 state highway 121 bypass, Suite #250, Lewisville - TX - 75067.
              </p>
              <p className="text-gray-800 mb-4 font-medium">
                <a href="tel:+19728277766" className="hover:text-primary-600">
                  +1 (972) 827-7766
                </a>
              </p>
              <a
                href="mailto:reachus@opusinfiniti.com"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                reachus@opusinfiniti.com
              </a>
            </div>

            {/* Malaysia Office */}
            <div className="card card-hover group text-center p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-primary-400 transition-all">
              <div className="text-primary-600 mb-4 flex justify-center group-hover:text-primary-700 transition-colors">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">Malaysia</h3>
              <h5 className="text-xs font-semibold text-primary-600 mb-2">
                OPUS Infiniti Services Sdn. Bhd. - (1341174-U)
              </h5>
              <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                Millennium Square, 98, Jalan 14/1, Seksyen 14, 46100 Petaling
                Jaya, Selangor, Malaysia.
              </p>
              <p className="text-gray-800 mb-4 font-medium">
                <a href="tel:+60177881710" className="hover:text-primary-600">
                  +60 17 788 1710
                </a>
              </p>
              <a
                href="mailto:anoop@opusinfiniti.com"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                anoop@opusinfiniti.com
              </a>
            </div>
          </div>

          <div id="GetStarted"></div>
        </div>
      </section>

      {/* Message Form Section */}
      <section className="section bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-900">
                Send us a Message
              </h2>
              <p className="text-lg text-gray-800 max-w-2xl mx-auto font-normal">
                Fill out the form below and our team will get back to you as soon
                as possible.
              </p>
            </div>

            {isSubmitted ? (
              <div className="card bg-white p-12 text-center rounded-2xl border border-green-200 shadow-sm">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-dark-900 mb-2">
                  Thank You for Contacting Us!
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Your message has been successfully received. One of our enterprise
                  consultants will get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      subject: "",
                      type: "sales",
                      message: "",
                      captchaInput: "",
                    });
                    generateCaptcha();
                  }}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                    >
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="investment">Investment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-800"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {/* Security Verification / Captcha */}
                <div className="mb-6 border border-gray-200 rounded-lg p-5 bg-gray-50/50">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Security Verification *
                  </label>
                  <p className="text-xs text-gray-500 mb-3">
                    Please enter the alphanumeric code shown in the image below.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">
                      <canvas
                        ref={canvasRef}
                        width={180}
                        height={50}
                        onClick={generateCaptcha}
                        className="rounded border border-gray-100 select-none cursor-pointer"
                        title="Click to generate new captcha"
                      />
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="p-2.5 text-gray-500 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors"
                        title="Refresh Captcha"
                      >
                        <RefreshCw className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex-1 min-w-[150px]">
                      <input
                        type="text"
                        required
                        name="captchaInput"
                        value={formData.captchaInput}
                        onChange={handleChange}
                        placeholder="Enter verification code"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-300 uppercase tracking-widest font-mono text-gray-800"
                      />
                    </div>
                  </div>

                  {captchaError && (
                    <div className="flex items-center gap-2 text-red-600 text-sm mt-3">
                      <AlertCircle className="w-4 h-4" />
                      <span>{captchaError}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary flex items-center justify-center gap-2 py-4 text-base font-semibold"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  We respect your privacy. Your information will only be used to
                  respond to your inquiry.
                </p>
              </form>
            )}

            <div id="faqs"></div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto font-normal">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-dark-900 mb-3">
                What is the typical implementation timeline?
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed font-normal">
                Most implementations take 3-6 months depending on complexity. We
                provide a detailed timeline during the discovery phase.
              </p>
            </div>

            <div className="card p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-dark-900 mb-3">
                Do you offer training and support?
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed font-normal">
                Yes, we provide comprehensive training, documentation, and 24/7
                support for all our products.
              </p>
            </div>

            <div className="card p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-dark-900 mb-3">
                Can your solutions integrate with existing systems?
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed font-normal">
                Absolutely. Our solutions are designed to integrate seamlessly
                with most enterprise systems.
              </p>
            </div>

            <div className="card p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-dark-900 mb-3">
                What industries do you serve?
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed font-normal">
                We serve 12+ industries including manufacturing, healthcare,
                education, retail, and more.
              </p>
            </div>

            <div className="card p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-dark-900 mb-3">
                Do you offer custom development?
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed font-normal">
                Yes, we offer custom development services tailored to your specific
                business needs.
              </p>
            </div>

            <div className="card p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-dark-900 mb-3">
                What are your pricing models?
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed font-normal">
                We offer flexible pricing including SaaS, on-premise, and hybrid
                models based on your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-dark-section bg-[#0b192c] bg-gradient-to-br from-[#07111e] via-[#0c2340] to-[#05162a] text-white py-16">
        <div className="container-custom text-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a demo with our team to see how OPUS can help you achieve
              your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/case-studies" className="btn btn-white font-semibold">
                View Case Studies
              </Link>
              <Link
                href="/domain"
                className="btn btn-outline text-white border-white hover:bg-white/10"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

