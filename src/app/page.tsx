import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Metadata } from 'next';
import { HOME_OG_IMAGE_URL } from '@/lib/constants';
import Header from "@/app/_components/header"; 

export const generateMetadata = (): Metadata => {
  const allPosts = getAllPosts();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://themehrankhan.site/posts/${post.slug}`,
        "name": post.title,
        "description": post.excerpt
      }))
    }
  };

  const structuredDataString = JSON.stringify(structuredData);

  return {
    title: `TheMehranKhan's Blog`,
    description: `Mehran is a developer, this website is TheMehranKhan posts his thoughts and ideas.`,
    openGraph: {
      images: [HOME_OG_IMAGE_URL],
      title: `TheMehranKhan's Blog`,
      description: `Mehran is a developer, this website is TheMehranKhan posts his thoughts and ideas.`,
      url: 'https://themehrankhan.site',
      siteName: `TheMehranKhan's Blog`,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `TheMehranKhan's Blog`,
      description: `Mehran is a developer, this website is TheMehranKhan posts his thoughts and ideas.`,
      images: [HOME_OG_IMAGE_URL],
    },
    alternates: {
      canonical: 'https://themehrankhan.site',
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'application-name': `TheMehranKhan's Blog`,
      ...JSON.parse(structuredDataString),
    },
  };
};

export default function Index() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <main>
      <Header />  {/* Fixed header */}
        <Container>
          <Intro />
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </main>
    </>
  );
}