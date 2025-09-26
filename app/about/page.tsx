export default function About() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>デリアートについて</h1>

        <div className='max-w-4xl mx-auto'>
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>私たちの理念</h2>
            <p className='text-lg text-gray-700 leading-relaxed mb-6'>デリアートは、お客様の大切な瞬間を彩る総合サービス企業として、 ホスピタリティの真髄を追求し続けています。</p>
            <p className='text-lg text-gray-700 leading-relaxed'>私たちは、一人ひとりのお客様に寄り添い、 心に残る特別な体験を提供することを使命としています。</p>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>事業領域</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>ホスピタリティ事業</h3>
                <p className='text-gray-700'>ホテル・レストラン運営、ウェディングプロデュース、 葬祭サービスなど、人生の重要な場面でのサービスを提供</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>人材サービス事業</h3>
                <p className='text-gray-700'>専門性の高い人材紹介・派遣サービスを通じて、 業界の発展と人材の成長をサポート</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>会社概要</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>設立</h4>
                  <p className='text-gray-700 mb-4'>2000年</p>

                  <h4 className='font-semibold text-gray-800 mb-2'>従業員数</h4>
                  <p className='text-gray-700'>150名</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>事業内容</h4>
                  <p className='text-gray-700 mb-4'>ホテル・レストラン運営、ウェディング・葬祭サービス、 イベント企画・演出、人材紹介・派遣</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
