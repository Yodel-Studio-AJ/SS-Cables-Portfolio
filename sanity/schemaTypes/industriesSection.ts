import { defineArrayMember, defineField, defineType } from 'sanity'

export const industriesSection = defineType({
  name: 'industriesSection',
  title: 'Industries We Cater Section',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'e.g. • SECTORS WE POWER',
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'e.g. INDUSTRIES WE CATER',
    }),
    defineField({
      name: 'highlightedWord',
      title: 'Highlighted Word',
      type: 'string',
      description: 'The word in the heading to highlight in accent color',
    }),
    defineField({
      name: 'description',
      title: 'Section Subheading/Description',
      type: 'text',
    }),
    defineField({
      name: 'industries',
      title: 'Industry Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'cardNumber', title: 'Card Number', type: 'string', description: 'e.g. 01' }),
            defineField({ name: 'title', title: 'Industry Title', type: 'string' }),
            defineField({ name: 'description', title: 'Industry Description', type: 'text' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      isActive: 'isActive',
    },
    prepare({ title, isActive }) {
      return {
        title: title || 'Untitled Industries Section',
        subtitle: isActive ? 'Active' : 'Inactive',
      }
    },
  },
})
