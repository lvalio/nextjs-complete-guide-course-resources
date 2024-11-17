import Link from 'next/link'; 

export default function MealsSlugPage({ params }) { 
    return (
        <div>
            <h1>Meals Slug Page</h1>
            <p>Slug: {params.slug}</p>
            <Link href={'/'}>Back to Home</Link>
        </div>
    );
}