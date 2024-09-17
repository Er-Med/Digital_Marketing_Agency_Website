const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL

// async function fetchData(
//  endpoint: string,
//  cacheConfig: RequestCache = 'default',
// )
//  {
//  try {
//   const options: RequestInit = {
//    cache: cacheConfig ? cacheConfig : undefined
//   };
//   const res = await fetch(`${baseUrl}${endpoint}`, options)
//   let data = await res.json();
//   return data
//  } catch (err) {
//   throw new Error("Please check if your server is running and you set all the required tokens")
//  }
// }

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;

async function fetchData(
 endpoint: string,
) {
 try {
  const response = await fetch(`${baseUrl}${endpoint}`, {
   method: 'GET', // or 'POST', 'PUT', etc. based on your need
   headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
   },
  });


  if (!response.ok) {
   throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data;
 } catch (error) {
  console.error('Error fetching data:', error);
  throw error;
 }
}


//Get Team Data
async function getTeamData() {
 return await fetchData("/homepage?populate[0]=Team&populate[1]=Team.team_members&populate[2]=Team.title&populate[3]=Team.btn")
}


// Get Team Members Data
async function getTeamMembersData() {
 return await fetchData(`/Team-members?populate=*`)
}

//* About Page Data
// async function getAboutPageData() {
//  // Fetch Page Hero Section Data
//  const fetchPageHeroData = async () => {
//   const data = await fetchData('/about-page?populate=pageHeroSection.button')
//   const pageHeroSection = data.data.attributes.pageHeroSection;
//   const sectionData = {
//    title: pageHeroSection.title,
//    desc: pageHeroSection.description,
//    buttonText: pageHeroSection.button.text,
//    buttonType: pageHeroSection.button.type,
//    buttonHref: pageHeroSection.button.href
//   }

//   return sectionData
//  }

//  // Fetch Engagement Section Data
//  const fetchFeaturesSectionData = async () => {
//   const data = await fetchData('/about-page?populate[EngagementSection][populate]=title,Advantage')
//   const featuresSection = data.data.attributes.EngagementSection;

//   const featuresSectionSection_Title = {
//    title: featuresSection.title.title,
//    highlighted_title: featuresSection.title.highlighted_title
//   }

//   const featuresSection_Advantages = featuresSection.Advantage.map((advantage: {
//    id: any; icon: any; title: any; description: any;
//   }) => ({
//    id: advantage.id,
//    icon: advantage.icon,
//    title: advantage.title,
//    description: advantage.description
//   }))

//   const sectionData = {
//    title: featuresSectionSection_Title,
//    advantages: featuresSection_Advantages
//   }

//   return sectionData
//  }

//  // Fetch Simple Sections Data
//  const fetchSimpleSectionsData = async () => {
//   const data = await fetchData('/about-page?populate[simpleSection][populate]=*')
//   const simpleSections = data.data.attributes.simpleSection;

//   const simpleSectionsData = simpleSections.map((section: {
//    id: any; title: any; description: any; img: { data: { attributes: { url: any; }; }; };
//   }) => ({
//    id: section.id,
//    title: section.title,
//    description: section.description,
//    imgData: {
//     src: section.img.data.attributes.url,
//    }
//   }))

//   return simpleSectionsData
//  }

//  const pageData = {
//   pageHero: await fetchPageHeroData(),
//   engagementSection: await fetchFeaturesSectionData(),
//   simpleSections: await fetchSimpleSectionsData()
//  }

//  return pageData
// }


// Get BlogsPage Data
// async function getBlogsPageData() {

//  interface Category {
//   attributes: any; id: any; name: any;
//  }

//  const data = await fetchData('/blog-page?populate[blogsSection][populate]=title')
//  const heroData = data.data.attributes.hero
//  const filterSectionTitle = {
//   title: data.data.attributes.blogsSection.title,
//   categories: data.data.attributes.blogsSection.categories.data.map((category: Category) => ({
//    id: category.attributes.id,
//    name: category.attributes.name,
//   }))

//  }

//  return {
//   heroData,
//   filterSectionTitle
//  }

// }


export {
 // getHeroSectionData,
 // getWhatWeDoSectionData,
 // getClientsSectionData,
 // getServicesSectionData,
 // getTestimonialsData,
 // getLatestBlogsData,
 getTeamData,
 // getHeaderData,
 // getFooterData,
 // getBlogsData,
 // getClientsData,
 // getServicesData,
 // getStatisticsData,
 getTeamMembersData,
 baseUrl,
 // getAboutPageData,
 // getFAQData,
 // getBlogsPageData,
 fetchData,
 strapiUrl,
 // convertDate 
}