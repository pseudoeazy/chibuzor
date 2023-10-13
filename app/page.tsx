import Clients from "@/components/clients";
import Footer from "@/components/footer";
import Contact from "@/components/forms/contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Projects from "@/components/projects";
import RecentBlogPost from "@/components/recent-blog-post";
import Services from "@/components/services";
import SiteLayout from "@/components/site-layout";
import Testimonials from "@/components/testimonials";
import MyValues from "@/components/values";

export default function Home() {
  return (
    <SiteLayout>
      <Header />
      <Hero />
      <Mission />
      <MyValues />
      <Services />
      <Projects />
      <Contact />
      <RecentBlogPost />
      <Testimonials />
      <Clients />
      <Footer />
    </SiteLayout>
  );
}
