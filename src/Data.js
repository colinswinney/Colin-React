import Page from './components/Page';
import Archive from './components/Archive';
import ArchiveItem from './components/ArchiveItem';

import ColinOldImage from './images/colin-swinney-old-screenshot.jpg';
import LinnemansImage from './images/linnemans-riverwest-inn-screenshot.jpg';
import SpaceRaftImage from './images/space-raft-screenshot.jpg';
import GnlImage from './images/the-goodnight-loving-screenshot.jpg';
import TstrImage from './images/thesoundtestroom-screenshot.jpg';

const Data = {
  siteTitle: 'Colin Swinney',
  routes: [
    {
      title: 'Home',
      navTitle: 'Home',
      contentClass: 'home',
      content: 'home slice',
      path: '/',
      exact: true,
      component: Page
    },
    { 
      title: 'Services',
      navTitle: 'Services',
      contentClass: 'services',
      content: 'select a service',
      path: '/services',
      exact: false,
      component: Page,
      routes: [
        {
          title: 'Web Development',
          navTitle: 'Web Development',
          archItemClass: 'web-dev',
          content: 'web dev content',
          path: '/web-development',
          techInfo: [
            'Built with WP',
            'Fart'
          ]
        },
        {
          title: 'Hosting',
          navTitle: 'Hosting',
          contentClass: 'hosting',
          content: 'hosting stuff',
          path: '/hosting',
          techInfo: [
            'Built with WP',
            'Fart'
          ]
        },
        {
          title: 'Search Engine Optimization',
          navTitle: 'SEO',
          contentClass: 'seo',
          content: 'search stuff',
          path: '/search-engine-optimization',
          techInfo: [
            'Built with WP',
            'Fart'
          ]
        },
        {
          title: 'Technologies and Tools',
          navTitle: 'Technologies',
          contentClass: 'tools',
          content: 'list of things',
          path: '/technologies-and-tools',
          techInfo: [
            'Built with WP',
            'Fart'
          ]
        }
      ]
    },
    {
      title: 'Portfolio',
      navTitle: 'Portfolio',
      contentClass: 'portfolio',
      content: 'See my work',
      path: '/portfolio',
      exact: false,
      component: Archive,
      routes: [
        {
          title: 'This Site',
          navTitle: 'This Site',
          path: '/this-site',
          image: ColinOldImage,
          contentClass: 'this-site',
          content: "<p>The page you are looking at now is version 2.0 of my website.  While I still liked my old site, I decided to use this project as an opportunity to learn React, a Javascript library developed by Facebook and used on sites such as Netflix and Airbnb.</p><h3>Without Getting Too Technical…</h3><p>The benefit of using React is in it’s speed.  For example, when you clicked on this link, rather than reloading the whole page, React only updates whatever content is necessary.  Everything else is left in place, such as the sites navigation, sidebar, or footer.</p><p>React also allows for a dynamic user experience, and an ability to reuse pieces etc…</p>",
          techInfo: [
            'create-react-app',
            'react-router',
            'react-document-title',
            'react-transition-group'
          ]
        },
        {
          title: 'Colin Swinney Music',
          navTitle: 'Colin Swinney Music',
          path: '/colin-swinney-music',
          link: 'http://colinswinney.com',
          image: ColinOldImage,
          contentClass: 'cs-music',
          content: "<p>For my first personal site under my own domain, I had two goals in mind.</p><h3>First, to create a singe page application.</h3><p>I wanted my visitors to have “something to do” while browsing.  As a musician, I thought it would be great to feature my music and videos.  However, with a traditional website, once you hit play, you’d be unable to navigate to other areas without causing the song to stop.  A single page app was the solution.</p><h3>Secondly, I wished to follow the advancement of the WordPress REST API.</h3><p>This exciting new feature allows developers to access a websites content in quicker and more efficient ways, as well as remotely.  For example, click the button below to access the content from my site</p>",
          techInfo: [
            'Built with WP',
            'Fart'
          ]
        },
        {
          title: "Linneman's Riverwest Inn",
          navTitle: "Linneman's Riverwest Inn",
          path: '/linnemans-riverwest-inn',
          link: 'http://linnemans.com',
          image: LinnemansImage,
          contentClass: 'linnemans',
          content: [
            "<p>Linneman's Riverwest Inn was a very fun project for me.  Over the years I've had many occassions to visit their fine establishment, and its consistently been one my absolute favorite venues, both as a performer and concert goer.  The building itself is over a century old with a massive red, brick frame topped by an imposing roof, you certainly can't miss it as you drive down Locust towards Milwaukee's East Side.  Jim, the owner, has maintained much of it's old world history, and through his hard work, dedication to the arts, and affable personality, he has made Linneman's (and himself) practicaly synonomous with Riverwest, a true staple of the community.</p><h3>Out With The Old...</h3><p>The late 90's were some wild times, Y2K was going to throw us into the Stone Age, there was barely four Star Wars films, and Beanie Babies were somehow worth a fortune.  This was also the dawn of the internet age, when dial up connections could be heard beeping across the heartland, connectng one 56k modem at a time (assuming someone didn't unknowingly pick up the phone).  It was in this setting that Jim created linnemans.com, an HTML site he could use to post his calendar of events.  A tech marvel of the time, it had all the bells and whistles you could imagine, including a page counter, guest book, and even gif animations.</p><h3>In With The New...</h3><p>The site Jim created in 1998 dutifully served for an amazing 19 years as the online home of Linneman's Riverwest Inn.  While charming in its retro, throwback design, modern browsers and smart phones simply couldn't deliver the full experience in a readable, responsive format.  Using the power of WordPress, we were able to bring Jim's beloved event calendar into the 21st century.  With an ever expanding line up of events, visitors can now select by category, month, or see a chronological list of upcoming performances to find the info they are looking for.  I've also implemented a contact form for booking requests, news section, as well as improvements to the WordPress dashboard, making adding content and performing site updates as easy as possible.</p>"
          ],
          techInfo: [
            'Built with WordPress',
            'Custom design, assets, and images',
            'Custom theme (using Roots/Sage starter theme)',
            'Plugins: Events Calendar by Modern Tribe, Yoast SEO, Advanced Custom Fields Pro, JetPack, WordFence',
            'WordPress training, custom dashboard widgets, staging site',
            'Google Analytics'
          ]
        },
        {
          title: 'Space Raft',
          navTitle: 'Space Raft',
          path: '/space-raft',
          link: 'http://spaceraftmke.com',
          image: SpaceRaftImage,
          contentClass: 'space-raft',
          content: "<p>Space Raft are a rock band from Milwaukee, WI, having formed in a Bay View neighborhood basement the summer of 2012.  I remember this well because I was the original bass player.  Sometime that winter, my future wife and I decided we were going to make the move to California, so I left the group before they ever played their first gig.</p><h3>Try and Try Again</h3><p>Cut to 2015, where my (now) wife and I are living in San Diego, and I have been bit by a coding bug.  I had started <a href='/portfolio/thesoundtestroom'>thesoundtestroom</a> and wanted to dig deeper into the world of web development.  With my expericence in music, and after making a static HTML site (now defunct) for my sisters group, the Sugar Stems, I knew the needs of an online band well: the ability to easily create or add events, news, discography items, photos, and music.  Space Raft agreed to be my first client, and I used WordPress with a series of custom post types to allow the band to simply and quickly add new shows, albums, or videos.</p><h3>You Can Lead a Horse to Water...</h3><p>When creating the initial design, I made a custom theme totally from scratch.  I admit it was messy, I was still learning some of the finer details of WordPress, and probably didn't know or realize the best methods to implement features such as custom fields.  The band wasn't using the site and I took it personally, I wanted a do over.  As they were getting ready to release their second album in the sping of 2016, I figured it was a great opportunity to give the page an update.  By then I was using a solid starter theme with Roots/Sage, and I had a much better understanding of how to achieve a smoother user experience for the guys when making edits.  So, after adding loads of new improvements including repeater fields, custom widgets, and responsive video embeds... the band still doesn't use the site.  They just aren't internet people, and in the age of Facebook and Bandcamp, maybe the need simply isn't there for a part time band to have their own domain. But it certainly looks better than it did!</p>",
          techInfo: [
            'Built with WordPress',
            'Custom design',
            'Custom theme (using Roots/Sage starter theme)',
            'Plugins: Advanced Custom Fields Pro, Yoast SEO',
            'Custom plugins: Space Raft Custom Post Types, Space Raft Custom Widgets'
          ]
        },
        {
          title: 'The Goodnight Loving',
          navTitle: 'The Goodnight Loving',
          path: '/the-goodnight-loving',
          link: 'http://thegoodnightloving.com',
          image: GnlImage,
          contentClass: 'the-gnl',
          content: "<p>The Goodnight Loving was my first real band.  We went on tours, made videos, and even released actual vinyl records, real band stuff.  The group existed in slightly different line ups from 2004-2010, having put out four full length albums, a handful of singles, and even a five song EP featuring a beautifully, screen printed B side drawn up by the engineer who recorded it.  And while seemingly only a short time ago, it was slim pickin's online.  Those were the days before Bandcamp and pre Soundcloud, when the social media juggernaut MySpace was a bands best friend (except of course for their Top 8).  So we never had much of an online presence and therefore nothing really to look back on.</p><h3>Developing An Excuse To Learn Something New</h3><p>I had been working with WordPress almost exclusively since becoming a developer and I felt I needed to get out of my comfort zone.  After learning about Jekyll, a static HTML site generator, I was intrigued.  It offered a simple templating system for creating reusable components and custom post types, and it could be hosted for free using GitHub Pages.  The thought of building a blog without a database floored me. I love WordPress, but it can get tiresome writing functions or rooting around in the backend, and if a blog could be done without all that, I wanted to find out how.  I needed a project and decided creating a page for our now defunct band was a good excuse.  I could set it and forget it, there would be no news updates or additional content to create, and aside from choosing to buy a domain, there was no cost to keeping it online.</p><h3>Something Here</h3><p>All in all, I'd say using Jekyll was a terrific experience.  While limited in its out of the box capabilities, for the right project, it could definitely give WordPress a run for its money in terms of simplicity and value.  Using Markdown language is intuitive, and even those with little to no knowledge of HTML could be taught how to create new posts.</p>",
          techInfo: [
            'Built with Jekyll',
            'Fart'
          ]
        },
        {
          title: 'Freelance Work',
          navTitle: 'Freelance Work',
          path: '/freelance-work',
          image: ColinOldImage,
          contentClass: 'freelance',
          content: "Freelance stuff",
          techInfo: [
            'Built with WP',
            'Fart'
          ]
        },
        {
          title: 'thesoundtestroom',
          navTitle: 'thesoundtestroom',
          path: '/thesoundtestroom',
          image: TstrImage,
          contentClass: 'thesoundtestroom',
          content: "<p>This is where it all started for me, in thesoundtestroom (always lowercase).  Doug Woods, based in the UK, had been running a successful YouTube channel for a few years, first creating generalized content about home recording before focusing his efforts primarily on music software and apps.  When the iPhone was released, it opened up a whole new world for mobile music, you could suddenly fit dozen of synthesizers, drum machines, and effects in your front pocket.  Musicians coud create, mix, and release full albums while sitting on their couch, and with new apps being released every week, it was an exciting time to explore the wide range of sonic possibilities that were now available.</p><h3>Looking For Something To Do</h3><p>In the winter of 2013-14, I released an album made with just an iPad and a small portable synthesizer.  I put the full weight of my being into it, and for about six months, the ONLY thing I thought about was finishing that album.  After it's release, I felt a little exhausted and directionless creatively.  I wanted to take a break from music and was exploring ways to add some extra income.  It was that following spring that I first began coding, beginning with a static HTML site for my sisters band.  On the advice of a friend, I learned how to use Bootstrap and was impressed with my first results.  It wasn't a great looking site by any means, but it also wasn't completely awful, and I was excited by the possibilities of web development.</p><h3>Let's Start a Business</h3><p>Doug's YouTube channel was an immeasurable source of guidance for a mobile musician, and I knew he could reach a wider audience if he had his own home on the web.  After a few emails back and forth, we decided to work together to start a blog based on his videos.  In July of 2014, we officially launched thesoundtestroom.com.  The response was phenominal from the get-go, people were commenting on all of our posts, we had app giveaways that were incredibly popular, and I was blown away by how many views we were getting.  Soon, I began posting tutorial videos of my own to increase our content, and in February of 2015, we brought on a third partner, Jakob Haq of Stockholm, Sweden.  We were putting out about a video a day by that point and things were only moving forward.</p><h3>Getting My Hands Dirty</h3><p>At first, the majority of our income came from advertising, but this was quickly surpassed by iTunes app sale commissions.  Every time someone made a purchase from the iTunes store by following our links, we received a small percentage.  Some of these music apps were no joke either, with a great deal costing anywhere from $20-50, occassionally more.  We started tracking sales to encourage more clicks, and while effective, it became an incredible pain in the rear keeping up with the day to day changes in the App Store.  My solution was to create a custom post type for apps, and with some custom functions, we could simply enter in the app ID and hit publish.  Then it would make a call to the App Store, grab it's info, and save it into custom fields.  I created a plugin which ran an hourly cron job looking for any differences between our post type, and the same app in the store.  If the app had changed in price, it was auto tagged as a sale or price bump, and if it had updated to a version, we would tag that as well.  We eventually cataloged over 1000 apps, there were some occassional hiccups, but the plugin worked very well for the most part and our visitors were thrilled.</p><h3>The End of the Beginning</h3><p>Mobile music making is a very small niche, and while we had a very loyal following, we had sort of peaked with our views (around 80-100k per month).  It was nearly a full time job keeping up with the day to day updates, emails, and site maintainence, and having just moved back to Wisconsin, I simply didn't have the time or energy to keep the site going.  The other guys decided to go their seperate ways as well, and we closed our virtual doors in August of 2016.  I wouldn't be half the developer I am without thesoundtestroom, co-owning and operating that site taught me so much about coding, hosting, WordPress, business, and so much more.  It was an invaluable experience, and one I am incredibly thankful to have shared in.</p>",
          techInfo: [
            'Built with WP',
            'Fart'
          ]
        }
      ]
    },
    {
      title: 'Contact',
      navTitle: 'Contact',
      contentClass: 'contact',
      content: 'contact me',
      path: '/contact',
      exact: true,
      component: Page
    }
  ]
}

export default Data