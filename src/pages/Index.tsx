import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ValueProps from "@/components/home/ValueProps";
import AboutPreview from "@/components/home/AboutPreview";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValueProps />
      <FeaturedProducts />
      <AboutPreview />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;