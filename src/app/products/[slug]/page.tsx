import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import { PRODUCTS_DATA, Product } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} | Opus Infiniti`,
    description: product.desc,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products in same category
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);

  return (
    <main className="overflow-hidden bg-gray-50 min-h-screen">
      {/* Product Hero */}
      <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-dark-section bg-[#0b192c] bg-gradient-to-br from-[#07111e] via-[#0c2340] to-[#05162a] text-white">
        <div className="container-custom">
          {/* Back link */}
          <Link
            href="/solutions/products"
            className="inline-flex items-center gap-2 text-primary-300 hover:text-white mb-6 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white/90 ring-1 ring-white/20 mb-4">
                {product.categoryLabel}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-primary-200 font-medium mb-4">
                {product.tagline}
              </p>
              <p className="text-gray-100 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-medium">
                {product.desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/contact?subject=Demo%20Request%20for%20${encodeURIComponent(
                    product.name
                  )}`}
                  className="btn btn-primary px-8 py-3.5 rounded-full font-semibold shadow-lg"
                >
                  Schedule Live Demo
                </Link>
                <Link
                  href="/case-studies"
                  className="btn btn-outline text-white border-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Product Logo Showcase Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-white rounded-2xl p-4 shadow-inner flex items-center justify-center mb-6">
                  <Image
                    src={product.logo}
                    alt={product.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-1.5 max-w-xs">
                  {product.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/20 rounded-md text-xs font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights & Features */}
      <section className="section py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-8 text-center">
              Core Capabilities &amp; Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4 hover:border-primary-200 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 text-base mb-1">
                      {feature}
                    </h3>
                    <p className="text-xs text-gray-700 font-medium">
                      Enterprise-tested with continuous automated validation
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-gray-100 text-center">
              <div className="p-6">
                <Cpu className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-dark-900 text-lg mb-1">
                  AI-Powered
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed font-normal">
                  Integrated ML algorithms and automated business rules.
                </p>
              </div>

              <div className="p-6">
                <ShieldCheck className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-dark-900 text-lg mb-1">
                  Enterprise Security
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed font-normal">
                  Role-based access control, encryption, and audit logs.
                </p>
              </div>

              <div className="p-6">
                <Zap className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-dark-900 text-lg mb-1">
                  High Scalability
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed font-normal">
                  Multi-tenant cloud architecture supporting high workloads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products in this Domain */}
      {relatedProducts.length > 0 && (
        <section className="section py-16 bg-gray-50 border-t border-gray-200">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 mb-8 text-center">
              Related Solutions in {product.categoryLabel}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.slug}
                  className="card p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-primary-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-gray-50 p-1.5 border border-gray-100 flex items-center justify-center mb-3">
                      <Image
                        src={rel.logo}
                        alt={rel.name}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-dark-900 text-lg mb-1">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-primary-600 font-medium mb-2">
                      {rel.tagline}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-4">
                      {rel.desc}
                    </p>
                  </div>

                  <Link
                    href={`/products/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-secondary-600 py-16 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Deploy {product.name}?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our engineering team to request a customized demo sandbox
            or review architectural integration blueprints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn btn-white bg-white text-primary-700 font-bold hover:bg-gray-100 px-8 py-3.5 rounded-full shadow-lg"
            >
              Contact Sales Team
            </Link>
            <Link
              href="/solutions/products"
              className="btn btn-outline text-white border-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

