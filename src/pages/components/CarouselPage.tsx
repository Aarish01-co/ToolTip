import { Carousel } from "@/components/Carousel/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const sampleSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80",
      title: "Vibrant Gradient",
      description: "Explore smooth animations and modern colors.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      title: "Abstract Shapes",
      description: "Designed for clean and interactive user interfaces.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
      title: "Neon Glow",
      description: "High-contrast dark mode aesthetic.",
    },
  ];

  const basicUsageCode = `import { Carousel } from "@/components/Carousel/Carousel";

const sampleSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80",
    title: "Vibrant Gradient",
    description: "Explore smooth animations and modern colors.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    title: "Abstract Shapes",
    description: "Designed for clean and interactive user interfaces.",
  },
];

<Carousel slides={sampleSlides} autoPlay interval={3000} aspectRatio="wide" />`;

  const customContentUsageCode = `import { Carousel } from "@/components/Carousel/Carousel";

<Carousel autoPlay={false} variant="dark" aspectRatio="auto" className="p-8">
  <div className="p-8 text-center text-white">
    <h3 className="text-2xl font-bold mb-2">Slide 1: Fast Setup</h3>
    <p>Zero configuration required to integrate into your React app.</p>
  </div>
  <div className="p-8 text-center text-white">
    <h3 className="text-2xl font-bold mb-2">Slide 2: Customizable</h3>
    <p>Flexible props and Tailwind styles tailored to your design system.</p>
  </div>
</Carousel>`;

  const propsData = [
    {
      prop: "slides",
      type: "CarouselSlide[]",
      default: "-",
      description: "Array of slide items containing image, title, description, or custom content.",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "true",
      description: "Whether the carousel automatically advances slides.",
    },
    {
      prop: "interval",
      type: "number",
      default: "4000",
      description: "Duration in milliseconds between automatic slide transitions.",
    },
    {
      prop: "showControls",
      type: "boolean",
      default: "true",
      description: "Show or hide previous/next navigation arrow buttons.",
    },
    {
      prop: "showIndicators",
      type: "boolean",
      default: "true",
      description: "Show or hide pagination dots indicator bar.",
    },
    {
      prop: "variant",
      type: '"light" | "dark" | "ghost"',
      default: '"light"',
      description: "The visual style variant of the carousel container.",
    },
    {
      prop: "aspectRatio",
      type: '"auto" | "video" | "square" | "wide"',
      default: '"video"',
      description: "Defines aspect ratio proportions of the carousel frame.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Carousel
        </h1>
        <p className="text-lg text-gray-600 dark:text-slate-300">
          A slideshow component for cycling through images or custom content cards.
        </p>
      </header>

      {/* Image Carousel */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Image Carousel
        </h2>
        <p className="text-gray-600 dark:text-slate-300">
          Pass image slide objects with titles and descriptions for instant slider functionality.
        </p>
        <ComponentDemo code={basicUsageCode}>
          <div className="w-full max-w-2xl">
            <Carousel slides={sampleSlides} autoPlay interval={3500} aspectRatio="wide" />
          </div>
        </ComponentDemo>
      </section>

      {/* Custom Content Carousel */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Content
        </h2>
        <p className="text-gray-600 dark:text-slate-300">
          Carousel can render custom child nodes, cards, or custom slide layouts.
        </p>
        <ComponentDemo code={customContentUsageCode}>
          <div className="w-full max-w-2xl">
            <Carousel autoPlay={false} variant="dark" aspectRatio="auto" className="p-8">
              <div className="p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Slide 1: Fast Setup</h3>
                <p className="text-gray-300">Zero configuration required to integrate into your React app.</p>
              </div>
              <div className="p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Slide 2: Fully Responsive</h3>
                <p className="text-gray-300">Flexible props and Tailwind styles tailored to your design system.</p>
              </div>
            </Carousel>
          </div>
        </ComponentDemo>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;
