import { type SchemaTypeDefinition } from 'sanity'
import { heroSection } from './heroSection'
import { clients } from './clients'
import { testimonials } from './testimonials'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection, clients, testimonials],
}
