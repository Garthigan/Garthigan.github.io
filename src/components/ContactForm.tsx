import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ─── EmailJS config ───────────────────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free — 200 emails/month)
// 2. Add an Email Service (Gmail) and note the Service ID
// 3. Create an Email Template with variables:
//    {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    Set "To Email" in the template to garthidata@gmail.com
// 4. Copy your Public Key from Account → API Keys
// 5. Replace the three placeholder strings below with your real values

const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "abcDEFghiJKL..."

// ─────────────────────────────────────────────────────────────────────────────

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Guard: if still using placeholders, warn and bail
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      toast({
        title: "EmailJS not configured",
        description:
          "Please replace the placeholder IDs in ContactForm.tsx with your real EmailJS credentials.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message sent!",
        description: "Thank you — I'll get back to you soon.",
      });
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="from_name"
        placeholder="Your Name"
        value={formData.from_name}
        onChange={handleChange}
        required
      />
      <Input
        name="from_email"
        type="email"
        placeholder="Your Email"
        value={formData.from_email}
        onChange={handleChange}
        required
      />
      <Input
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="min-h-[130px]"
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending…
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Send Message
            <Send className="h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
