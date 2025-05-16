import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="px-8 py-16 md:py-24">
      <div className="container px-6 md:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Quality Products for Your Everyday Needs
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Discover our curated collection of premium products designed to enhance your lifestyle.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/Product">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
              width="500"
              height="500"
              alt="Hero Image"
              className="aspect-square object-cover w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
