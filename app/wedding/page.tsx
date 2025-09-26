export default function Wedding() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>ウェディング</h1>

        <div className='max-w-4xl mx-auto'>
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>サービス概要</h2>
            <p className='text-lg text-gray-700 leading-relaxed mb-6'>デリアートのウェディング事業では、お二人の大切な一日を最高の思い出にするため、心を込めたサービスを提供いたします。お客様のご希望に寄り添い、オーダーメイドの結婚式をプロデュースいたします。</p>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>ウェディングプラン</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>チャペルウェディング</h3>
                <p className='text-gray-700 mb-4'>神聖な雰囲気の中で行う、格式高いチャペルでの挙式です。美しいステンドグラスと荘厳な音楽に包まれた特別な時間をお過ごしいただけます。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• 美しいチャペルでの挙式</li>
                  <li>• オルガン演奏・聖歌隊</li>
                  <li>• フラワーシャワー演出</li>
                  <li>• プロカメラマンによる撮影</li>
                </ul>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>ガーデンウェディング</h3>
                <p className='text-gray-700 mb-4'>自然に囲まれた開放的なガーデンでの挙式です。四季折々の美しい景色の中で、アットホームで温かい結婚式を演出いたします。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• 緑豊かなガーデンでの挙式</li>
                  <li>• 季節の花々による装飾</li>
                  <li>• 自然光での撮影</li>
                  <li>• アウトドア演出</li>
                </ul>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>披露宴サービス</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>料理・ドリンク</h3>
                <p className='text-gray-700'>シェフが厳選した食材で作る、美味しくて美しいウェディング料理をご提供いたします。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>会場装飾</h3>
                <p className='text-gray-700'>お二人のテーマに合わせた、オリジナルの会場装飾で特別な空間を演出いたします。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>演出・エンターテイメント</h3>
                <p className='text-gray-700'>感動的な演出やエンターテイメントで、ゲストの皆様にも楽しんでいただけます。</p>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>サポートサービス</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>ウェディングプランナー</h4>
                  <p className='text-gray-700 mb-6'>経験豊富なプランナーが、準備から当日まで全面的にサポートいたします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>ドレス・タキシード</h4>
                  <p className='text-gray-700'>豊富な種類のドレス・タキシードから、お二人にぴったりの衣装をお選びいただけます。</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>ヘアメイク</h4>
                  <p className='text-gray-700 mb-6'>プロのヘアメイクアーティストが、最高に美しい花嫁姿を演出いたします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>写真・映像</h4>
                  <p className='text-gray-700'>プロのカメラマンが、一生の思い出となる美しい写真・映像を残します。</p>
                </div>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>特別なオプション</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>前撮り・後撮り</h3>
                <p className='text-gray-700'>結婚式とは別の日に、ゆっくりと写真撮影を行うサービスです。様々なロケーションでの撮影が可能です。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>ハネムーンサポート</h3>
                <p className='text-gray-700'>新婚旅行の企画・手配もお任せください。お二人の希望に合わせた特別な旅行をご提案いたします。</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>私たちの想い</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>お二人らしさを大切に</h4>
                  <p className='text-gray-700 mb-6'>画一的なプランではなく、お二人の個性や想いを大切にしたオリジナルウェディングを創り上げます。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>細部へのこだわり</h4>
                  <p className='text-gray-700'>小さな演出から大きな装飾まで、すべての細部にこだわり抜いた結婚式を実現します。</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>一生の思い出づくり</h4>
                  <p className='text-gray-700 mb-6'>お二人とゲストの皆様にとって、一生忘れられない特別な一日となるよう全力でサポートします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>安心のサポート体制</h4>
                  <p className='text-gray-700'>準備期間から当日まで、専任スタッフが責任を持ってサポートいたします。</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
