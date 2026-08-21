import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-[#fcfbfa] min-h-screen pt-24 pb-16">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <span className="inline-block px-4 py-1 bg-[#f2f7f5] text-[#1a6e4d] text-xs font-semibold uppercase tracking-widest rounded-full mb-4 border border-[#1a6e4d]/10">
          Legal
        </span>
        <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-[#14422e] mb-4">
          Terms of Service
        </h1>
        <p className="font-sans font-light text-stone-500 text-sm sm:text-base">
          Terms and conditions of Bunga Cerita services.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-stone-100 flex flex-col gap-10">
          
          {/* Section 1 */}
          <div>
            <h3 className="font-raleway text-base font-bold text-[#14422e] uppercase tracking-wider mb-3">
              1. General Information
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              By using our website and purchasing our products, you agree to be bound by the following terms and conditions. Please read them carefully before placing an order.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="font-raleway text-base font-bold text-[#14422e] uppercase tracking-wider mb-3">
              2. Product Orders and Substitution
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              All our flower arrangements are handcrafted and custom-made to order. In the event of material supply difficulties, we reserve the right to substitute wrapping paper, ribbons, or minor felt colors with alternatives of equal or greater value and quality, without prior notice. The overall style and color palette will be maintained as closely as possible to the original design.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="font-raleway text-base font-bold text-[#14422e] uppercase tracking-wider mb-3">
              3. Pricing and Payment
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              All prices listed on the website are in Indonesian Rupiah (IDR) and exclude shipping fees, unless otherwise stated. Full payment is required before an order can be processed and produced.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="font-raleway text-base font-bold text-[#14422e] uppercase tracking-wider mb-3">
              4. Delivery Policy
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              We strive to dispatch your custom orders on your requested date. However, exact delivery times cannot be guaranteed as shipping is handled by third-party courier services. It is the customer's responsibility to ensure that the recipient's address and contact details are accurate.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h3 className="font-raleway text-base font-bold text-[#14422e] uppercase tracking-wider mb-3">
              5. Cancellation and Refund Policy
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              Since our bouquets are custom handcrafted to order, cancellations cannot be made once production has commenced. Refunds or replacements are only eligible if the item sent is incorrect or arrives damaged, accompanied by unboxing video proof.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h3 className="font-raleway text-base font-bold text-[#14422e] uppercase tracking-wider mb-3">
              6. Quality and Complaints
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              We take immense pride in the craftsmanship of our felt flower bouquets. If you are not satisfied with your order, please contact us within 24 hours of receiving the product, along with photographic evidence. Complaints made after this period may not be entertained.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
