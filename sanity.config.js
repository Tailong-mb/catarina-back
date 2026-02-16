import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'template-folio',

  projectId: 'xgm0da5z',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Folio Template')
          .items([
            // Global Configuration
            S.listItem()
              .title('Global Configuration')
              .child(S.document().schemaType('globale').documentId('globale')),

            // Separator
            S.divider(),

            // Pages
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.listItem()
                      .title('Home Page')
                      .child(S.document().schemaType('pageHome').documentId('pageHome')),
                    S.listItem()
                      .title('About Page')
                      .child(S.document().schemaType('pageAbout').documentId('pageAbout')),
                    S.listItem()
                      .title('Playground Page')
                      .child(
                        S.document().schemaType('pagePlayground').documentId('pagePlayground'),
                      ),
                  ]),
              ),

            // Separator
            S.divider(),

            // Albums
            S.listItem().title('Albums').child(S.documentTypeList('album').title('Albums')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
