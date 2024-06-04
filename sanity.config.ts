import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { media } from 'sanity-plugin-media'
import deskStructure from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'bergendal.dk',

  projectId: '5pk6dy85',
  dataset: 'production',

  plugins: [
    structureTool({ structure: deskStructure }),
    media(),
  ],

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      const { type } = creationContext;
      const DISABLED_TYPES = [
        'about',
        'contributionsToResearch',
        'cvAndContact',
        'textAndArchive',
        'mainPageTop'
      ];
      if (type === 'global') {
        return prev.filter((template) => !DISABLED_TYPES.includes(template.templateId));
      }
      return prev;
    },
  },

  schema: {
    types: schemaTypes,
  },
})
