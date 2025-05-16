import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
return (
  <section className="px-4 py-12 sm:px-6 md:py-20 lg:py-24">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Quality Products for Your Everyday Needs
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
            Discover our curated collection of premium products designed to enhance your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link href="/Product">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto"
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full overflow-hidden rounded-xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
              alt="Everyday quality products display"
              width={1200}
              height={800}
              loading="lazy"
              className="object-cover w-full h-auto aspect-square sm:aspect-video"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

};

export default Hero;
