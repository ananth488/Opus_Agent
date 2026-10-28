import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | OPUS Infiniti",
  description:
    "Terms of Service for OPUS Infiniti. Read our terms and conditions for using our website and services.",
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-8 font-medium">Last updated: May 4, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be
                bound by the terms and provisions of this agreement. If you do not
                agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                2. Use License
              </h2>
              <p className="mb-3">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on OPUS Infiniti&apos;s website
                for personal, non-commercial transitory viewing only. This is the
                grant of a license, not a transfer of title, and under this
                license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modifying or copying the materials</li>
                <li>
                  Using the materials for any commercial purpose or for any
                  public display
                </li>
                <li>
                  Attempting to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  Removing any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transferring the materials to another person or
                  &quot;mirroring&quot; the materials on any other server
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                3. Disclaimer
              </h2>
              <p>
                The materials on OPUS Infiniti&apos;s website are provided on an
                &apos;as is&apos; basis. OPUS Infiniti makes no warranties,
                expressed or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                4. Limitations
              </h2>
              <p>
                In no event shall OPUS Infiniti or its suppliers be liable for
                any damages (including, without limitation, damages for loss of
                data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on OPUS Infiniti&apos;s
                website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                5. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on OPUS Infiniti&apos;s website could
                include technical, typographical, or photographic errors. OPUS
                Infiniti does not warrant that any of the materials on its website
                are accurate, complete, or current. OPUS Infiniti may make changes
                to the materials contained on its website at any time without
                notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">6. Links</h2>
              <p>
                OPUS Infiniti has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such linked
                site. The inclusion of any link does not imply endorsement by OPUS
                Infiniti of the site. Use of any such linked website is at the
                user&apos;s own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                7. Modifications
              </h2>
              <p>
                OPUS Infiniti may revise these terms of service for its website
                at any time without notice. By using this website, you are
                agreeing to be bound by the then current version of these terms of
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                8. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of India, and you irrevocably submit to
                the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                9. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> legal@opusinfiniti.com
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

