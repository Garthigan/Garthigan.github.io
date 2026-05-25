import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin, LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Email",
      text: "garthidata@gmail.com",
      href: "mailto:garthidata@gmail.com",
    },
    {
      icon: <Phone className="h-4 w-4" />,
      label: "Phone",
      text: "+94 76 547 9683",
      href: "tel:+94765479683",
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Location",
      text: "Colombo, Sri Lanka",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedinIcon className="h-4 w-4" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/garthigan-kumarasamy-1450891a9/",
    },
    {
      icon: <GithubIcon className="h-4 w-4" />,
      label: "GitHub",
      href: "https://github.com/Garthigan",
    },
    {
      icon: <TwitterIcon className="h-4 w-4" />,
      label: "X / Twitter",
      href: "https://x.com/Garthigan_Kumar",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="bg-muted/30 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-lg mb-4">Contact</h1>
            <p className="text-lg text-muted-foreground">
              Open to research collaborations, academic enquiries, and
              professional opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Left — contact details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <h2 className="heading-md mb-8">Contact Information</h2>

              <div className="space-y-5 mb-10">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {item.text}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Online Profiles
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-lg w-10 h-10"
                    title={link.label}
                  >
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Right — message form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h2 className="heading-md mb-8">Send a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
