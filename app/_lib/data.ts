const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL

async function fetchData(
 endpoint: string,
 cacheConfig: RequestCache = 'default'
) {
 try {
  const options: RequestInit = {
   cache: cacheConfig ? cacheConfig : undefined
  };
  const res = await fetch(`${baseUrl}${endpoint}`, options)
  let data = await res.json();
  return data
 } catch (err) {
  throw new Error("Please check if your server is running and you set all the required tokens")
 }
}


// function convertDate(d) {
//  const date = new Date(d)
//  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
// }

//Get HeroSection Data
async function getHeroSectionData() {
 return await fetchData("/homepage?populate[0]=HeroSection&populate[1]=HeroSection.button")
}

//Get WhatWeDoSection Data
async function getWhatWeDoSectionData() {
 return await fetchData("/homepage?populate[0]=whatWeDoSection&populate[1]=whatWeDoSection.button&populate[2]=whatWeDoSection.title")
}

//Get ClientsSection Data
async function getClientsSectionData() {
 return await fetchData("/homepage?populate=ClientsSection.clients.image")
}

//Get ServicesSection Data
async function getServicesSectionData() {
 return await fetchData("/homepage?populate[0]=ServicesSection.title&populate[1]=ServicesSection.services.img&populate[2]=ServicesSection.services.sousServices.img")
}



//Get Testimonials Data
async function getTestimonialsData() {
 return await fetchData("/homepage?populate[0]=Testimonials&populate[1]=Testimonials.images")
}

//Get LatestBlogs Data
async function getLatestBlogsData() {
 return await fetchData("/homepage?populate[0]=LatestBlogs&populate[1]=LatestBlogs.blogs&populate[2]=LatestBlogs.title")
}

//Get Team Data
async function getTeamData() {
 return await fetchData("/homepage?populate[0]=Team&populate[1]=Team.team_members&populate[2]=Team.title&populate[3]=Team.btn")
}



// Get Header Data
async function getHeaderData() {
 return await fetchData("/Header?populate[NavigationLinks][populate][subLinks][populate][sub_subServices][populate]=*&populate=logo_image")
}


// Get Footer Data
async function getFooterData() {
 return await fetchData("/Footer?populate=*")
}

// Get Blogs Data
async function getBlogsData() {
 return await fetchData(`/blogs?sort=id:desc&populate=*`)
}

// Get clients Data
async function getClientsData() {
 return await fetchData(`/Clients?populate=*`)
}

// Get services Data
async function getServicesData() {
 return await fetchData(`/Services?populate[img]=*&populate[button]=*&populate[sousServices][populate]=img`)
}

// Get Statistics Data
async function getStatisticsData() {
 return await fetchData(`/Statistics?populate=*`)
}

// Get FAQ Data
async function getFAQData() {
 return await fetchData(`/about-page?populate[faq][populate]=title,question`)
}

// Get Team Members Data
async function getTeamMembersData() {
 return await fetchData(`/Team-members?populate=*`)
}

//* About Page Data
async function getAboutPageData() {
 // Fetch Page Hero Section Data
 const fetchPageHeroData = async () => {
  const data = await fetchData('/about-page?populate=pageHeroSection.button')
  const pageHeroSection = data.data.attributes.pageHeroSection;
  const sectionData = {
   title: pageHeroSection.title,
   desc: pageHeroSection.description,
   buttonText: pageHeroSection.button.text,
   buttonType: pageHeroSection.button.type,
   buttonHref: pageHeroSection.button.href
  }

  return sectionData
 }

 // Fetch Engagement Section Data
 const fetchFeaturesSectionData = async () => {
  const data = await fetchData('/about-page?populate[EngagementSection][populate]=title,Advantage')
  const featuresSection = data.data.attributes.EngagementSection;

  const featuresSectionSection_Title = {
   title: featuresSection.title.title,
   highlighted_title: featuresSection.title.highlighted_title
  }

  const featuresSection_Advantages = featuresSection.Advantage.map((advantage: {
   id: any; icon: any; title: any; description: any;
  }) => ({
   id: advantage.id,
   icon: advantage.icon,
   title: advantage.title,
   description: advantage.description
  }))

  const sectionData = {
   title: featuresSectionSection_Title,
   advantages: featuresSection_Advantages
  }

  return sectionData
 }

 // Fetch Simple Sections Data
 const fetchSimpleSectionsData = async () => {
  const data = await fetchData('/about-page?populate[simpleSection][populate]=*')
  const simpleSections = data.data.attributes.simpleSection;

  const simpleSectionsData = simpleSections.map((section: {
   id: any; title: any; description: any; img: { data: { attributes: { url: any; }; }; };
  }) => ({
   id: section.id,
   title: section.title,
   description: section.description,
   imgData: {
    src: section.img.data.attributes.url,
   }
  }))

  return simpleSectionsData
 }

 const pageData = {
  pageHero: await fetchPageHeroData(),
  engagementSection: await fetchFeaturesSectionData(),
  simpleSections: await fetchSimpleSectionsData()
 }

 return pageData
}


// Get BlogsPage Data
async function getBlogsPageData() {

 interface Category {
  attributes: any; id: any; name: any;
 }

 const data = await fetchData('/blog-page?populate[blogsSection][populate]=title,categories&populate=hero')

 const heroData = data.data.attributes.hero
 const filterSectionTitle = {
  title: data.data.attributes.blogsSection.title,
  categories: data.data.attributes.blogsSection.categories.data.map((category: Category) => ({
   id: category.attributes.id,
   name: category.attributes.name,
  }))

 }

 return {
  heroData,
  filterSectionTitle
 }

}


export {
 getHeroSectionData,
 getWhatWeDoSectionData,
 getClientsSectionData,
 getServicesSectionData,
 getTestimonialsData,
 getLatestBlogsData,
 getTeamData,
 getHeaderData,
 getFooterData,
 getBlogsData,
 getClientsData,
 getServicesData,
 getStatisticsData,
 getTeamMembersData,
 baseUrl,
 getAboutPageData,
 getFAQData,
 getBlogsPageData,
 fetchData,
 strapiUrl,
 // convertDate 
}