import Services from "@/pages/services";
import Hero from "@/pages/hero";
import Whychoose from "@/pages/whychoose";
import HowItWorks from "@/pages/howItWorks";
import WhatsappSupport from "@/pages/whatsappSupport";
// import Instructor from "@/pages/instructor";
import CoreFeatures from "@/pages/coreFeatures";
import ContactUs from "@/pages/contactUs";
// import Testimonial from "@/pages/testimonial";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>
      <Header myRef={undefined} />
      <Hero />
      <Services />
      <Whychoose />
      <HowItWorks />
      <WhatsappSupport />
      {/* <Instructor /> */}
      <CoreFeatures />
      <ContactUs />
      {/* <Testimonial /> */}
      <Footer />
    </main>
  );
}
