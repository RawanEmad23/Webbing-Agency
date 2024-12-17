'use client'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import React from 'react'

export default function RichViewer({
    content
}: {content: []}) {
  return (
    content && (
        <BlocksRenderer content={content} />
      )
  )
}
