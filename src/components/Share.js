import React from "react"
import { DiscussionEmbed } from "disqus-react"

const Share = ({ pageContext, post, data }) => {
  const baseUrl = "https://gatsbytutorial.co.uk/"

  const disqusShortname = "https-gatsbytutorial-co-uk"
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    titile: post.title,
    url: baseUrl + pageContext.slug,
  }

  return (
    <>
      <h3 className="text-center">Share this post</h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a
              href={
                "https://facebook.com/sharer/sharer.php?u=" +
                baseUrl +
                pageContext.slug
              }
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href={
                "https://twitter.com/sharer/share?url=" +
                baseUrl +
                pageContext.slug +
                "&text=" +
                post.title +
                "&via" +
                "twitterHandle"
              }
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href={
                "https://plus.google.com/sharer/share?url=" +
                baseUrl +
                pageContext.slug
              }
              className="google"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href={
                "https://linkedin.com/sharerAtricle?url=" +
                baseUrl +
                pageContext.slug
              }
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </>
  )
}

export default Share
