export default function Funeral() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>葬祭</h1>

        <div className='max-w-4xl mx-auto'>
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>サービス概要</h2>
            <p className='text-lg text-gray-700 leading-relaxed mb-6'>デリアートの葬祭事業では、故人様への最後のお別れを心を込めてお手伝いいたします。ご遺族の想いに寄り添い、故人様にふさわしい尊厳ある葬儀を執り行います。</p>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>葬儀プラン</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>一般葬</h3>
                <p className='text-gray-700 mb-4'>親族・友人・知人など、多くの方々にお見送りいただく従来の葬儀形式です。故人様の人柄や功績を偲ぶ、格式ある葬儀を執り行います。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• 通夜・告別式の執行</li>
                  <li>• 会場設営・装飾</li>
                  <li>• 司会・進行</li>
                  <li>• 料理・返礼品の手配</li>
                </ul>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>家族葬</h3>
                <p className='text-gray-700 mb-4'>ご家族や親しい方々だけで行う、アットホームな葬儀です。故人様との思い出をゆっくりと語り合える、温かい雰囲気の中でお別れいただけます。</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>• 少人数での葬儀</li>
                  <li>• プライベートな空間</li>
                  <li>• 柔軟な式次第</li>
                  <li>• 心のこもったサービス</li>
                </ul>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>サポートサービス</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>事前相談</h3>
                <p className='text-gray-700'>生前からのご相談も承っております。ご希望に沿った葬儀の準備をサポートいたします。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>24時間対応</h3>
                <p className='text-gray-700'>いつでもお電話いただけるよう、24時間体制でサポートスタッフが待機しております。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>各種手続き</h3>
                <p className='text-gray-700'>役所への届出や各種手続きなど、煩雑な事務作業もお任せください。</p>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>施設・設備</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>式場</h4>
                  <p className='text-gray-700 mb-6'>様々な規模に対応できる式場を完備しております。故人様にふさわしい厳粛な雰囲気を演出いたします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>控室</h4>
                  <p className='text-gray-700'>ご遺族がゆっくりとお過ごしいただける、プライベートな控室をご用意しております。</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>駐車場</h4>
                  <p className='text-gray-700 mb-6'>参列者の皆様にご不便をおかけしないよう、十分な駐車スペースを確保しております。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>バリアフリー</h4>
                  <p className='text-gray-700'>車椅子の方やご高齢の方にも安心してご利用いただけるよう、バリアフリー設計となっております。</p>
                </div>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>特別なサービス</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>メモリアルサービス</h3>
                <p className='text-gray-700'>故人様の思い出を形に残すため、写真や映像を使った特別な演出をご提案いたします。</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>アフターサポート</h3>
                <p className='text-gray-700'>葬儀後の法要や各種手続きなど、継続的なサポートを提供いたします。</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>私たちの想い</h2>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>故人様への敬意</h4>
                  <p className='text-gray-700 mb-6'>故人様のお人柄や生前のご功績を大切にし、心を込めてお見送りいたします。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>ご遺族への配慮</h4>
                  <p className='text-gray-700'>悲しみの中にあるご遺族の気持ちに寄り添い、負担を軽減できるよう努めます。</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3'>尊厳ある葬儀</h4>
                  <p className='text-gray-700 mb-6'>故人様の尊厳を保ち、参列者の皆様にも心に残る葬儀を執り行います。</p>

                  <h4 className='font-semibold text-gray-800 mb-3'>真心のサービス</h4>
                  <p className='text-gray-700'>形式にとらわれず、真心を込めたサービスで最後のお別れをお手伝いいたします。</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
