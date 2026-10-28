import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | OPUS Infiniti",
  description:
    "Privacy policy for OPUS Infiniti. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-8 font-medium">Last updated: May 4, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                1. Introduction
              </h2>
              <p>
                OPUS Infiniti (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or
                &quot;Company&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website and use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect information about you in a variety of ways. The
                information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone
                  number, company name, and other information you voluntarily
                  provide
                </li>
                <li>
                  <strong>Device Information:</strong> Browser type, IP address,
                  operating system, and device identifiers
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on
                  pages, links clicked, and other interaction data
                </li>
                <li>
                  <strong>Cookies:</strong> Information stored through cookies and
                  similar tracking technologies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                3. Use of Your Information
              </h2>
              <p className="mb-3">
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience. Specifically,
                we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Generate a personal profile about you so that future visits to
                  the Site will be personalized
                </li>
                <li>Increase the efficiency and operation of the Site</li>
                <li>
                  Monitor and analyze usage and trends to improve your experience
                  with the Site
                </li>
                <li>Notify you of updates to the Site</li>
                <li>
                  Offer new products, services, and/or recommendations to you
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                4. Disclosure of Your Information
              </h2>
              <p className="mb-3">
                We may share information we have collected about you in certain
                situations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>By Law or to Protect Rights:</strong> If we believe
                  the release of information is necessary to comply with the law
                </li>
                <li>
                  <strong>Third-Party Service Providers:</strong> We may share
                  your information with third parties that perform services for
                  us
                </li>
                <li>
                  <strong>Business Transfers:</strong> Your information may be
                  transferred as part of a merger, acquisition, or sale of
                  assets
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                5. Security of Your Information
              </h2>
              <p>
                We use administrative, technical, and physical security measures
                to protect your personal information. However, no method of
                transmission over the Internet or method of electronic storage
                is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                6. Contact Us
              </h2>
              <p>
                If you have questions or comments about this Privacy Policy,
                please contact us at:
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

