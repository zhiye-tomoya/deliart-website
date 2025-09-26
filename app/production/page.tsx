export default function Production() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>演出</h1>

        <div className='max-w-4xl mx-auto'>
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>サービス概要</h2>
            <p className='text-lg text-gray-700 leading-relaxed mb-6'>デリアートの演出事業では、様々なイベントや催事に特別な演出を加え、参加者の皆様に感動と驚きをお届けいたします。創造性豊かなアイデアと確かな技術で、忘れられない体験を演出いたします。</p>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>演出サービス</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>イベント演出</h3>
                <p className='text-gray-700 mb-4'>企業イベント、パーティー、記念式典など、様々なイベントに合わせた演出をご提案いたします。会場の雰囲気を一変させる特別な演出で、参加者の心に残る体験を創り出します。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• 企業イベント・パーティー</li>
                  <li>• 記念式典・周年行事</li>
                  <li>• 商品発表会・展示会</li>
                  <li>• 季節イベント・フェスティバル</li>
                </ul>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>舞台演出</h3>
                <p className='text-gray-700 mb-4'>コンサート、演劇、ダンス公演など、舞台芸術に関わる演出を手がけます。アーティストの表現力を最大限に引き出し、観客との感動的な時間を創造いたします。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• コンサート・ライブ演出</li>
                  <li>• 演劇・ミュージカル</li>
                  <li>• ダンス・バレエ公演</li>
                  <li>• 文化祭・学園祭</li>
                </ul>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>技術・設備</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>照明演出</h3>
                <p className='text-gray-700'>最新のLED照明システムを使用し、色彩豊かで幻想的な空間を演出いたします。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>音響システム</h3>
                <p className='text-gray-700'>高品質な音響機器により、クリアで迫力のあるサウンドを提供いたします。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>映像・プロジェクション</h3>
                <p className='text-gray-700'>大型スクリーンやプロジェクションマッピングで、視覚的なインパクトを演出します。</p>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>特殊演出</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>特殊効果</h4>
                  <p className='text-gray-700 mb-6'>スモーク、炎、花火などの特殊効果で、ドラマチックな演出を実現いたします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>空間デザイン</h4>
                  <p className='text-gray-700'>会場全体の空間設計から装飾まで、トータルでプロデュースいたします。</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>インタラクティブ演出</h4>
                  <p className='text-gray-700 mb-6'>観客参加型の演出で、一体感のある特別な体験を提供いたします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>デジタル技術</h4>
                  <p className='text-gray-700'>AR・VR技術を活用した最先端のデジタル演出も対応可能です。</p>
                </div>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>制作プロセス</h2>
            <div className='grid md:grid-cols-4 gap-6'>
              <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                <div className='text-3xl font-bold text-blue-600 mb-3'>01</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>企画・提案</h3>
                <p className='text-gray-700 text-sm'>お客様のご要望をお聞きし、最適な演出プランをご提案いたします。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                <div className='text-3xl font-bold text-blue-600 mb-3'>02</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>設計・準備</h3>
                <p className='text-gray-700 text-sm'>詳細な設計図を作成し、必要な機材や人員の準備を行います。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                <div className='text-3xl font-bold text-blue-600 mb-3'>03</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>リハーサル</h3>
                <p className='text-gray-700 text-sm'>本番前に入念なリハーサルを行い、完璧な演出を目指します。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                <div className='text-3xl font-bold text-blue-600 mb-3'>04</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>本番・運営</h3>
                <p className='text-gray-700 text-sm'>当日は専門スタッフが現場を管理し、成功に導きます。</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>私たちの強み</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>創造性とオリジナリティ</h4>
                  <p className='text-gray-700 mb-6'>既成概念にとらわれない、独創的で印象的な演出をご提案いたします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>豊富な経験と実績</h4>
                  <p className='text-gray-700'>様々な規模・ジャンルのイベントを手がけてきた豊富な経験があります。</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>最新技術の活用</h4>
                  <p className='text-gray-700 mb-6'>常に最新の技術・機材を導入し、時代に合った演出を実現します。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>チームワーク</h4>
                  <p className='text-gray-700'>各分野の専門家がチームを組み、総合力で最高の演出を創り上げます。</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
