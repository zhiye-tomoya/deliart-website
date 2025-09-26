export default function Recruitment() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>人材紹介</h1>

        <div className='max-w-4xl mx-auto'>
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>サービス概要</h2>
            <p className='text-lg text-gray-700 leading-relaxed mb-6'>デリアートの人材紹介事業では、ホスピタリティ業界を中心とした専門性の高い人材サービスを提供しております。企業様と求職者様の双方にとって最適なマッチングを実現し、業界の発展と人材の成長をサポートいたします。</p>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>人材紹介サービス</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>正社員紹介</h3>
                <p className='text-gray-700 mb-4'>長期的なキャリア形成を目指す方に、安定した正社員ポジションをご紹介いたします。企業文化や将来性も考慮した、最適なマッチングを実現します。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• ホテル・レストラン管理職</li>
                  <li>• ウェディングプランナー</li>
                  <li>• イベントプロデューサー</li>
                  <li>• 営業・マーケティング職</li>
                </ul>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>派遣・契約社員</h3>
                <p className='text-gray-700 mb-4'>柔軟な働き方を希望される方に、派遣や契約社員としてのお仕事をご紹介いたします。スキルアップやライフスタイルに合わせた働き方が可能です。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• フロント・接客スタッフ</li>
                  <li>• 調理・サービススタッフ</li>
                  <li>• イベントスタッフ</li>
                  <li>• 事務・アシスタント職</li>
                </ul>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>専門分野</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>ホテル業界</h3>
                <p className='text-gray-700'>フロント、コンシェルジュ、ハウスキーピング、レストランサービスなど、ホテル業界の幅広い職種に対応しています。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>ブライダル業界</h3>
                <p className='text-gray-700'>ウェディングプランナー、ドレスコーディネーター、フラワーデザイナーなど、ブライダル関連の専門職をサポートします。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>イベント業界</h3>
                <p className='text-gray-700'>イベントプランナー、演出スタッフ、技術スタッフなど、イベント・エンターテイメント業界の人材をご紹介します。</p>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>求職者様向けサービス</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>キャリアカウンセリング</h4>
                  <p className='text-gray-700 mb-6'>専門のキャリアアドバイザーが、あなたの経験やスキル、将来の目標をお聞きし、最適なキャリアプランをご提案いたします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>スキルアップ支援</h4>
                  <p className='text-gray-700'>業界で求められるスキルや資格取得のサポート、研修プログラムをご提供いたします。</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>面接対策</h4>
                  <p className='text-gray-700 mb-6'>履歴書・職務経歴書の作成から面接対策まで、転職活動を全面的にサポートいたします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>アフターフォロー</h4>
                  <p className='text-gray-700'>入社後も定期的にフォローアップを行い、職場での定着をサポートいたします。</p>
                </div>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>企業様向けサービス</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>人材コンサルティング</h3>
                <p className='text-gray-700'>企業様の組織課題や人材戦略について、専門的な視点からコンサルティングを行います。最適な人材配置や組織体制をご提案いたします。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>採用代行サービス</h3>
                <p className='text-gray-700'>採用活動の企画から実行まで、一連のプロセスを代行いたします。効率的で質の高い採用活動を実現します。</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>私たちの強み</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>業界専門性</h4>
                  <p className='text-gray-700 mb-6'>ホスピタリティ業界に特化した深い知識と豊富なネットワークを活かし、最適なマッチングを実現します。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>きめ細やかなサポート</h4>
                  <p className='text-gray-700'>一人ひとりのニーズに合わせた、個別性の高いサポートを提供いたします。</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>長期的な関係構築</h4>
                  <p className='text-gray-700 mb-6'>一時的なマッチングではなく、長期的なキャリア形成を見据えた関係構築を大切にしています。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>信頼と実績</h4>
                  <p className='text-gray-700'>多くの企業様・求職者様からの信頼をいただき、高い成約率と定着率を実現しています。</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
