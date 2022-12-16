import sanityClient from '@sanity/client'
import { env } from 'process'

export const client = sanityClient({
    projectId : 'dxu4rfix',
    dataset:'production',
    apiVersion:'v1',
    token:'sknLEl1eE7gCNLxzeN1vBtqpJuXtVGJp7tWRgFYCKY11tlrijrA5qJvsxQEY38g7ZMYhkQWPpJSKBynfHqdKZapbEgREWQQn3GRwIeYUwKf7m9DEtwSSysw64wIkWPhmi9WkJkSztXw9VTBwKEMeK6d1bRpjnKgim1iHn90rDSZbhnyffueT'
    ,useCdn:false,

} )