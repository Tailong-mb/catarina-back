// Schéma SEO réutilisable pour toutes les pages
export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titre SEO',
      type: 'string',
      description: 'Titre de la page (50-60 caractères recommandés)',
      validation: (Rule) => Rule.max(60).warning('Le titre devrait faire moins de 60 caractères'),
    },
    {
      name: 'description',
      title: 'Description SEO',
      type: 'text',
      description: 'Description de la page (150-160 caractères recommandés)',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning('La description devrait faire moins de 160 caractères'),
    },
    {
      name: 'keywords',
      title: 'Mots-clés',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Mots-clés pour le SEO (séparés par des virgules)',
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'ogImage',
      title: 'Image Open Graph / Twitter',
      type: 'image',
      description: 'Image partagée sur les réseaux sociaux (1200x630px recommandé)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ogTitle',
      title: 'Titre Open Graph',
      type: 'string',
      description: 'Titre pour les réseaux sociaux (optionnel, utilise le titre SEO par défaut)',
    },
    {
      name: 'ogDescription',
      title: 'Description Open Graph',
      type: 'text',
      description: 'Description pour les réseaux sociaux (optionnel, utilise la description SEO par défaut)',
      rows: 2,
    },
    {
      name: 'noindex',
      title: 'No Index',
      type: 'boolean',
      description: 'Empêcher les moteurs de recherche d\'indexer cette page',
      initialValue: false,
    },
    {
      name: 'nofollow',
      title: 'No Follow',
      type: 'boolean',
      description: 'Empêcher les moteurs de recherche de suivre les liens de cette page',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }) {
      return {
        title: title || 'SEO non configuré',
        subtitle: description ? description.substring(0, 50) + '...' : '',
      }
    },
  },
}
