import Link from 'next/link'

export default function BackToTopLink() {

  return (
    <>
        <Link href="/"><a>Back to Home</a></Link>
        <style jsx>{`
            a {
                text-decoration: underline;
            }
            a:hover{
                cursor: pointer;
            }
        `}
        </style>
    </>
  )
}
