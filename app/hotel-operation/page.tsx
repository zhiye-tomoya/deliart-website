export default function HotelOperation() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>ホテルオペレーション</h1>

        <div className='max-w-4xl mx-auto'>
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>サービス概要</h2>
            <p className='text-lg text-gray-700 leading-relaxed mb-6'>デリアートのホテルオペレーション事業では、ホテル運営の全般をサポートし、お客様に最高品質のサービスを提供いたします。豊富な経験と専門知識を活かし、効率的で質の高いホテル運営を実現します。</p>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>運営サービス</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>フロント業務</h3>
                <p className='text-gray-700 mb-4'>お客様の第一印象を決める重要なフロント業務を、プロフェッショナルなスタッフが担当いたします。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• チェックイン・チェックアウト</li>
                  <li>• 予約管理・問い合わせ対応</li>
                  <li>• コンシェルジュサービス</li>
                  <li>• 多言語対応</li>
                </ul>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>ハウスキーピング</h3>
                <p className='text-gray-700 mb-4'>清潔で快適な客室環境を維持するため、細部まで行き届いた清掃サービスを提供いたします。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• 客室清掃・メンテナンス</li>
                  <li>• リネン・アメニティ管理</li>
                  <li>• パブリックエリア清掃</li>
                  <li>• 品質管理・チェック</li>
                </ul>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>管理業務</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>収益管理</h3>
                <p className='text-gray-700'>データ分析に基づいた効果的な収益管理で、ホテルの収益性向上をサポートします。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>人事管理</h3>
                <p className='text-gray-700'>スタッフの採用・研修・管理を通じて、質の高いサービス提供体制を構築します。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>施設管理</h3>
                <p className='text-gray-700'>建物・設備の保守管理から安全管理まで、総合的な施設管理を行います。</p>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>専門サービス</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>マーケティング支援</h4>
                  <p className='text-gray-700 mb-6'>効果的なマーケティング戦略の立案・実行で、集客力向上をサポートします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>品質管理</h4>
                  <p className='text-gray-700'>継続的な品質向上のため、定期的な監査・評価を実施します。</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>システム導入</h4>
                  <p className='text-gray-700 mb-6'>最新のホテル管理システムの導入・運用をサポートします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>コンサルティング</h4>
                  <p className='text-gray-700'>ホテル運営に関する様々な課題解決のためのコンサルティングを提供します。</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>私たちの強み</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>豊富な経験</h4>
                  <p className='text-gray-700 mb-6'>長年のホテル運営経験により培われた専門知識とノウハウを活用します。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>柔軟な対応</h4>
                  <p className='text-gray-700'>各ホテルの特性やニーズに合わせた、オーダーメイドのサービスを提供します。</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>高品質なサービス</h4>
                  <p className='text-gray-700 mb-6'>厳格な品質基準に基づき、一貫して高品質なサービスを提供します。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>コスト効率</h4>
                  <p className='text-gray-700'>効率的な運営により、コスト削減と品質向上の両立を実現します。</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
