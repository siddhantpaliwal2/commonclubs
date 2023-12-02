import Link from 'next/link';

export default function LandingPage() {
  return (
    <div>
      <div className='space-y-4'>
        <p className='flex items-center justify-center'>Landing Page</p>
        <div className='flex items-center justify-center'>
          <Link href="/sign-in">
            <a className="your-button-class">Sign In</a> {/* Add your CSS classes if needed */}
          </Link>
        </div>
        <div className='flex items-center justify-center'>
          <Link href="/sign-up">
            <a className="your-button-class">Sign up</a> {/* Add your CSS classes if needed */}
          </Link>
        </div>
      </div>
    </div>
  );
}
