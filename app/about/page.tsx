// app/about/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Blazin' Reggae Vibes NM', // THE FIX IS HERE
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

      <section>
        <SectionHeader>What We Do</SectionHeader>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-neutral-900">Curated Event Listings</strong> – Concerts, DJ nights, cultural gatherings, and festivals statewide, updated daily.</li>
          <li><strong className="text-neutral-900">Artist Spotlights</strong> – Quick bios and playlists so you can discover who's blazing the stage next.</li>
          <li><strong className="text-neutral-900">Push & Email Alerts</strong> – Opt-in reminders so you never miss a show (coming soon!).</li>
          <li><strong className="text-neutral-900">Mobile-Ready PWA</strong> – Install the calendar on your phone for offline access and on-the-go updates.</li>
        </ul>
      </section>
      
      <hr className="border-neutral-500/30" />

      <section>
        <SectionHeader>Why New Mexico?</SectionHeader>
        <p>From Albuquerque's storied venues to Santa Fe's outdoor plazas, Taos mesa sunsets, and border-town sounds down in Las Cruces, the 505 & 575 are bursting with creativity. We're here to document it all, champion local promoters, and prove reggae thrives far beyond the island shores.</p>
      </section>

      <section>
        <SectionHeader>The Crew</SectionHeader>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-neutral-900">Jerry “DJ EEyo”</strong> – Founder, curator, and lifelong reggae advocate.</li>
          <li><strong className="text-neutral-900">Community Contributors</strong> – Musicians, promoters, and fans who submit listings and keep the info fresh.</li>
        </ul>
        <p className="mt-4">Want to join the street team or submit an article? Reach out—we're always looking for writers, photographers, and vibemakers.</p>
      </section>

      <hr className="border-neutral-500/30" />
      
      <section>
        <SectionHeader>Submit Your Event</SectionHeader>
        <p>Hosting a reggae-flavored gathering? Drop us the details at <a href="mailto:events@nmreggaecalendar.com" className="text-rasta-yellow hover:underline">events@nmreggaecalendar.com</a> or use the CSV upload in the Admin Panel (promoters only). We review every submission to keep the calendar accurate and spam-free.</p>
      </section>

      <section>
        <SectionHeader>Stay Connected</SectionHeader>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Instagram:</strong> <a href="https://instagram.com/nmreggaecalendar" target="_blank" rel="noopener noreferrer" className="text-rasta-yellow hover:underline">@nmreggaecalendar</a></li>
          <li><strong>Facebook:</strong> <a href="https://facebook.com/nmreggaecalendar" target="_blank" rel="noopener noreferrer" className="text-rasta-yellow hover:underline">facebook.com/nmreggaecalendar</a></li>
          <li><strong>Threads:</strong> <a href="https://threads.net/@nmreggaecalendar" target="_blank" rel="noopener noreferrer" className="text-rasta-yellow hover:underline">@nmreggaecalendar</a></li>
          <li><strong>Newsletter:</strong> Sign up for monthly highlights + ticket giveaways.</li>
        </ul>
      </section>
      
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