import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubContributions from "@/components/GitHubContributions";
import BlogSection from "@/components/BlogSection";
import PhotosSection from "@/components/PhotosSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <GitHubContributions />
      <BlogSection />
      <PhotosSection />
      <Footer />
    </div>
  );
};

export default Index;
