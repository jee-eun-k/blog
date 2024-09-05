import { redirect } from 'next/navigation';

export default async function Home() {
  redirect('/aboutme');
  return <main></main>;
}
