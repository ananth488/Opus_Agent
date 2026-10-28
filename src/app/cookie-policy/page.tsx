import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | OPUS Infiniti",
  description:
    "Cookie Policy for OPUS Infiniti. Learn how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-custom max-w-4xl">
        <Link
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8 transition-colors"
          href="/"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div>
          <h1 className="text-5xl font-display font-bold text-dark-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-500 mb-8 font-medium">Last updated: May 4, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small files of letters and numbers that we store on
                your browser or the hard drive of your computer if you agree.
                Cookies contain information that is transferred to your
                computer&apos;s hard drive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                2. How We Use Cookies
              </h2>
              <p className="mb-3">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website
                  to function properly
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how
                  visitors use our website
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences
                  and settings
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Track your activity to
                  show relevant advertisements
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Collect data about how you
                  use our website
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                3. Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-dark-900">Session Cookies</h3>
                  <p>
                    These cookies expire when you close your browser and are used
                    to maintain your session.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-dark-900">Persistent Cookies</h3>
                  <p>
                    These cookies remain on your device for a set period and help
                    us recognize you on future visits.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-dark-900">
                    Third-Party Cookies
                  </h3>
                  <p>
                    These are set by third-party services such as analytics
                    providers and advertising networks.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                4. Your Cookie Choices
              </h2>
              <p>
                You can control and/or delete cookies as you wish. You can
                delete all cookies that are already on your computer and you can
                set most browsers to prevent them from being placed. However, if
                you do this, you may have to manually adjust some preferences
                every time you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                5. Third-Party Cookies
              </h2>
              <p>
                We use third-party services such as Google Analytics to track
                and analyze website usage. These services may use cookies to
                collect information about your browsing activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                6. Changes to This Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time. We will
                notify you of any changes by posting the new Cookie Policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this Cookie Policy, please
                contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> privacy@opusinfiniti.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 97909 65960
                </p>
                <p>
                  <strong>Address:</strong> Multiple offices worldwide (India,
                  USA, Malaysia)
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

