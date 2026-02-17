export default {
  name: 'pageAbout',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'titre',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'liens',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'titre',
              title: 'Link Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'Link URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'titre',
              subtitle: 'url',
            },
          },
        },
      ],
    },
    {
      name: 'trailEffect',
      title: 'Trail Effect (Images)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Images for trail effect',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Paramètres SEO spécifiques pour la page About',
    },
  ],
  preview: {
    select: {
      title: 'titre',
    },
    prepare(selection) {
      return {
        title: `About Page: ${selection.title}`,
      }
    },
  },
}
