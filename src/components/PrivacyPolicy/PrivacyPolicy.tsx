import styles from './styles/PrivacyPolicy.module.scss';

export default function PrivacyPolicy() {
  return (
    <article className={styles.privacyPolicy}>
      <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: July 11, 2026</p>

        <section>
          <h2>1. Overview</h2>
          <p>
            MooreDev Technologies LLC ("we," "us," or "our") develops iOS games available on the Apple App Store.
            This policy describes our data practices for those games.
          </p>
          <p>
            We do not independently collect, store, or share any personal information. The only external service
            used is Apple Game Center for leaderboards, which is governed by Apple's own privacy policy.
          </p>
        </section>

        <section>
          <h2>2. Data We Do Not Collect</h2>
          <p>
            Our games contain no analytics SDKs, no crash-reporting services,
            no advertising networks, and no third-party tracking. Specifically, we do not collect:
          </p>
          <ul>
            <li>Names, email addresses, or contact information</li>
            <li>Location data</li>
            <li>Device identifiers or advertising IDs</li>
            <li>Gameplay analytics or behavioral tracking</li>
            <li>Crash logs or diagnostics</li>
            <li>Financial or payment information</li>
          </ul>
          <p>
            Any game progress or scores stored locally on your device are never transmitted to our servers.
          </p>
        </section>

        <section>
          <h2>3. Apple Game Center (Leaderboards)</h2>
          <p>
            Our games use Apple Game Center solely to display leaderboards. We do not operate or control Game Center —
            it is Apple's service, running under your Apple ID.
          </p>
          <p>When you participate in a leaderboard, your score and your Game Center display name (set by you in your Apple ID settings) are submitted to Apple's Game Center service. This happens only if:</p>
          <ul>
            <li>You are signed in to Game Center on your device, and</li>
            <li>You choose to submit a score</li>
          </ul>
          <p>
            We do not receive, store, or have access to your Game Center data, Apple ID, or any information associated
            with your leaderboard entries. All leaderboard data is held by Apple and governed by{' '}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
              Apple's Privacy Policy
            </a>
            . You can opt out of Game Center at any time through your device's Settings app — the game remains fully
            playable without it.
          </p>
        </section>

        <section>
          <h2>4. In-App Purchases</h2>
          <p>
            Some games may offer optional in-app purchases (such as consumable power-ups or cosmetic items).
            All payment processing is handled exclusively by Apple through the App Store. We never see, receive,
            or store your payment information. Refer to Apple's privacy policy for details on how purchase transactions
            are handled.
          </p>
          <p>
            Purchase-related data (such as remaining power-up balances) may be stored locally on your device or in
            your personal iCloud account (if iCloud backup is enabled), both of which are outside our control and
            governed by Apple's privacy practices.
          </p>
        </section>

        <section>
          <h2>5. Apple Platform Services</h2>
          <p>
            Our games run on Apple's iOS/iPadOS platforms. Apple may independently collect certain diagnostic and
            usage data as part of operating iOS and the App Store. This is governed by Apple's Privacy Policy and
            is outside our control. We do not receive or have access to any of that data.
          </p>
        </section>

        <section>
          <h2>6. Children's Privacy</h2>
          <p>
            We do not knowingly collect personal information from any users, including children under 13. Because
            we collect no data directly, our games do not present risks under COPPA or similar children's privacy
            laws with respect to our own data practices.
          </p>
          <p>
            <strong>Note:</strong> Apple Game Center has its own age restrictions and parental controls managed
            through Screen Time and Family Sharing settings on your Apple device. We encourage parents to review
            Apple's privacy practices and configure appropriate restrictions for younger players.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Policy</h2>
          <p>
            If our data practices ever change — for example, if we add analytics or other services — we will update
            this page and revise the "Last updated" date above before releasing any such update. We encourage you to
            review this policy periodically.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us:
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@mooredevtechnologies.com">support@mooredevtechnologies.com</a>
          </p>
        </section>
      </div>
    </article>
  );
}
