
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
}

export const blogs: BlogPost[] = [
    {
        id: "1",
        title: "The Power of Visual Storytelling in Nepal's Digital Landscape",
        slug: "power-of-visual-storytelling-nepal",
        excerpt: "Discover why storytelling is becoming the most effective tool for brands in Kathmandu to connect with their audience.",
        content: "Full content here...",
        category: "Storytelling",
        date: "Feb 12, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
    },
    {
        id: "2",
        title: "Why Strategy Must Come Before Design",
        slug: "strategy-before-design",
        excerpt: "Building a brand is more than just a logo. Learn why deep research and strategy are the foundation of successful branding.",
        content: "Full content here...",
        category: "Branding",
        date: "Feb 5, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
    },
    {
        id: "3",
        title: "Digital Marketing Trends to Watch in Kathmandu 2026",
        slug: "digital-marketing-trends-kathmandu-2026",
        excerpt: "Stay ahead of the competition with these emerging digital marketing trends specific to the Nepalese market.",
        content: "Full content here...",
        category: "Marketing",
        date: "Jan 28, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    }
];
