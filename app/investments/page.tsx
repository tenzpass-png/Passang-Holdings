import { notFound } from 'next/navigation';

export default function Investments() {
  // Make this route inaccessible by returning a 404
  notFound();
  return null;
}
