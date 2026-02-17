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
    {
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      description: 'URL de base du site (ex: https://catarina.com)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'defaultSeo',
      title: 'SEO par défaut',
      type: 'seo',
      description: 'Paramètres SEO par défaut pour toutes les pages',
    },
    {
      name: 'structuredData',
      title: 'Données structurées',
      type: 'object',
      fields: [
        {
          name: 'personName',
          title: 'Nom (Person)',
          type: 'string',
          initialValue: 'Catarina',
        },
        {
          name: 'jobTitle',
          title: 'Titre professionnel',
          type: 'string',
          initialValue: 'Photographe Professionnelle',
        },
        {
          name: 'addressLocality',
          title: 'Ville',
          type: 'string',
          initialValue: 'Paris',
        },
        {
          name: 'addressCountry',
          title: 'Pays',
          type: 'string',
          initialValue: 'FR',
        },
        {
          name: 'sameAs',
          title: 'Réseaux sociaux',
          type: 'array',
          of: [{ type: 'url' }],
          description: 'Liens vers les réseaux sociaux (Instagram, Facebook, etc.)',
        },
      ],
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
