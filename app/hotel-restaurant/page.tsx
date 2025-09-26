export default function HotelRestaurant() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>ホテル＆レストラン</h1>

        <div className='max-w-4xl mx-auto'>
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>サービス概要</h2>
            <p className='text-lg text-gray-700 leading-relaxed mb-6'>デリアートのホテル＆レストラン事業では、お客様に最高のホスピタリティ体験を提供いたします。 洗練されたサービスと心温まるおもてなしで、特別なひとときをお過ごしいただけます。</p>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>ホテルサービス</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>宿泊サービス</h3>
                <p className='text-gray-700 mb-4'>快適で上質な客室と、きめ細やかなサービスで、お客様の滞在を特別なものにいたします。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• 24時間フロントサービス</li>
                  <li>• コンシェルジュサービス</li>
                  <li>• ルームサービス</li>
                  <li>• ビジネスセンター</li>
                </ul>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>宴会・会議</h3>
                <p className='text-gray-700 mb-4'>様々な規模のイベントに対応できる施設と、専門スタッフによるサポートを提供いたします。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• 大小宴会場完備</li>
                  <li>• 会議室・研修室</li>
                  <li>• 音響・映像設備</li>
                  <li>• イベント企画・運営</li>
                </ul>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>レストランサービス</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>日本料理</h3>
                <p className='text-gray-700'>季節の食材を活かした伝統的な日本料理を、美しい盛り付けでご提供いたします。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>フレンチ</h3>
                <p className='text-gray-700'>シェフが厳選した食材で作る本格的なフランス料理をお楽しみいただけます。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>カジュアルダイニング</h3>
                <p className='text-gray-700'>気軽にお食事を楽しめる、アットホームな雰囲気のレストランです。</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>特徴</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>おもてなしの心</h4>
                  <p className='text-gray-700 mb-6'>お客様一人ひとりに寄り添った、心のこもったサービスを提供いたします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>上質な空間</h4>
                  <p className='text-gray-700'>洗練されたインテリアと落ち着いた雰囲気で、特別なひとときをお過ごしいただけます。</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>厳選された食材</h4>
                  <p className='text-gray-700 mb-6'>地元の新鮮な食材を中心に、シェフが厳選した最高品質の食材を使用しています。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>多様なニーズに対応</h4>
                  <p className='text-gray-700'>ビジネス利用から特別な記念日まで、様々なシーンでご利用いただけます。</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
