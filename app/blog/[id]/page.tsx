import { notFound } from 'next/navigation'
import Link from 'next/link'

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: 'The Future of MSME Financing in Digital Age',
    content: `The digital transformation of MSME financing is revolutionizing how small businesses access capital. 
    With the advent of fintech solutions, traditional barriers to financing are being broken down, making it easier 
    for small businesses to grow and thrive in the digital economy.

    Key trends in digital MSME financing include:
    - AI-powered credit scoring
    - Blockchain-based supply chain finance
    - Digital lending platforms
    - Automated loan processing
    
    These innovations are not just changing how businesses access capital, but also how they manage their finances 
    and grow their operations.`,
    category: 'Digital Banking',
    date: '2024-03-20',
    readTime: '5 min read',
    author: 'John Smith',
  },
  {
    id: 2,
    title: 'Fintech Solutions for Small Businesses',
    content: `Fintech innovations are transforming how small businesses operate and grow. From digital payments to 
    automated accounting, these solutions are making financial management more efficient and accessible.

    Key benefits for small businesses:
    - Reduced operational costs
    - Improved cash flow management
    - Better access to financing
    - Enhanced security and compliance
    
    Small businesses that embrace fintech solutions are seeing significant improvements in their operations and growth.`,
    category: 'Fintech',
    date: '2024-03-19',
    readTime: '4 min read',
    author: 'Sarah Johnson',
  },
  {
    id: 3,
    title: 'Understanding MSME Loan Requirements',
    content: `Navigating the world of MSME loans can be complex, but understanding the requirements is crucial for 
    successful financing. This guide breaks down everything you need to know about MSME loan eligibility and documentation.

    Essential requirements include:
    - Business registration documents
    - Financial statements
    - Tax returns
    - Business plan
    - Collateral documentation
    
    Proper preparation of these documents can significantly improve your chances of loan approval.`,
    category: 'Loans',
    date: '2024-03-18',
    readTime: '6 min read',
    author: 'Michael Chen',
  }
]

interface PageProps {
  params: {
    id: string
  }
}

export default function BlogPost({ params }: PageProps) {
  const postId = Number(params.id)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
        ← Back to Articles
      </Link>
      
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <span className="text-sm text-blue-600 font-medium">{post.category}</span>
          <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  )
} 