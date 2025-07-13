// app/about/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Blazin\' Reggae Vibes NM',
  description: 'Learn about the mission, crew, and vision behind the New Mexico Reggae Calendar.',
};

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-rasta-yellow mb-4">{children}</h2>
);

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto text-neutral-700 leading-relaxed space-y-12 py-12">
      
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-white mb-2">About New Mexico Reggae Calendar</h1>
        <p className="text-xl font-medium text-neutral-600">One Love, One State, One Vibe</p>
      </section>

      <section>
        <p>
          Welcome to the <strong className="text-neutral-900">New Mexico Reggae Calendar</strong>—your up-to-date guide to every reggae, ska, roots-dub, and dancehall happening across the Land of Enchantment. Whether you're catching a roots legend at Tumbleroot, skanking under the Taos stars, or discovering a local band in Las Cruces, our mission is simple:
        </p>
        <blockquote className="my-6 border-l-4 border-rasta-yellow pl-6 text-lg italic text-neutral-600">
          Connect the people to the riddim... and keep the fire of reggae culture burning bright in New Mexico.
        </blockquote>
      </section>

      <hr className="border-neutral-500/30" />

      <section>
        <SectionHeader>Our Mission</SectionHeader>
        <ol className="list-decimal list-inside space-y-4">
          <li><strong className="text-neutral-900">Amplify the Scene</strong> – Shine a light on New Mexico's vibrant reggae talent—local, regional, and visiting artists.</li>
          <li><strong className="text-neutral-900">Build Community</strong> – Give fans, bands, promoters, and venues a single place to link up, share vibes, and plan meet-ups.</li>
          <li><strong className="text-neutral-900">Celebrate the Culture</strong> – Honor reggae's roots in resistance, unity, and upliftment while embracing the Southwest's unique flavor.</li>
        </ol>
      </section>
      
      {/* ... and so on for the rest of the About page content ... */}
      
      <hr className="border-neutral-500/30" />
      
      <section className="text-center">
        <SectionHeader>Love & Respect</SectionHeader>
        <p>Reggae teaches peace, upliftment, and justice. We stand against bigotry, racism, and oppression in every form. All are welcome here—just bring positive energy, respect for one another, and a willingness to dance.</p>
        <blockquote className="my-6 text-xl italic text-neutral-600">
          “None but ourselves can free our minds.” – Bob Marley
        </blockquote>
        <p>Thank you for supporting live music and keeping New Mexico's reggae flame lit. See you at the next dance!</p>
      </section>
    </div>
  );
}