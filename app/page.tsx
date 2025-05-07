import HeroSection from '@/components/home/HeroSection';
import HowItWorks from '@/components/home/HowItWorks';
import FeaturedServices from '@/components/home/FeaturedServices';
import TestimonialSection from '@/components/home/TestimonialSection';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturedServices />
      <TestimonialSection />
      <CallToAction />
    </>
  );
}