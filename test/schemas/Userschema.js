import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
  name: 'movie',
  title: 'Movie',
  type: 'document',
  icon,
  fields: [
    defineField({
      name:'name',
      type:'string',
      title:'Name'
    }),
    defineField({
      name:'walletaddress',
      type:'string',
      title:'Walletaddress'
      ,
    }),
    defineField({
      name:'profileImg',
      type:'string',
      title:'ProfileImg'
    }),
  ]
    },
)
