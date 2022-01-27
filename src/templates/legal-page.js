import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const authorImage = post.frontmatter.authorFull
    ? getImage(post.frontmatter.authorFull.authorimage)
    : ""

  function AuthorWidget() {
    if (post.frontmatter.authorFull) {
      return (
        <div className="mt-6 flex items-center justify-center">
          <div className="flex-shrink-0">
            <a href={post.frontmatter.authorFull.url}>
              <span className="sr-only">
                {post.frontmatter.authorFull.name}
              </span>
              <GatsbyImage
                className="h-10 w-10 rounded-full"
                image={authorImage}
                alt={post.frontmatter.authorFull.name}
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a
                href={post.frontmatter.authorFull.url}
                className="hover:underline"
              >
                {post.frontmatter.authorFull.name}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              {/* <span>5/2/2021</span> */}
              <time dateTime={post.frontmatter.date}>
                {post.frontmatter.date}
              </time>
            </div>
          </div>
        </div>
      )
    } else {
      return <span></span>
    }
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={`${post.frontmatter.title} | Swapstack Blog`}
        description={post.frontmatter.description || post.excerpt}
        thumbnail={post.frontmatter.thumbnail}
      />

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Blog Post
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {post.frontmatter.title}
              </span>
            </h1>
            <AuthorWidget />
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <section
              className="mt-8 text-xl text-gray-500 leading-8"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail
        authorFull {
          email
          name
          url
          shortbio
          title
          authorimage {
            absolutePath
            relativePath
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
