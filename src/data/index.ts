// Central export point for all blog data
export { blogPosts, type BlogPost } from "./blogData";
export { additionalBlogPosts } from "./additionalBlogData";
import { blogPosts } from "./blogData";
import { additionalBlogPosts } from "./additionalBlogData";

// Merge all blog posts (40 total: 5+ per category)
export const allBlogPosts = [...blogPosts, ...additionalBlogPosts];

// Blog categories
export const blogCategories = [
    "All",
    "Artificial Intelligence",
    "Cloud & Multi-Cloud",
    "Cybersecurity",
    "Data Engineering & Analytics",
    "Sustainability & Green Tech",
    "Industry Insights",
    "Engineering & Architecture",
    "Innovation & Future Tech",
];
