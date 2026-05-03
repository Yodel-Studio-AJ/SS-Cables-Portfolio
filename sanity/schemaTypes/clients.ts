import { defineField, defineType } from 'sanity'

export const clients = defineType({
  name: 'clients',
  title: 'Clients',
  type: 'document',
  fields: [
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      description: 'Upload a square (1:1) image for best results',
      options: {
        hotspot: true,
        metadata: ['lqip', 'blurhash'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'companyName', media: 'companyLogo' },
  },
})
