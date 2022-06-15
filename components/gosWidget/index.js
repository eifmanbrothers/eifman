import Image from "next/image"

const GosWidget = () => {
  
  return (
    <div id='js-show-iframe-wrapper'>
      <div className='pos-banner-fluid bf-8'>
        <div className='bf-8__decor'>
          <div className='bf-8__logo-wrap'>
            <Image
              className='bf-8__logo'
              src='https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo-blue.svg'
              alt='Госуслуги'
              width={200}
              height={100}
              
            />
            <div className='bf-8__slogan'>Решаем вместе</div >
          </div >
        </div >
        <div className='bf-8__content'>
          <div className='bf-8__text'>
            Сложности с получением «Пушкинской карты» или приобретением билетов? Знаете, как улучшить работу учреждений культуры?
          </div >
          <div className='bf-8__bottom-wrap'>
            <div className='bf-8__btn-wrap'>
              <button
                className='pos-banner-btn_2'
                type='button'
              >Написать о проблеме
              </button >
            </div >
          </div>
        </div >
      </div >
    </div >
  )
}

export default GosWidget