import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface LeadCaptureFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadCaptureForm({ isOpen, onClose }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with your actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds and close
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
      });
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-card border border-border rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Close form"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="gold-rule" />
                  <span className="eyebrow">Cohort 07 Application</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl mb-4">
                  Apply for the Program
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with next steps.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 tracking-wide"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 tracking-wide"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 tracking-wide"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Experience Level */}
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium mb-2 tracking-wide"
                  >
                    Editing Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  >
                    <option value="">Select your experience level</option>
                    <option value="complete-beginner">Complete Beginner</option>
                    <option value="some-experience">Some Experience (1-6 months)</option>
                    <option value="intermediate">Intermediate (6-12 months)</option>
                    <option value="experienced">Experienced (1+ years)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 tracking-wide"
                  >
                    Why do you want to join? (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                    placeholder="Tell us about your goals and what you hope to achieve..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-3 bg-navy text-navy-foreground px-10 py-5 text-sm tracking-[0.18em] uppercase hover:bg-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    {!isSubmitting && (
                      <span className="w-4 h-px bg-gold transition-all duration-300 group-hover:w-8" />
                    )}
                  </button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by IconsBase regarding the program.
                </p>
              </form>
            </>
          ) : (
            // Success Message
            <div className="py-16 text-center">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                <CheckCircle2 className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-display text-4xl mb-4">Application Received!</h3>
              <p className="text-lg text-muted-foreground max-w-md mx-auto mb-6">
                Thank you for applying to Cohort 07, <span className="text-foreground font-medium">{formData.name}</span>.
              </p>
              <div className="bg-background border border-border rounded-lg p-6 max-w-md mx-auto">
                <p className="text-sm text-muted-foreground mb-4">What happens next?</p>
                <ul className="space-y-3 text-sm text-left">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span>We'll review your application within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span>You'll receive an email at <span className="text-foreground">{formData.email}</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span>Selected candidates will be invited for a brief interview</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                Check your spam folder if you don't see our email.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ----------------------- INLINE APPLICATION FORM SECTION ----------------------- */
export function ApplicationFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with your actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="application-form" className="py-32 md:py-40 bg-navy text-navy-foreground">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="lg:col-span-5" data-reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold">Apply Now</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6">
              Ready to start your editing career?
            </h2>
            <p className="text-navy-foreground/70 text-lg mb-8">
              Fill out the application form and take the first step toward a structured video editing career with guaranteed internship and job placement.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-gold font-display">01</span>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Quick Review</h3>
                  <p className="text-sm text-navy-foreground/60">We review all applications within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-gold font-display">02</span>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Selection Process</h3>
                  <p className="text-sm text-navy-foreground/60">Selected candidates receive interview invitations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-gold font-display">03</span>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Start Learning</h3>
                  <p className="text-sm text-navy-foreground/60">Join Cohort 07 and begin your transformation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7" data-reveal>
            {!isSubmitted ? (
              <div className="bg-card text-foreground rounded-lg border border-border p-8 md:p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="inline-name"
                      className="block text-sm font-medium mb-2 tracking-wide"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="inline-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email & Phone in Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="inline-email"
                        className="block text-sm font-medium mb-2 tracking-wide"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="inline-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inline-phone"
                        className="block text-sm font-medium mb-2 tracking-wide"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="inline-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label
                      htmlFor="inline-experience"
                      className="block text-sm font-medium mb-2 tracking-wide"
                    >
                      Editing Experience *
                    </label>
                    <select
                      id="inline-experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    >
                      <option value="">Select your experience level</option>
                      <option value="complete-beginner">Complete Beginner</option>
                      <option value="some-experience">Some Experience (1-6 months)</option>
                      <option value="intermediate">Intermediate (6-12 months)</option>
                      <option value="experienced">Experienced (1+ years)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="inline-message"
                      className="block text-sm font-medium mb-2 tracking-wide"
                    >
                      Why do you want to join? (Optional)
                    </label>
                    <textarea
                      id="inline-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                      placeholder="Tell us about your goals and what you hope to achieve..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-3 bg-navy text-navy-foreground px-10 py-5 text-sm tracking-[0.18em] uppercase hover:bg-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting Application..." : "Submit Application"}
                      {!isSubmitting && (
                        <span className="w-4 h-px bg-gold transition-all duration-300 group-hover:w-8" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by IconsBase regarding the program.
                  </p>
                </form>
              </div>
            ) : (
              // Success Message
              <div className="bg-card text-foreground rounded-lg border border-gold/50 p-10 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                    <CheckCircle2 className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="font-display text-4xl mb-4">Application Received!</h3>
                  <p className="text-lg text-muted-foreground mb-2">
                    Thank you for applying, <span className="text-foreground font-medium">{formData.name}</span>!
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    We've sent a confirmation to <span className="text-foreground">{formData.email}</span>
                  </p>

                  <div className="bg-background border border-border rounded-lg p-6 mb-6">
                    <p className="text-sm font-medium mb-4">What happens next?</p>
                    <ul className="space-y-3 text-sm text-left">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        <span>Application review within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        <span>Email notification with next steps</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        <span>Interview invitation for selected candidates</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Check your spam folder if you don't see our email. Questions? Contact us at <span className="text-foreground">hello@iconsbase.com</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


