export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  live: string
  featured: boolean
  gradient: string
  category: string
  images: string[]
  challenges: string[]
  solutions: string[]
  features: string[]
  timeline: string
  teamSize: string
  role: string
}

export const projects: Project[] = [
  {
   slug: "placeholder-project",
    title: "Placeholder Project",
    description: "This is a placeholder project for demonstration purposes",
    longDescription: "This project serves as a placeholder to demonstrate the structure and content of a project entry.",
    tech: ["placeholder", "placeholder", "placeholder"],
    github: "github.com",
    live: "https://placeholder.com",
    featured: false,
    gradient: "from-gray-500 to-gray-700",
    category: "Placeholder",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges: [
      "This is a placeholder challenge for demonstration purposes",
      "Another placeholder challenge to show structure",
    ],
    solutions: [
      "This is a placeholder solution for demonstration purposes",
      "Another placeholder solution to show structure",
    ],
    features: [
      "This is a placeholder feature for demonstration purposes",
      "Another placeholder feature to show structure",
    ],
    timeline: "1 month",
    teamSize: "1 developer",
    role: "Placeholder Developer",
  },
  {
    slug: "ai-analytics-dashboard",
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights and predictive analytics",
    longDescription: `A comprehensive analytics platform that leverages artificial intelligence to provide real-time insights and predictive analytics for business intelligence. The platform processes large datasets, identifies patterns, and presents actionable insights through interactive visualizations.

The system integrates multiple data sources, applies machine learning algorithms for trend analysis, and provides customizable dashboards for different user roles. Built with scalability in mind, it handles millions of data points while maintaining sub-second query response times.`,
    tech: ["React", "D3.js", "Python", "TensorFlow", "AWS", "WebSocket", "PostgreSQL", "Redis"],
    github: "https://github.com/johndeveloper/ai-analytics",
    live: "https://analytics-demo.johndeveloper.com",
    featured: true,
    gradient: "from-purple-500 via-pink-500 to-red-500",
    category: "Full-Stack",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges: [
      "Processing and visualizing large datasets in real-time",
      "Implementing complex machine learning models for predictive analytics",
      "Ensuring sub-second response times for interactive dashboards",
      "Managing state synchronization across multiple dashboard components",
    ],
    solutions: [
      "Implemented data streaming with WebSockets and optimized database queries",
      "Used TensorFlow.js for client-side ML inference and Python backend for training",
      "Applied aggressive caching strategies with Redis and database indexing",
      "Utilized React Context and custom hooks for efficient state management",
    ],
    features: [
      "Real-time data streaming and visualization",
      "Predictive analytics with machine learning models",
      "Customizable dashboard layouts and widgets",
      "Multi-tenant architecture with role-based access",
      "Export capabilities for reports and data",
      "Mobile-responsive design for on-the-go access",
    ],
    timeline: "6 months",
    teamSize: "4 developers",
    role: "Lead Full-Stack Developer",
  },
  {
    slug: "blockchain-trading-platform",
    title: "Blockchain Trading Platform",
    description: "Decentralized trading platform with smart contracts and real-time market data",
    longDescription: `A sophisticated decentralized trading platform built on Ethereum blockchain, featuring automated market making, yield farming, and comprehensive portfolio management. The platform enables users to trade cryptocurrencies, provide liquidity, and earn rewards through various DeFi mechanisms.

The system includes custom smart contracts for secure trading, real-time price feeds, and advanced trading features like limit orders and stop-losses. Built with security as a priority, all smart contracts have been audited and tested extensively.`,
    tech: ["Next.js", "Web3.js", "Solidity", "Node.js", "Redis", "Ethereum", "IPFS"],
    github: "https://github.com/johndeveloper/defi-platform",
    live: "https://trading.johndeveloper.com",
    featured: true,
    gradient: "from-green-400 via-blue-500 to-purple-600",
    category: "Blockchain",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges: [
      "Ensuring smart contract security and gas optimization",
      "Handling real-time price feeds and market data",
      "Managing complex DeFi protocols and integrations",
      "Providing seamless user experience with Web3 wallets",
    ],
    solutions: [
      "Implemented comprehensive testing suite and security audits for smart contracts",
      "Used Chainlink oracles for reliable price feeds and WebSocket connections",
      "Created modular smart contract architecture for easy upgrades and maintenance",
      "Built intuitive wallet connection flow with multiple wallet support",
    ],
    features: [
      "Decentralized spot and margin trading",
      "Automated market making (AMM) pools",
      "Yield farming and liquidity mining",
      "Portfolio tracking and analytics",
      "Multi-wallet support (MetaMask, WalletConnect)",
      "Advanced order types and trading tools",
    ],
    timeline: "8 months",
    teamSize: "5 developers",
    role: "Blockchain Lead Developer",
  },
  {
    slug: "ar-shopping-experience",
    title: "AR Shopping Experience",
    description: "Augmented reality e-commerce app with 3D product visualization",
    longDescription: `An innovative mobile e-commerce application that uses augmented reality to allow customers to visualize products in their real environment before purchasing. The app features 3D product models, spatial tracking, and seamless integration with payment systems.

Users can place furniture, decorations, and other products in their space using their phone's camera, see how items look from different angles, and make informed purchasing decisions. The app includes social sharing features and AI-powered recommendations based on user preferences and space analysis.`,
    tech: ["React Native", "Three.js", "ARKit", "ARCore", "Firebase", "Stripe", "Node.js"],
    github: "https://github.com/johndeveloper/ar-shopping",
    live: "https://apps.apple.com/ar-shopping-app",
    featured: false,
    gradient: "from-yellow-400 via-red-500 to-pink-500",
    category: "Mobile",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges: [
      "Implementing accurate AR tracking and object placement",
      "Optimizing 3D models for mobile performance",
      "Handling different lighting conditions and environments",
      "Creating intuitive AR user interface and interactions",
    ],
    solutions: [
      "Used ARKit/ARCore native capabilities with React Native bridges",
      "Implemented LOD (Level of Detail) system for 3D models",
      "Applied dynamic lighting estimation and shadow rendering",
      "Designed gesture-based controls with visual feedback",
    ],
    features: [
      "AR product visualization in real environments",
      "3D model interaction and customization",
      "Social sharing of AR experiences",
      "AI-powered product recommendations",
      "Seamless checkout and payment processing",
      "Wishlist and favorites management",
    ],
    timeline: "5 months",
    teamSize: "3 developers",
    role: "Mobile AR Developer",
  },
  {
    slug: "realtime-collaboration-tool",
    title: "Real-time Collaboration Tool",
    description: "Slack-like collaboration platform with real-time messaging, file sharing, and video calls",
    longDescription: `A comprehensive team collaboration platform designed to enhance remote work productivity. The application features real-time messaging, file sharing, video conferencing, and project management tools all integrated into a single, cohesive platform.

Built with scalability in mind, the platform supports thousands of concurrent users across multiple organizations. It includes advanced features like message threading, custom emoji, bot integrations, and comprehensive search functionality across all content types.`,
    tech: ["Next.js", "Socket.io", "PostgreSQL", "Redis", "WebRTC", "AWS S3", "Docker"],
    github: "https://github.com/johndeveloper/collaboration-platform",
    live: "https://collaborate.johndeveloper.com",
    featured: false,
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    category: "Full-Stack",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges: [
      "Scaling real-time messaging for thousands of concurrent users",
      "Implementing reliable video calling with WebRTC",
      "Managing file uploads and storage efficiently",
      "Ensuring message delivery and synchronization across devices",
    ],
    solutions: [
      "Implemented horizontal scaling with Redis pub/sub and Socket.io clustering",
      "Built custom WebRTC signaling server with fallback to TURN servers",
      "Used AWS S3 with CDN for file storage and progressive upload",
      "Created message queue system with delivery confirmations and offline sync",
    ],
    features: [
      "Real-time messaging with threading",
      "Video and audio calling",
      "File sharing and collaborative editing",
      "Channel and direct message organization",
      "Bot integrations and custom commands",
      "Advanced search and message history",
    ],
    timeline: "7 months",
    teamSize: "6 developers",
    role: "Senior Full-Stack Developer",
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}
