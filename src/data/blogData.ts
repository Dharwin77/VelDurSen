// Blog Post Type Definition
export interface BlogPost {
    id: string;
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: string;
    image: string;
    content: {
        introduction: string;
        sections: {
            heading: string;
            content: string[];
            bullets?: string[];
        }[];
        realWorldApplications: {
            title: string;
            description: string;
        }[];
        benefits: {
            heading: string;
            description: string;
            metrics: string[];
        };
        challenges: {
            challenge: string;
            mitigation: string;
        }[];
        conclusion: string;
        keyTakeaways: string[];
    };
}

// Export empty array - all posts are in additionalBlogData.ts
export const blogPosts: BlogPost[] = [];
