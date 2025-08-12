import React from 'react'
import './NoiDungThuGian.css'
import icon_search from '../../../../assets/images/icon_search.png'
import lake from '../../../../assets/images/lake.png'
import rain from '../../../../assets/images/rain.png'
import sea from '../../../../assets/images/sea.png'
import sky from '../../../../assets/images/sky.png'
import sunset from '../../../../assets/images/sunset.png'
import yoga from '../../../../assets/images/yoga.png'

const Noidung = () => {
  return (
    <div className='all'>
      <div className='noidung'>
        <div className='noidung-top'>
          <h4>Phổ biến</h4>
          <div className='noidung-top-right'>
            <h5>Xem tất cả</h5>
            <img src={icon_search} alt="" />
          </div>
        </div>
        <div className="noidung-bottom">
          <div className="baitap">
            <img src={yoga} alt="" />
            <div className='content'>
              <p>Yoga giảm stress và căng thẳng cho người mới</p>
            </div>
          </div>
          <div className="giaidieu">
            <img src={rain} alt="" />
            <div className='content'>
              <p>Tiếng mưa thư giãn</p>
            </div>
          </div>
          <div className="loihay">
            <img src={sunset} alt="" />
            <div className='content'>
              <p>Không quan trọng việc bạn đi chậm thế nào, miễn là đừng bao giờ dừng lại</p>
              <h4>Khổng Tử</h4>
            </div>
          </div>
          <div className="giaidieu">
            <img src={rain} alt="" />
            <div className='content'>
              <p>Tiếng mưa thư giãn</p>
            </div>
          </div>
        </div>
      </div>
      <div className='noidung'>
        <div className='noidung-top'>
          <h4>Bài tập</h4>
          <div className='noidung-top-right'>
            <h5>Xem tất cả</h5>
            <img src={icon_search} alt="" />
          </div>
        </div>
        <div className="noidung-bottom">
          <div className="baitap">
            <img src={yoga} alt="" />
            <div className='content'>
              <p>Yoga giảm stress và căng thẳng cho người mới</p>
            </div>
          </div>
          <div className="giaidieu">
            <img src={rain} alt="" />
            <div className='content'>
              <p>Tiếng mưa thư giãn</p>
            </div>
          </div>
          <div className="loihay">
            <img src={sunset} alt="" />
            <div className='content'>
              <p>Không quan trọng việc bạn đi chậm thế nào, miễn là đừng bao giờ dừng lại</p>
              <h4>Khổng Tử</h4>
            </div>
          </div>
          <div className="giaidieu">
            <img src={rain} alt="" />
            <div className='content'>
              <p>Tiếng mưa thư giãn</p>
            </div>
          </div>
        </div>
      </div>
      <div className='noidung'>
        <div className='noidung-top'>
          <h4>Giai điệu</h4>
          <div className='noidung-top-right'>
            <h5>Xem tất cả</h5>
            <img src={icon_search} alt="" />
          </div>
        </div>
        <div className="noidung-bottom">
          <div className="baitap">
            <img src={yoga} alt="" />
            <div className='content'>
              <p>Yoga giảm stress và căng thẳng cho người mới</p>
            </div>
          </div>
          <div className="giaidieu">
            <img src={rain} alt="" />
            <div className='content'>
              <p>Tiếng mưa thư giãn</p>
            </div>
          </div>
          <div className="loihay">
            <img src={sunset} alt="" />
            <div className='content'>
              <p>Không quan trọng việc bạn đi chậm thế nào, miễn là đừng bao giờ dừng lại</p>
              <h4>Khổng Tử</h4>
            </div>
          </div>
          <div className="giaidieu">
            <img src={rain} alt="" />
            <div className='content'>
              <p>Tiếng mưa thư giãn</p>
            </div>
          </div>
        </div>
      </div>
      <div className='noidung'>
        <div className='noidung-top'>
          <h4>Lời hay</h4>
          <div className='noidung-top-right'>
            <h5>Xem tất cả</h5>
            <img src={icon_search} alt="" />
          </div>
        </div>
        <div className="noidung-bottom">
          <div className="baitap">
            <img src={yoga} alt="" />
            <div className='content'>
              <p>Yoga giảm stress và căng thẳng cho người mới</p>
            </div>
          </div>
          <div className="giaidieu">
            <img src={rain} alt="" />
            <div className='content'>
              <p>Tiếng mưa thư giãn</p>
            </div>
          </div>
          <div className="loihay">
            <img src={sunset} alt="" />
            <div className='content'>
              <p>Không quan trọng việc bạn đi chậm thế nào, miễn là đừng bao giờ dừng lại</p>
              <h4>Khổng Tử</h4>
            </div>
          </div>
          <div className="giaidieu">
            <img src={rain} alt="" />
            <div className='content'>
              <p>Tiếng mưa thư giãn</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Noidung
