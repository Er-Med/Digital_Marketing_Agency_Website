import "@/app/styles.scss";
import Hero from "@/app/_ui/Hero";
import { fetchData } from "@/app/_lib/data";
import LatestBlog from "@/app/_ui/blogs/LatestBlog";
import BlogsFilter from "@/app/_ui/BlogsFilter";
import Transition from "@/app/_ui/animations/Transition";
import Container from "@/app/_ui/Container";

interface Category {
  attributes: any;
  id: any;
  name: any;
}
export default async function Page() {
  const data = await fetchData("/blogs?sort=id:desc&populate=*");
  const blogs = data.data;

  const pageData = await fetchData(
    "/blog-page?populate[blogsSection][populate]=title,categories&populate=hero"
  );
  const heroData = pageData.data.attributes.hero;
  const blogsSectiontitle = pageData.data.attributes.blogsSection.title;
  const categories = pageData.data.attributes.blogsSection.categories.data.map(
    (category: Category) => ({
      id: category.attributes.id,
      name: category.attributes.name,
    })
  );

  return (
    <div className='overflow-hidden'>
      <Transition>
        <Container>
          <div className=' mb-32 mx-auto'>
            <Hero
              title={heroData.title}
              desc={heroData.description}
              titleSize='100px'
            />
          </div>

          <div className='mb-44 '>
            <LatestBlog />
            <hr className='awsome-hr mb-20 mx-auto' />
          </div>

          <div className='mb-32'>
            <BlogsFilter
              categories={categories}
              titleData={blogsSectiontitle}
              blogs={blogs}
            />
          </div>
        </Container>
      </Transition>
    </div>
  );
}
