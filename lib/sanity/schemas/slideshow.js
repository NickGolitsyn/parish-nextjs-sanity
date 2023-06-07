import { CalendarIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'slideshow',
  title: 'Slideshow',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "slideshowImage",
      type: "array",
      title: "Slideshow",
      of: [{type: 'image'}]
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Slideshow',
      }
    },
  },
})