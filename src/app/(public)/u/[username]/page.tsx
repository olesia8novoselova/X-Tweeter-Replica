import type { Metadata } from 'next';
import { Profile } from './Profile';

export const metadata: Metadata = {
  title: 'User Profile',
  description: 'View user profile and tweets',
};

export default function ProfilePage() {
    return <Profile />;
}
