import { client } from '../../client'

const fields = `
  _id,
  desktopImage,
  mobileImage,
  title,
  subtitle,
  ctaButton,
  isActive
`

const HERO_SECTION_QUERY = `*[_type == "heroSection"]{${fields}}`

const ACTIVE_HERO_SECTION_QUERY = `*[_type == "heroSection" && isActive == true]{${fields}}`

export async function getHeroSections() {
  const data = await client.fetch(HERO_SECTION_QUERY)
  console.log('Hero Section Data:', JSON.stringify(data, null, 2))
  return data
}

export async function getActiveHeroSection() {
  const data = await client.fetch(ACTIVE_HERO_SECTION_QUERY)
  console.log('Active Hero Section Data:', JSON.stringify(data, null, 2))
  return data
}
