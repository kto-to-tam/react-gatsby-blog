import React from "react"

import Search from "./Search"
import RecentPosts from "./RecentPosts"
import Advertisement from "./Advertisement"
import PostAuthorData from "./PostAuthorData"

const Sidebar = ({ author, authorFluid }) => {
  return (
    <>
      {author && <PostAuthorData author={author} authorFluid={authorFluid} />}

      <Search />
      <Advertisement />
      <RecentPosts />
    </>
  )
}

export default Sidebar
