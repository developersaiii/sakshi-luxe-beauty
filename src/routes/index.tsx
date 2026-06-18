import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles,
  Crown,
  Scissors,
  Droplets,
  Flower2,
  Hand,
  Heart,
  Wand2,
  Star,
  Phone,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
  ShieldCheck,
  Award,
  Users,
  Leaf,
  Gem,
  ArrowRight,
} from "lucide-react";
import heroBride from "@/assets/hero-bride.jpg";
import gMaharashtrian from "@/assets/gallery-maharashtrian.jpg";
import gArtist from "@/assets/gallery-makeup-artist.jpg";
import gHair from "@/assets/gallery-hair.jpg";
import gHairSpa from "@/assets/gallery-hairspa.jpg";
import gFacial from "@/assets/gallery-facial.jpg";
import gMehendi from "@/assets/gallery-mehendi.jpg";
import gInterior from "@/assets/gallery-interior.jpg";
import gTransform from "@/assets/gallery-transformation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakshi Beauty Parlour — Luxury Bridal & Beauty Studio, Shrirampur" },
      { name: "description", content: "Premium bridal makeup, hair styling, facial, mehendi and skincare services in Shrirampur, Maharashtra. Book your appointment with Sakshi Beauty Parlour." },
      { property: "og:title", content: "Sakshi Beauty Parlour — Luxury Bridal & Beauty Studio" },
      { property: "og:description", content: "Premium bridal makeup, hair, facial & skincare services in Shrirampur, Maharashtra." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Sakshi Beauty Parlour",
          image: "/",
          telephone: "+91 8010570379",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Shrirampur",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "+918010570379";
const WHATSAPP = `https://wa.me/918010570379?text=${encodeURIComponent(
  "Hi Sakshi Beauty Parlour, I'd like to book an appointment.",
)}`;

const services = [
  { icon: Crown, name: "Bridal Makeup", desc: "Heirloom-worthy bridal looks crafted for your big day." },
  { icon: Sparkles, name: "Party Makeup", desc: "Glam, glow & confidence for every celebration." },
  { icon: Gem, name: "Engagement Makeup", desc: "Soft, romantic looks that photograph beautifully." },
  { icon: Scissors, name: "Hair Styling", desc: "From sleek elegance to voluminous bridal updos." },
  { icon: Droplets, name: "Hair Spa", desc: "Deeply nourishing rituals for healthy, shiny hair." },
  { icon: Wand2, name: "Hair Smoothening", desc: "Frizz-free, silky-smooth, salon-perfect finish." },
  { icon: Flower2, name: "Facial & Cleanup", desc: "Brightening, anti-ageing & glow-on-demand facials." },
  { icon: Leaf, name: "Waxing", desc: "Gentle waxing with premium, skin-loving products." },
  { icon: Hand, name: "Manicure & Pedicure", desc: "Pampering hand & foot care, polished to perfection." },
  { icon: Heart, name: "Mehendi", desc: "Intricate bridal & festive mehendi artistry." },
  { icon: Sparkles, name: "Skin Care Treatments", desc: "Personalised treatments for radiant, healthy skin." },
];

const reasons = [
  { icon: Award, title: "Experienced Beauty Experts", desc: "Years of bridal and salon expertise you can trust." },
  { icon: Gem, title: "Premium Quality Products", desc: "Only trusted, professional-grade brands on your skin." },
  { icon: Heart, title: "Affordable Pricing", desc: "Luxury services at honest, transparent prices." },
  { icon: ShieldCheck, title: "Hygienic Environment", desc: "Sterilised tools and a spotless studio, always." },
  { icon: Sparkles, title: "Personalised Beauty Care", desc: "Looks tailored to your features and your style." },
  { icon: Users, title: "Customer Satisfaction", desc: "Hundreds of happy brides and loyal regulars." },
];

const testimonials = [
  { name: "Priya S.", text: "Excellent bridal makeup and professional service. Highly recommended." },
  { name: "Aarti P.", text: "Very friendly staff and amazing beauty treatments. I felt so pampered!" },
  { name: "Sneha K.", text: "Best beauty parlour experience in Shrirampur. My go-to place every month." },
];

const gallery = [
  { src: gMaharashtrian, alt: "Traditional Maharashtrian bridal makeup", tall: true },
  { src: gArtist, alt: "Makeup artist at work" },
  { src: gHair, alt: "Luxury hair styling" },
  { src: gHairSpa, alt: "Relaxing hair spa treatment" },
  { src: gFacial, alt: "Professional facial treatment", tall: true },
  { src: gMehendi, alt: "Intricate bridal mehendi design" },
  { src: gInterior, alt: "Modern luxury salon interior" },
  { src: gTransform, alt: "Before and after transformation" },
];

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["About", "#about"],
    ["Gallery", "#gallery"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-white shadow-soft">
            <Crown className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-wide">Sakshi</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Beauty Parlour</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold-gradient after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary"
          >
            <Phone className="h-4 w-4" /> +91 80105 70379
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-transform hover:scale-105"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full gold-border"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-5 bg-foreground transition-all ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-all ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden mt-3 mx-6 rounded-2xl bg-background/95 backdrop-blur-md shadow-luxury p-6 animate-fade-up">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80 hover:text-primary"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-gradient px-5 py-3 text-sm font-medium text-white"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroBride}
        alt="Elegant Indian bride with luxury bridal makeup"
        width={1536}
        height={1920}
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.22_0.04_350/0.35),oklch(0.22_0.04_350/0.55)_40%,oklch(0.22_0.04_350/0.85))]" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[oklch(0.78_0.14_80/0.25)] blur-3xl animate-float-slow" />
      <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.72_0.14_10/0.25)] blur-3xl animate-float-slow" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold-soft)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/90">Luxury Beauty Studio · Shrirampur</span>
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-white">
            Enhance Your{" "}
            <span className="italic text-gold-gradient">Natural Beauty</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
            Professional beauty & bridal services in Shrirampur — crafted with timeless artistry,
            premium products, and a personal touch that makes every woman feel extraordinary.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-medium text-white shadow-luxury transition-transform hover:scale-[1.03] animate-glow"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Booking
            </a>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              ["10+", "Years of Artistry"],
              ["500+", "Happy Brides"],
              ["11", "Signature Services"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-3xl text-gold-gradient">{num}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/70">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, accent, subtitle }: { eyebrow: string; title: string; accent?: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-3">
        <span className="h-px w-10 bg-gold-gradient" />
        <span className="text-xs uppercase tracking-[0.35em] text-primary">{eyebrow}</span>
        <span className="h-px w-10 bg-gold-gradient" />
      </div>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl font-medium leading-tight">
        {title} {accent && <span className="italic text-gold-gradient">{accent}</span>}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-pink-gradient opacity-50" />
      <div className="relative container mx-auto px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Signature Beauty"
          accent="Rituals"
          subtitle="From radiant bridal transformations to everyday glow, every service is performed with care, precision, and premium products."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, name, desc }) => (
            <article
              key={name}
              className="group relative overflow-hidden rounded-2xl bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-pink-gradient text-primary shadow-soft transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-5 h-px w-12 bg-gold-gradient transition-all duration-500 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gold-gradient opacity-25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-luxury">
            <img
              src={gInterior}
              alt="Luxury interior of Sakshi Beauty Parlour"
              width={1536}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-2xl bg-background px-5 py-4 shadow-luxury">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-white">
              <Crown className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-lg">Bridal Specialist</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Since the start</div>
            </div>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gold-gradient" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">About Us</span>
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-medium leading-tight">
            About <span className="italic text-gold-gradient">Sakshi Beauty Parlour</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At Sakshi Beauty Parlour, we believe every woman deserves to feel beautiful and
            confident. We provide professional beauty, skincare, haircare and bridal makeup
            services using quality products and modern techniques. Our goal is to deliver
            exceptional beauty experiences with personalised care and attention.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Bridal & Party Specialists",
              "Premium International Products",
              "Hygienic, Modern Studio",
              "Personalised Consultation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-white">
                  <Sparkles className="h-3 w-3" />
                </span>
                <span className="text-sm text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-105">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full gold-border px-6 py-3 text-sm font-medium text-foreground">
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-pink-gradient">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments of"
          accent="Glamour"
          subtitle="A glimpse into the artistry, transformations and signature looks crafted at Sakshi Beauty Parlour."
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {gallery.map((img, i) => (
            <figure
              key={img.alt}
              className={`group relative overflow-hidden rounded-2xl shadow-soft transition-all duration-500 hover:shadow-luxury ${
                img.tall ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.04_350/0.7)] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 p-4 text-xs uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Sakshi"
          accent="Difference"
          subtitle="A trusted name in Shrirampur for premium beauty, with care that goes beyond the chair."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-white shadow-soft">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-pink-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-[12rem] font-display text-primary leading-none">"</div>
      </div>
      <div className="relative container mx-auto px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by"
          accent="Our Clients"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="group relative rounded-2xl bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-luxury"
            >
              <div className="flex gap-0.5 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 font-display text-xl leading-relaxed text-foreground">
                "{t.text}"
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-white font-display">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Happy Client</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Book Your"
          accent="Appointment"
          subtitle="Reserve your slot or drop in to discuss your bridal look. We'd love to make you feel beautiful."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: "Visit Us", lines: ["Shrirampur,", "Maharashtra, India"] },
              { icon: Phone, title: "Call Us", lines: ["+91 80105 70379"], href: `tel:${PHONE}` },
              { icon: MessageCircle, title: "WhatsApp", lines: ["Chat with us now"], href: WHATSAPP, external: true },
              { icon: Clock, title: "Open Hours", lines: ["Mon – Sun · 9:00 AM – 9:00 PM"] },
            ].map(({ icon: Icon, title, lines, href, external }) => {
              const Tag = href ? "a" : "div";
              return (
                <Tag
                  key={title}
                  {...(href ? { href, ...(external ? { target: "_blank", rel: "noopener" } : {}) } : {})}
                  className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-luxury"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-white shadow-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-primary">{title}</div>
                    {lines.map((l) => (
                      <div key={l} className="text-sm text-foreground/85">{l}</div>
                    ))}
                  </div>
                </Tag>
              );
            })}

            <div className="overflow-hidden rounded-2xl shadow-soft">
              <iframe
                title="Sakshi Beauty Parlour location"
                src="https://www.google.com/maps?q=Shrirampur,+Maharashtra,+India&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const msg = `Hi Sakshi Beauty Parlour,%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AService: ${data.get("service")}%0ADate: ${data.get("date")}%0AMessage: ${data.get("message")}`;
              window.open(`https://wa.me/918010570379?text=${msg}`, "_blank");
            }}
            className="lg:col-span-3 rounded-2xl bg-card p-8 sm:p-10 shadow-luxury space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name" name="name" placeholder="Priya Sharma" required />
              <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Service</label>
                <select name="service" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                  {services.map((s) => (
                    <option key={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <Field label="Preferred Date" name="date" type="date" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little about what you're looking for..."
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-medium text-white shadow-luxury transition-transform hover:scale-[1.02]"
            >
              Send Booking Request <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Submitting opens WhatsApp with your details pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[oklch(0.22_0.04_350)] text-white/85">
      <div className="absolute inset-x-0 top-0 h-px bg-gold-gradient" />
      <div className="container mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient">
              <Crown className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-2xl text-white">Sakshi Beauty Parlour</span>
          </div>
          <p className="mt-4 text-sm text-white/65 leading-relaxed">
            A luxury beauty & bridal studio in the heart of Shrirampur, dedicated to bringing
            out your most radiant self.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-gold-gradient hover:border-transparent">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-gold-gradient hover:border-transparent">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={`tel:${PHONE}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-gold-gradient hover:border-transparent">
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {[["Services", "#services"], ["About", "#about"], ["Gallery", "#gallery"], ["Reviews", "#reviews"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">Visit</div>
          <div className="mt-4 space-y-2 text-sm">
            <p>Shrirampur, Maharashtra</p>
            <a href={`tel:${PHONE}`} className="block hover:text-white">+91 80105 70379</a>
            <p>Mon – Sun · 9 AM – 9 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Sakshi Beauty Parlour. All rights reserved.</p>
          <p>Crafted with care in Shrirampur, Maharashtra.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury transition-transform hover:scale-110 animate-glow"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#25D366]" />
      </span>
    </a>
  );
}
