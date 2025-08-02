import { ProfileFake } from "./ProfileFake";

export const metadata = {
  title: 'Profile Page',
  description: 'View your profile and tweets',
};

export default function ProfileFakePage() {
    return <ProfileFake />;
}