import { CalendarIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'activities',
  title: 'Activities',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'activitylist',
      type: 'array',
      title: 'Activity List',
      of: [
        {
          type: "object",
          title: "Activity",
          fields: [
            {
              name: "activityDate",
              type: "date",
              title: "Date",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "activityDescription",
              type: "text",
              title: "Description",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'activityDate',
            },
            prepare({ title }) {
              return {
                title,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Activities',
      }
    },
  },
})