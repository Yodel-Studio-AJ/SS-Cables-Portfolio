import { client } from '../../client'

const fields = `
  _id,
  eyebrow,
  heading,
  highlightedWord,
  description,
  industries[]{
    cardNumber,
    title,
    description
  },
  isActive
`

const INDUSTRIES_SECTION_QUERY = `*[_type == "industriesSection"]{${fields}}`

const ACTIVE_INDUSTRIES_SECTION_QUERY = `*[_type == "industriesSection" && isActive == true][0]{${fields}}`

export async function getIndustriesSections() {
  const data = await client.fetch(INDUSTRIES_SECTION_QUERY)
  return data
}

export async function getActiveIndustriesSection() {
  const data = await client.fetch(ACTIVE_INDUSTRIES_SECTION_QUERY)
  return data
}
