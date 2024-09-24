import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import { source } from 'framer-motion/client';


export const client = sanityClient({
    projectId: "ecb1nuya"
    // process.env.REACT_APP_SANITY_PROJECT_ID
    //  "ecb1nuya"
    ,
    dataset: "production",
    apiVersion: "v2021-03-25",
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source); 