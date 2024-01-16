import type { FilterColumn } from "@/types/filter";

const cols: FilterColumn[] = [
  {
    type: 'text',
    label: '標題',
    model: 'title'
  },
  {
    type: 'date',
    label: '日期',
    model: ['sdate', 'edate']
  },
  {
    type: 'email',
    label: '信箱',
    model: 'email'
  },
  {
    type: 'radio',
    label: '性別',
    model: 'gender',
    options: [{ text: '男', value: 1 }, { text: '女', value: 2 }]
  },
  {
    type: 'select',
    label: '技術',
    model: 'tech',
    options: [
      {
        text: '無',
        value: ''
      }
    ].concat(['前端', '後端', '全端', '爬蟲', 'AI', '區塊鏈', '算法', '運維', '網安', '測試'].map(item => ({ text: item, value: item })))
  },
  {
    type: 'tel',
    label: '電話',
    model: 'phone'
  },
  {
    type: 'checkbox',
    label: '興趣',
    model: 'interest',
    options: ['唱', '跳', 'rap', '籃球'].map(item => ({ text: item, value: item }))
  },
];

export default cols;