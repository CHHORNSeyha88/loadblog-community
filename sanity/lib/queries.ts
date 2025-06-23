import { defineQuery } from "next-sanity";

// queries/startups.ts or similar
// queries/startups.ts
export const STARTUPS_QUERY = `*[
  _type == "startup" &&
  defined(slug.current) &&
  (
    !defined($search) ||
    title match $search ||
    category match $search ||
    author->name match $search
  )
] | order(_createdAt desc) {
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

export const DETAIL_STARTUPS_QUERY = defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id, 
    title,
    slug, 
    _createdAt,
    author ->{
      _id, name, username, image, bio
    }, 
    view, 
    description, category, image, pitch,
}`)