import { defineArrayMember, defineField, defineType } from 'sanity'

const richText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [
      defineArrayMember({
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H1', value: 'h1' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
        ],
        marks: {
          decorators: [
            { title: 'Bold', value: 'strong' },
            { title: 'Italic', value: 'em' },
            { title: 'H1 Size', value: 'h1size' },
            { title: 'H2 Size', value: 'h2size' },
          ],
        },
      }),
    ],
  })

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'desktopImage',
      title: 'Desktop Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile Image',
      type: 'image',
      options: { hotspot: true },
    }),
    richText('title', 'Title'),
    richText('subtitle', 'Subtitle'),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        defineField({ name: 'text', title: 'Button Text', type: 'string' }),
        defineField({ name: 'textColor', title: 'Text Color', type: 'string', description: 'e.g. #ffffff or white' }),
        defineField({ name: 'bgColor', title: 'Background Color', type: 'string', description: 'e.g. #0033cc or blue' }),
        defineField({ name: 'redirectionLink', title: 'Redirection Link', type: 'url' }),
      ],
    }),
  ],
})
