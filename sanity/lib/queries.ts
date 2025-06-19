import { defineQuery } from "next-sanity";

// queries/startups.ts or similar
export const STARTUPS_QUERY = `*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
  _id, 
  title,
  slug, 
  _createdAt,
  author->{
    _id, 
    name, 
    image, 
    bio
  }, 
  view, 
  description, 
  category, 
  image
}`
