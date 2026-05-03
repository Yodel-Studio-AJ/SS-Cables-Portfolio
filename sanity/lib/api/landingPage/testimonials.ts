import { client } from '../../client'

const fields = `
  _id,
  name,
  designation,
  company,
  avatar,
  testimonial,
  rating,
  isActive
`

const TESTIMONIALS_QUERY = `*[_type == "testimonials"]{${fields}}`

const ACTIVE_TESTIMONIALS_QUERY = `*[_type == "testimonials" && isActive == true]{${fields}}`

export async function getTestimonials() {
  const data = await client.fetch(TESTIMONIALS_QUERY)
  console.log('Testimonials Data:', JSON.stringify(data, null, 2))
  return data
}

export async function getActiveTestimonials() {
  const data = await client.fetch(ACTIVE_TESTIMONIALS_QUERY)
  console.log('Active Testimonials Data:', JSON.stringify(data, null, 2))
  return data
}
