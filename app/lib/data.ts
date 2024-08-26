const baseUrl = "http://localhost:1337/api"

async function fetchStrapiData(endpoint: string) {
 try {
  const res = await fetch(`${baseUrl}${endpoint}`)
  let data = await res.json();
  return data
 } catch (err) {
  throw new Error("Please check if your server is running and you set all the required tokens")
 }
}


//Get HeroSection Data
async function getHeroSectionData() {
 return await fetchStrapiData("/homepage?populate[0]=HeroSection&populate[1]=HeroSection.button")
}

//Get WhatWeDoSection Data
async function getWhatWeDoSectionData() {
 return await fetchStrapiData("/homepage?populate[0]=WhatWeDoSection&populate[1]=WhatWeDoSection.button&populate[2]=WhatWeDoSection.title")
}

//Get ClientsSection Data
async function getClientsSectionData() {
 return await fetchStrapiData("/homepage?populate[0]=ClientsSection&populate[1]=ClientsSection.clients")
}

//Get ServicesSection Data
async function getServicesSectionData() {
 return await fetchStrapiData("/homepage?populate[0]=ServicesSection&populate[1]=ServicesSection.services&populate[2]=ServicesSection.title")
}

//Get Testimonials Data
async function getTestimonialsData() {
 return await fetchStrapiData("/homepage?populate[0]=Testimonials&populate[1]=Testimonials.images")
}

//Get LatestBlogs Data
async function getLatestBlogsData() {
 return await fetchStrapiData("/homepage?populate[0]=LatestBlogs&populate[1]=LatestBlogs.blogs&populate[2]=LatestBlogs.title")
}

//Get Team Data
async function getTeamData() {
 return await fetchStrapiData("/homepage?populate[0]=Team&populate[1]=Team.team_members&populate[2]=Team.title&populate[3]=Team.btn")
}



// Get Header Data
async function getHeaderData() {
 return await fetchStrapiData("/header?populate[NavigationLinks][populate][subLinks][populate][sub_services][populate]=*&populate=logo_image")
}

// Get Footer Data
async function getFooterData() {
 return await fetchStrapiData("/Footer?populate=*")
}

// Get Blogs Data
async function getBlogsData() {
 return await fetchStrapiData(`/Blogs?populate=*`)
}

// Get clients Data
async function getClientsData() {
 return await fetchStrapiData(`/Clients?populate=*`)
}

// Get services Data
async function getServicesData() {
 return await fetchStrapiData(`/Services?populate=*`)
}

// Get Statistics Data
async function getStatisticsData() {
 return await fetchStrapiData(`/Statistics?populate=*`)
}

// Get Team Members Data
async function getTeamMembersData() {
 return await fetchStrapiData(`/Team-members?populate=*`)
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
 getTeamMembersData

}