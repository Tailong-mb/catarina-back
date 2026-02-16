export default {
  name: 'globale',
  title: 'Global Configuration',
  type: 'document',
  fields: [
    {
      name: 'nomFolio',
      title: 'Folio Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lienPlayground',
      title: 'Playground Link Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lienAbout',
      title: 'About Link Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'boutonDark',
      title: 'Dark Button Name',
      type: 'string',
      initialValue: 'Dark',
    },
    {
      name: 'boutonLight',
      title: 'Light Button Name',
      type: 'string',
      initialValue: 'Light',
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'email',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'nomFolio',
    },
    prepare(selection) {
      return {
        title: `Configuration: ${selection.title}`,
      }
    },
  },
}
