import lake from '../../../../assets/images/lake.png'
import rain from '../../../../assets/images/rain.png'
import sea from '../../../../assets/images/sea.png'
import sky from '../../../../assets/images/sky.png'
import sunset from '../../../../assets/images/sunset.png'
import yoga from '../../../../assets/images/yoga.png'

const relaxContent = [
  {
    title: 'Phổ biến',
    items: [
      { type: 'baitap', img: yoga, text: 'Yoga giảm stress và căng thẳng cho người mới' },
      { type: 'giaidieu', img: rain, text: 'Tiếng mưa thư giãn' },
      { type: 'loihay', img: sunset, text: 'Không quan trọng việc bạn đi chậm thế nào, miễn là đừng bao giờ dừng lại', author: 'Khổng Tử' }
    ]
  },
  {
    title: 'Bài tập',
    items: Array(4).fill({
      type: 'baitap',
      img: yoga,
      text: 'Yoga giảm stress và căng thẳng cho người mới'
    })
  },
  {
    title: 'Giai điệu',
    items: Array(4).fill({
      type: 'giaidieu',
      img: rain,
      text: 'Tiếng mưa thư giãn'
    })
  },
  {
    title: 'Lời hay',
    items: [
      { type: 'loihay', img: sunset, text: 'Không quan trọng việc bạn đi chậm thế nào, miễn là đừng bao giờ dừng lại', author: 'Khổng Tử' },
      { type: 'loihay', img: sunset, text: 'Không quan trọng việc bạn đi chậm thế nào, miễn là đừng bao giờ dừng lại', author: 'Khổng Tử' },
      { type: 'loihay', img: sunset, text: 'Không quan trọng việc bạn đi chậm thế nào, miễn là đừng bao giờ dừng lại', author: 'Khổng Tử' },
      { type: 'loihay', img: sunset, text: 'Không quan trọng việc bạn đi chậm thế nào, miễn là đừng bao giờ dừng lại', author: 'Khổng Tử' }
    ]
  }
];

export default relaxContent;
