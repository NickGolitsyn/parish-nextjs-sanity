import { CalendarIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "contactText",
      type: "text",
      title: "Contact Text"
    }),

    defineField({
      name: "address",
      type: "string",
      title: "Address"
    }),

    defineField({
      name: "map",
      type: "url",
      title: "Link to map",
    }),

    defineField({
      name: "email",
      type: "string",
      title: "Support Email",
      validation: Rule =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false // Boolean to allow any value that does NOT match pattern
          }
        )
    }),

    defineField({
      name: "phone",
      type: "string",
      title: "Support Phone"
    }),

    defineField({
      name: "w3ckey",
      type: "string",
      title: "Web3Forms Access Key",
      description:
        "Enter Access key obtained from web3forms.com. It is required to make the form work."
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact',
      }
    },
  },
})