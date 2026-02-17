export default {
  name: 'pageHome',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'albums',
      title: 'Albums to Display',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'album'}],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
      description: 'Select albums to display on the home page',
    },
    {
      name: 'labelBoutonView',
      title: 'View Button Label',
      type: 'string',
      initialValue: 'View',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Paramètres SEO spécifiques pour la page d\'accueil',
    },
  ],
  preview: {
    select: {
      title: 'labelBoutonView',
    },
    prepare(selection) {
      return {
        title: `Home Page - Button: ${selection.title}`,
      }
    },
  },
}
