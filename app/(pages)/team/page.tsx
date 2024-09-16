import "@/app/styles.scss";
import Team from "@/app/_ui/Team";
import Hero from "@/app/_ui/Hero";

export default function page() {
  return (
    <div>
      <div className='container px-4 md:px-14 mx-auto'>
        <div className='lg:w-[80%] mx-auto'>
          <Hero
            title='Degital team'
            desc="notre identité est façonnée par notre passion pour l'innovation et notre engagement envers l'excellence"
            btnHref='/contact'
            btnText='Join our Team'
            btnType='primary'
            titleSize='100px'
          />
        </div>

        <div className='mb-32 '>
          <Team />
        </div>
      </div>
    </div>
  );
}
