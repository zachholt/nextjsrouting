import Link from "next/link";

export default function DynamicPage({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>WELCOME TO Dynamic Page {params.id}</h1>
            <a 
            href="https://www.bing.com" 
            rel="noopener noreferrer"
            >
                <h2>
                    CLICK ME TO GO TO BING IN THIS SAME TAB HA HA HA!!!!!!
                </h2>
            </a>
            <a 
            href="https://www.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            >
                <h3>
                    CLICK ME TO GO TO GOOGLE IN A NEW TAB!
                </h3>
            </a>
        </div>
    );
}
