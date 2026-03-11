import { redirect, useParams } from 'next/navigation';

export default function Home() {
	return redirect('/my');
}
