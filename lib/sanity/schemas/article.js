import { baseLanguage } from '@/sanity.config'

export default article = {
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    }
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`
    }
  }
}
