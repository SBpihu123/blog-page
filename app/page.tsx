'use client'

import Link from 'next/link'
import { useState } from 'react'

// Sample blog data - In a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'The Future of MSME Financing in Digital Age',
    excerpt: 'Exploring how digital transformation is reshaping MSME financing...',
    category: 'Digital Banking',
    date: '2024-03-20',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Fintech Solutions for Small Businesses',
    excerpt: 'How fintech innovations are helping small businesses grow...',
    category: 'Fintech',
    date: '2024-03-19',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Understanding MSME Loan Requirements',
    excerpt: 'A comprehensive guide to MSME loan eligibility and documentation...',
    category: 'Loans',
    date: '2024-03-18',
    readTime: '6 min read',
  },
]

const categories = ['All', 'Digital Banking', 'Fintech', 'Loans', 'Investment', 'Technology']

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">MSME Financing & Fintech Blog</h1>
        <p className="text-lg text-gray-600">Latest insights and analysis on MSME financing and fintech innovations</p>
      </header>

      {/* Search and Categories */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="w-full md:w-96">
          <input
            type="search"
            placeholder="Search articles..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn">
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">{post.category}</span>
              <h2 className="text-xl font-semibold mt-2 mb-3">
                <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
