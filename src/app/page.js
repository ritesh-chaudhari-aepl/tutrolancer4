 import Services from "@/pages/services"
import Hero from "@/pages/hero"
import Whychoose from "@/pages/whychoose"
import HowItWorks from "@/pages/howItWorks"
 import WhatsappSupport from "@/pages/whatsappSupport"
import Instructor from "@/pages/instructor"
 import CoreFeatures from "@/pages/coreFeatures"
import ContactUs from "@/pages/contactUs"
 import Testimonial from "@/pages/testimonial"
export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <Whychoose/>
        <HowItWorks/>
        <WhatsappSupport/>
      <Instructor/>
        <CoreFeatures/>
        <ContactUs/>
        <Testimonial/>
    </main>
  )
}
