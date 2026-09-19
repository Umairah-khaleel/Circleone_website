import ContactHero from '@/app/components/contact/ContactHero';
import ContactForm from '@/app/components/contact/ContactForm';
import ContactMap from '@/app/components/contact/ContactMap';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </main>
  );
}