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
              name: 'mediaType',
              title: 'Media Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Image', value: 'image' },
                  { title: 'Video', value: 'video' },
                ],
                layout: 'radio',
              },
              initialValue: 'image',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              hidden: ({ parent }) => parent?.mediaType !== 'image',
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.parent?.mediaType === 'image' && !value) {
                    return 'Image is required when media type is image';
                  }
                  return true;
                }),
            },
            {
              name: 'video',
              title: 'Video',
              type: 'file',
              options: {
                accept: 'video/*',
              },
              hidden: ({ parent }) => parent?.mediaType !== 'video',
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.parent?.mediaType === 'video' && !value) {
                    return 'Video is required when media type is video';
                  }
                  return true;
                }),
            },
            {
              name: 'videoPoster',
              title: 'Video Poster (Thumbnail)',
              type: 'image',
              options: {
                hotspot: true,
              },
              hidden: ({ parent }) => parent?.mediaType !== 'video',
              description: 'Optional thumbnail image for the video',
            },
          ],
          preview: {
            select: {
              mediaType: 'mediaType',
              image: 'image',
              video: 'video',
              videoPoster: 'videoPoster',
            },
            prepare({ mediaType, image, video, videoPoster }) {
              return {
                title: mediaType === 'video' ? 'Video' : 'Image',
                media: mediaType === 'video' ? (videoPoster || video) : image,
              };
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
