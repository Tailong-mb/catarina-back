export default {
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    {
      name: 'nom',
      title: 'Album Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nom',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titre',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'items',
      title: 'Album Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'titre',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: 'nom',
      media: 'items.0.image',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `Album with ${selection.media ? 'images' : '0 image'}`,
      }
    },
  },
}
