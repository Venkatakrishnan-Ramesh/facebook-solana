import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Facebook clone',

  projectId: '14txay0t',
  dataset: 'js',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
