export default {
  name: 'pagePlayground',
  title: 'Playground Page',
  type: 'document',
  fields: [
    {
      name: 'albums',
      title: 'Playground Albums',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'album'}],
        },
      ],
      validation: (Rule) => Rule.max(8),
      description: 'Select albums to display in the playground (maximum 8)',
    },
  ],
  preview: {
    select: {
      albums: 'albums',
    },
    prepare(selection) {
      const count = selection.albums ? selection.albums.length : 0
      return {
        title: 'Playground Page',
        subtitle: `${count} album${count > 1 ? 's' : ''} selected`,
      }
    },
  },
}
