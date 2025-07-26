export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  gradient: string
  featured: boolean
  author: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "placeholder-post",
    title: "Placeholder Blog Post",
    excerpt:
      "This is a placeholder blog post to demonstrate the structure of the blog posts data. It will be replaced with actual content soon.",
    content: `# Placeholder Blog Post`,
    date: "Jan 1, 2025",
    readTime: "5 min read",
    category: "General",
    gradient: "from-gray-500 to-gray-600",
    featured: false,
    author: "placeholder",
    tags: ["Placeholder", "Demo", "Blog"],
  },
  {
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications with Modern Architecture",
    excerpt:
      "Exploring advanced patterns and best practices for large-scale React applications in 2024. Learn about component composition, state management, and performance optimization.",
    content: `# Building Scalable React Applications with Modern Architecture

## Introduction

Building scalable React applications requires careful planning, architectural decisions, and adherence to best practices. In this comprehensive guide, we'll explore the key principles and patterns that make React applications maintainable and performant at scale.

## Component Architecture

### Component Composition

One of the most powerful patterns in React is component composition. Instead of building monolithic components, we should focus on creating small, reusable pieces that can be combined to create complex UIs.

\`\`\`jsx
// Instead of this monolithic component
function UserProfile({ user, onEdit, onDelete }) {
  return (
    <div className="user-profile">
      <img src={user.avatar || "/placeholder.svg"} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

// Use composition
function UserProfile({ user, children }) {
  return (
    <div className="user-profile">
      <UserAvatar src={user.avatar} alt={user.name} />
      <UserInfo name={user.name} email={user.email} />
      {children}
    </div>
  )
}
\`\`\`

### Container and Presentational Components

Separating logic from presentation makes components more testable and reusable:

\`\`\`jsx
// Container Component (Logic)
function UserListContainer() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers().then(setUsers).finally(() => setLoading(false))
  }, [])

  return <UserList users={users} loading={loading} />
}

// Presentational Component (UI)
function UserList({ users, loading }) {
  if (loading) return <LoadingSpinner />
  
  return (
    <ul>
      {users.map(user => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  )
}
\`\`\`

## State Management

### Local State vs Global State

Not everything needs to be in global state. Use local state for component-specific data and global state for data that needs to be shared across components.

\`\`\`jsx
// Local state for form inputs
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Handle form submission
}

// Global state for user authentication
const useAuth = () => {
  const { user, login, logout } = useContext(AuthContext)
  return { user, login, logout }
}
\`\`\`

### State Management Libraries

For complex applications, consider using state management libraries:

- **Zustand**: Lightweight and simple
- **Redux Toolkit**: Powerful but with more boilerplate
- **Jotai**: Atomic state management

## Performance Optimization

### Memoization

Use React.memo, useMemo, and useCallback strategically:

\`\`\`jsx
// Memoize expensive calculations
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveProcessing(item))
  }, [data])

  const handleClick = useCallback((id) => {
    // Handle click logic
  }, [])

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} onClick={handleClick} />
      ))}
    </div>
  )
})
\`\`\`

### Code Splitting

Implement route-based and component-based code splitting:

\`\`\`jsx
// Route-based splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

// Component-based splitting
const HeavyComponent = lazy(() => import('./components/HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Suspense>
  )
}
\`\`\`

## Testing Strategy

### Unit Testing

Test individual components in isolation:

\`\`\`jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

test('calls onClick when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click me</Button>)
  
  fireEvent.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
\`\`\`

### Integration Testing

Test component interactions:

\`\`\`jsx
test('user can submit form', async () => {
  render(<ContactForm />)
  
  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: 'John Doe' }
  })
  
  fireEvent.click(screen.getByRole('button', { name: /submit/i }))
  
  await waitFor(() => {
    expect(screen.getByText(/success/i)).toBeInTheDocument()
  })
})
\`\`\`

## Conclusion

Building scalable React applications is about making the right architectural decisions early and maintaining consistency throughout development. Focus on component composition, proper state management, performance optimization, and comprehensive testing.

Remember: **Start simple, then scale**. Don't over-engineer from the beginning, but design your architecture to accommodate growth.`,
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "React",
    gradient: "from-blue-500 to-purple-600",
    featured: true,
    author: "John Developer",
    tags: ["React", "Architecture", "Performance", "Best Practices"],
  },
  {
    slug: "future-of-web-development-ai",
    title: "The Future of Web Development: AI Integration",
    excerpt:
      "How artificial intelligence is reshaping the way we build and interact with web applications. Discover the latest AI tools and frameworks for developers.",
    content: `# The Future of Web Development: AI Integration

## The AI Revolution in Web Development

Artificial Intelligence is no longer a futuristic concept—it's actively transforming how we build, deploy, and interact with web applications. From code generation to user experience personalization, AI is becoming an integral part of the modern developer's toolkit.

## AI-Powered Development Tools

### Code Generation and Completion

AI-powered code assistants are revolutionizing the development process:

\`\`\`javascript
// GitHub Copilot can suggest entire functions
function calculateTotalPrice(items, taxRate, discountCode) {
  // AI suggests the complete implementation
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = applyDiscount(subtotal, discountCode)
  const tax = (subtotal - discount) * taxRate
  return subtotal - discount + tax
}
\`\`\`

### Automated Testing

AI can generate comprehensive test suites:

\`\`\`javascript
// AI-generated test cases
describe('User Authentication', () => {
  test('should login with valid credentials', async () => {
    // AI understands context and generates relevant tests
  })
  
  test('should handle invalid password gracefully', async () => {
    // Comprehensive edge case testing
  })
})
\`\`\`

## AI in User Experience

### Personalization Engines

Modern web applications use AI to create personalized experiences:

\`\`\`javascript
// AI-powered content recommendation
const PersonalizedFeed = ({ userId }) => {
  const [recommendations, setRecommendations] = useState([])
  
  useEffect(() => {
    // AI analyzes user behavior and preferences
    aiService.getPersonalizedContent(userId)
      .then(setRecommendations)
  }, [userId])
  
  return (
    <div>
      {recommendations.map(item => (
        <ContentCard key={item.id} content={item} />
      ))}
    </div>
  )
}
\`\`\`

### Intelligent Search

AI-powered search goes beyond keyword matching:

\`\`\`javascript
// Semantic search implementation
const useSemanticSearch = () => {
  const search = async (query) => {
    // AI understands intent, not just keywords
    const results = await aiSearch.semanticQuery({
      query,
      context: 'e-commerce',
      userPreferences: getUserPreferences()
    })
    
    return results.map(result => ({
      ...result,
      relevanceScore: result.aiScore
    }))
  }
  
  return { search }
}
\`\`\`

## AI-Enhanced Development Workflows

### Automated Code Review

AI can identify potential issues before human review:

\`\`\`yaml
# AI-powered CI/CD pipeline
name: AI Code Review
on: [pull_request]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: AI Code Analysis
        uses: ai-reviewer/action@v1
        with:
          check-security: true
          check-performance: true
          suggest-improvements: true
\`\`\`

### Intelligent Debugging

AI assistants can help identify and fix bugs:

\`\`\`javascript
// AI-powered error analysis
const debugWithAI = async (error, codeContext) => {
  const analysis = await aiDebugger.analyze({
    error: error.message,
    stack: error.stack,
    context: codeContext,
    recentChanges: getRecentCommits()
  })
  
  return {
    possibleCauses: analysis.causes,
    suggestedFixes: analysis.fixes,
    preventionTips: analysis.prevention
  }
}
\`\`\`

## Building AI-Integrated Applications

### Chatbots and Virtual Assistants

\`\`\`javascript
// AI chatbot integration
const ChatBot = () => {
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  
  const sendMessage = async (message) => {
    setIsTyping(true)
    
    const response = await aiChatService.processMessage({
      message,
      context: getConversationContext(),
      userProfile: getCurrentUser()
    })
    
    setMessages(prev => [...prev, 
      { type: 'user', content: message },
      { type: 'ai', content: response.text }
    ])
    setIsTyping(false)
  }
  
  return (
    <ChatInterface 
      messages={messages}
      onSendMessage={sendMessage}
      isTyping={isTyping}
    />
  )
}
\`\`\`

### Content Generation

AI can help create dynamic content:

\`\`\`javascript
// AI content generation
const generateProductDescription = async (product) => {
  const description = await aiContentGenerator.create({
    type: 'product-description',
    data: {
      name: product.name,
      features: product.features,
      category: product.category,
      targetAudience: product.audience
    },
    tone: 'professional',
    length: 'medium'
  })
  
  return description
}
\`\`\`

## Challenges and Considerations

### Ethical AI Development

- **Bias Prevention**: Ensure AI systems are fair and inclusive
- **Transparency**: Make AI decisions explainable
- **Privacy**: Protect user data in AI processing

### Performance Considerations

\`\`\`javascript
// Optimize AI API calls
const useAIWithCaching = () => {
  const cache = new Map()
  
  const callAI = async (input) => {
    const cacheKey = JSON.stringify(input)
    
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }
    
    const result = await aiService.process(input)
    cache.set(cacheKey, result)
    
    return result
  }
  
  return { callAI }
}
\`\`\`

## The Road Ahead

The future of web development will be increasingly AI-driven:

1. **No-Code/Low-Code Evolution**: AI will make development accessible to non-programmers
2. **Automated Optimization**: AI will continuously optimize applications
3. **Predictive Development**: AI will anticipate user needs and suggest features
4. **Intelligent Deployment**: AI will manage scaling and resource allocation

## Conclusion

AI integration in web development is not just a trend—it's the future. Developers who embrace AI tools and learn to integrate AI capabilities into their applications will have a significant advantage.

The key is to start experimenting now, understand the capabilities and limitations, and gradually integrate AI into your development workflow and applications.

**Remember**: AI is a tool to augment human creativity and productivity, not replace it. The most successful applications will be those that thoughtfully combine AI capabilities with human insight and design.`,
    date: "Dec 10, 2024",
    readTime: "12 min read",
    category: "AI",
    gradient: "from-green-500 to-teal-600",
    featured: true,
    author: "John Developer",
    tags: ["AI", "Machine Learning", "Web Development", "Future Tech"],
  },
  {
    slug: "nextjs-14-server-components",
    title: "Mastering Next.js 14: Server Components Deep Dive",
    excerpt:
      "Understanding the power of React Server Components and how they're changing full-stack development. Complete guide with practical examples.",
    content: `# Mastering Next.js 14: Server Components Deep Dive

## Introduction to Server Components

React Server Components represent a paradigm shift in how we think about React applications. With Next.js 14, Server Components are now stable and ready for production use.

## What Are Server Components?

Server Components run on the server and render to a special format that can be streamed to the client. They have several key characteristics:

- **Zero Bundle Size**: Server Components don't add to your JavaScript bundle
- **Direct Backend Access**: Can directly access databases, file systems, etc.
- **Automatic Code Splitting**: Only Client Components are sent to the browser
- **SEO Friendly**: Rendered on the server for better SEO

## Server vs Client Components

\`\`\`jsx
// Server Component (default in app directory)
async function BlogPost({ slug }) {
  // This runs on the server
  const post = await db.post.findUnique({ where: { slug } })
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <CommentSection postId={post.id} /> {/* Client Component */}
    </article>
  )
}

// Client Component (needs 'use client' directive)
'use client'
function CommentSection({ postId }) {
  const [comments, setComments] = useState([])
  
  // This runs in the browser
  useEffect(() => {
    fetchComments(postId).then(setComments)
  }, [postId])
  
  return (
    <div>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
\`\`\`

## Data Fetching Patterns

### Direct Database Access

\`\`\`jsx
// Server Component with direct database access
async function UserProfile({ userId }) {
  // No API route needed!
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { posts: true, followers: true }
  })
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Posts: {user.posts.length}</p>
      <p>Followers: {user.followers.length}</p>
    </div>
  )
}
\`\`\`

### Parallel Data Fetching

\`\`\`jsx
// Fetch multiple data sources in parallel
async function Dashboard() {
  // These run in parallel
  const [user, posts, analytics] = await Promise.all([
    getUser(),
    getPosts(),
    getAnalytics()
  ])
  
  return (
    <div>
      <UserWidget user={user} />
      <PostsList posts={posts} />
      <AnalyticsChart data={analytics} />
    </div>
  )
}
\`\`\`

### Streaming with Suspense

\`\`\`jsx
// Stream components as they load
function BlogPage() {
  return (
    <div>
      <Header />
      <Suspense fallback={<PostSkeleton />}>
        <BlogPost />
      </Suspense>
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments />
      </Suspense>
    </div>
  )
}

async function BlogPost() {
  // Slow database query
  const post = await getPostWithDelay()
  return <article>{post.content}</article>
}

async function Comments() {
  // Another slow query
  const comments = await getCommentsWithDelay()
  return <CommentsList comments={comments} />
}
\`\`\`

## Advanced Patterns

### Server Actions

\`\`\`jsx
// Server Action for form handling
async function createPost(formData) {
  'use server'
  
  const title = formData.get('title')
  const content = formData.get('content')
  
  await prisma.post.create({
    data: { title, content }
  })
  
  revalidatePath('/blog')
  redirect('/blog')
}

// Use in a Server Component
function CreatePostForm() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Post title" />
      <textarea name="content" placeholder="Post content" />
      <button type="submit">Create Post</button>
    </form>
  )
}
\`\`\`

### Composition Patterns

\`\`\`jsx
// Layout Server Component
async function BlogLayout({ children }) {
  const categories = await getCategories()
  
  return (
    <div className="blog-layout">
      <Sidebar categories={categories} />
      <main>{children}</main>
    </div>
  )
}

// Page Server Component
async function BlogPage({ params }) {
  const posts = await getPostsByCategory(params.category)
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
\`\`\`

## Performance Benefits

### Bundle Size Reduction

\`\`\`jsx
// Before: Large client bundle
'use client'
import { Chart } from 'chart.js' // Large library
import { format } from 'date-fns' // Another library

function Analytics({ data }) {
  return <Chart data={processData(data)} />
}

// After: Server Component (zero bundle impact)
import { Chart } from 'chart.js'
import { format } from 'date-fns'

async function Analytics() {
  const data = await getAnalyticsData()
  const processedData = processData(data) // Runs on server
  
  return <ChartRenderer data={processedData} />
}
\`\`\`

### Caching Strategies

\`\`\`jsx
// Automatic request deduplication
async function UserProfile({ userId }) {
  // This request is automatically cached and deduped
  const user = await fetch(\`/api/users/\${userId}\`)
  return <div>{user.name}</div>
}

// Manual caching control
async function getUser(id) {
  const user = await fetch(\`/api/users/\${id}\`, {
    next: { 
      revalidate: 3600, // Cache for 1 hour
      tags: ['user', \`user-\${id}\`] // Cache tags for invalidation
    }
  })
  return user.json()
}
\`\`\`

## Migration Strategies

### Gradual Migration

\`\`\`jsx
// Start with Server Components for static content
function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
      {/* Keep interactive parts as Client Components */}
      <LikeButton postId={post.id} />
      <CommentForm postId={post.id} />
    </article>
  )
}

// Gradually move more logic to server
async function BlogPost({ slug }) {
  const post = await getPost(slug)
  const likes = await getLikes(post.id)
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <LikeButton postId={post.id} initialLikes={likes} />
    </article>
  )
}
\`\`\`

## Best Practices

### Component Boundaries

\`\`\`jsx
// Good: Clear separation of concerns
async function ProductPage({ productId }) {
  const product = await getProduct(productId)
  
  return (
    <div>
      <ProductInfo product={product} /> {/* Server Component */}
      <AddToCartButton productId={productId} /> {/* Client Component */}
      <ReviewsList productId={productId} /> {/* Server Component */}
    </div>
  )
}

// Avoid: Mixing server and client logic
'use client'
function ProductPage({ productId }) {
  const [product, setProduct] = useState(null)
  
  useEffect(() => {
    // This should be done on the server
    getProduct(productId).then(setProduct)
  }, [productId])
  
  return product ? <ProductDisplay product={product} /> : <Loading />
}
\`\`\`

### Error Handling

\`\`\`jsx
// Error boundaries for Server Components
function ProductPage({ productId }) {
  return (
    <ErrorBoundary fallback={<ProductError />}>
      <Suspense fallback={<ProductSkeleton />}>
        <ProductDetails productId={productId} />
      </Suspense>
    </ErrorBoundary>
  )
}

async function ProductDetails({ productId }) {
  try {
    const product = await getProduct(productId)
    return <ProductDisplay product={product} />
  } catch (error) {
    throw new Error('Failed to load product')
  }
}
\`\`\`

## Conclusion

Server Components in Next.js 14 represent a fundamental shift toward more efficient, performant web applications. By moving computation to the server, we can:

- Reduce bundle sizes
- Improve initial page load times
- Simplify data fetching
- Enhance SEO

The key is understanding when to use Server Components vs Client Components and designing your application architecture accordingly.

**Start your migration today** by identifying static content that can be moved to Server Components, then gradually expand your usage as you become more comfortable with the patterns.`,
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "Next.js",
    gradient: "from-purple-500 to-pink-600",
    featured: false,
    author: "John Developer",
    tags: ["Next.js", "React", "Server Components", "Performance"],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}
