import "@/app/styles.scss";
import Statistics from "@/app/_ui/Statistics";
import Hero from "@/app/_ui/Hero";
import teamImg from "@/public/images/team-job.jpg";
import FAQ from "@/app/_ui/FAQ";
import Features from "@/app/_ui/Features";
import Transition from "@/app/_ui/animations/Transition";
import Clients from "@/app/_ui/Clients";
import Team from "@/app/_ui/Team";
import Title from "@/app/_ui/Title";
import Container from "@/app/_ui/Container";
import { fetchData } from "@/app/_lib/data";
import Image from "next/image";
import Button from "@/app/_ui/Button";
import * as motion from "framer-motion/client";

// Separate data fetching logic into utility functions to follow Single Responsibility Principle (SRP)
async function fetchPageHeroData() {
  const data = await fetchData("/about-page?populate=pageHeroSection.button");
  const pageHeroSection = data.data.attributes.pageHeroSection;

  // Extract relevant data for the hero section
  return {
    title: pageHeroSection.title,
    desc: pageHeroSection.description,
    buttonText: pageHeroSection.button.text,
    buttonType: pageHeroSection.button.type,
    buttonHref: pageHeroSection.button.href,
  };
}

async function fetchFeaturesSectionData() {
  const data = await fetchData(
    "/about-page?populate[EngagementSection][populate]=title,Advantage"
  );
  const featuresSection = data.data.attributes.EngagementSection;

  // Structure data for features section
  return {
    title: {
      title: featuresSection.title.title,
      highlightedTitle: featuresSection.title.highlighted_title,
    },
    features: featuresSection.Advantage.map(
      (advantage: { id: any; icon: any; title: any; description: any }) => ({
        id: advantage.id,
        icon: advantage.icon,
        title: advantage.title,
        description: advantage.description,
      })
    ),
  };
}

export default async function Page() {
  const heroSectionData = await fetchPageHeroData();
  const featuresSectionData = await fetchFeaturesSectionData();

  return (
    <div className='overflow-hidden'>
      <Transition>
        <Container>
          <div className='mx-auto'>
            {/* Hero Section */}
            <Hero
              title={heroSectionData.title}
              desc={heroSectionData.desc}
              btnHref={heroSectionData.buttonHref}
              btnText={heroSectionData.buttonText}
              btnType={heroSectionData.buttonType}
              titleSize='100px'
            />
          </div>
        </Container>

        {/* Statistics Section */}
        <Container>
          <div className='mb-36'>
            <Statistics />
          </div>
        </Container>

        {/* About Us Section */}
        <Container>
          <div className='mb-44'>
            <div className='flex justify-center my-14 md:my-24'>
              <Title
                text='Our'
                highlited='Story'
                textColor='var(--black_color)'
              />
            </div>

            <section>
              <div className='mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                    className='relative z-10 lg:py-16'>
                    <div className='relative h-64 sm:h-80 lg:h-full'>
                      <Image
                        alt='Team image'
                        src={teamImg}
                        className='absolute inset-0 h-full w-full object-cover'
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                    className='relative flex items-center bg-gray-100'>
                    <div className='p-8 sm:p-16 lg:p-24'>
                      <h2 className='text-2xl font-bold sm:text-3xl'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempore, debitis.
                      </h2>

                      <p className='mt-4 text-gray-600'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquid, molestiae!
                      </p>

                      <div className='my-4'>
                        <Button
                          text='Contact us'
                          href='/team'
                          type='second'
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </Container>

        {/* Features Section */}
        <Container>
          <div className='mb-44'>
            <Features data={featuresSectionData} />
          </div>
        </Container>

        {/* Clients Section */}
        <Container>
          <div className='mb-44'>
            <Clients />
          </div>
        </Container>

        {/* Team Section */}
        <Container>
          <div className='mb-44'>
            <div className='flex justify-center my-14 md:my-24'>
              <Title
                text='Our'
                highlited='Team'
                textColor='var(--black_color)'
              />
            </div>
            <Team />
          </div>
        </Container>

        {/* FAQ Section */}
        <FAQ />
      </Transition>
    </div>
  );
}
