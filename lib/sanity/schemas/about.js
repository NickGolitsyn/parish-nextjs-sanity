import { CalendarIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "about",
      type: "text",
      title: "About Our Parish"
    }),
    defineField({
      name: "aboutSaints",
      type: "text",
      title: "About Our Saints"
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About',
      }
    },
  },
})