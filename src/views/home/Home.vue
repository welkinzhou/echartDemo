<template>
  <div class="content">
    <h1 ref="main">这是主页</h1>
    <div id="mycharts" ref="myRef" class="chart-box" />
  </div>
</template>

<script>
// 引入echart背景图片
import pic from '../../assets/brach.jpeg'
import { ref, getCurrentInstance, onMounted } from 'vue'
export default {
  name: 'Home',
  setup() {
    // const picUrl = pic
    const ctx = getCurrentInstance().appContext //获取实例对象
    const myRef = ref(null)
    let myChart = null
    onMounted(() => {
      myChart = ctx.config.globalProperties.$echarts.init(document.getElementById('mycharts'))
      initT(myChart)
    })

    return {
      myRef
    }
  }
}
function initT(myChart) {
  const option = {
    backgroundColor: '#000',
    title: {
      show: false,
      text: '本市危货种类占比',
      textStyle: {
        color: '#FFFFFF'
      },
      left: '300px',
      top: '300'
    },
    tooltip: {
      show: false,
      formatter: '{b} <br> {c}%'
    },
    legend: {
      show: false,
      icon: 'circle',
      bottom: '43%',
      left: '10%',
      itemWidth: 7,
      itemHeight: 7,
      itemGap: 40,
      textStyle: {
        color: '#89A7AF'
      },
      data: [
        {
          name: '油车'
        },
        {
          name: '危化品'
        }
      ]
    },
    xAxis: [
      {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        //type: 'category',
        data: ['视频'],
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        }
      }
    ],
    series: [
      {
        name: '油车',
        type: 'bar',
        barWidth: 10,
        stack: '危货种类占比',
        // 标签设置
        label: {
          borderWidth: 2,
          // 文字离进度条距离
          distance: 22,
          //文字左右对齐方式
          align: 'center',
          //文字上下对齐方式
          verticalAlign: 'middle',
          borderRadius: 1,
          borderColor: '#E8A61F',
          //这里是整个label的背景图片
          backgroundColor: {
            image: pic
          },
          height: 40,
          width: 80,
          show: true,
          position: 'top',
          // 自定义格式化内容，样式在rich中调整, a代表在线离线status区域，b是百分比区域
          // @example {URL} https://echarts.apache.org/zh/option.html#series-bar.label.rich
          formatter: ['{a|在线}', '{b|{c}%}'].join('\n'),
          rich: {
            a: {
              backgroundColor: '#2b2f33',
              height: 20,
              padding: 2,
              color: '#fff'
            },
            b: {
              color: '#6db7ce',
              padding: 2
            }
          }
        },
        // 图形样式
        itemStyle: {
          color: '#8ddef1',
          // 进度条里面的圆角
          borderRadius: 5
        },
        data: [
          {
            // 所在百分比数字
            value: 26,
            itemStyle: {
              normal: {
                color: {
                  type: 'bar',
                  colorStops: [
                    {
                      offset: 0,
                      color: '#8ddef1' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#8ddef1' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            }
          }
        ]
      },
      {
        name: '危化品',
        type: 'bar',
        barWidth: 16,
        stack: '危货种类占比',
        // 图形样式
        itemStyle: {
          color: '#e7d794',
          // 进度条里面的圆角
          borderRadius: 5
        },
        label: {
          borderWidth: 2,
          distance: 22,
          align: 'center',
          verticalAlign: 'middle',
          borderRadius: 1,
          borderColor: '#E67C26',
          backgroundColor: {
            image: pic
          },
          height: 40,
          width: 80,
          show: true,
          position: 'top',
          formatter: ['{a|在线}', '{b|{c}%}'].join('\n'),
          rich: {
            a: {
              backgroundColor: '#2b2f33',
              height: 20,
              padding: 2,
              color: '#fff'
            },
            b: {
              color: '#6db7ce',
              padding: 2
            }
          }
        },
        data: [
          {
            value: 74,
            itemStyle: {
              normal: {
                color: {
                  type: 'bar',
                  colorStops: [
                    {
                      offset: 0,
                      color: '#e7d794' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#e7d794' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            }
          }
        ]
      }
    ]
  }

  myChart.setOption({ ...option })
}
// function formatLabal(params) {
//   console.log(params)
//   // 传入的数据值
//   const data = params.data
//   // 数据值 ， 如 53.1
//   const value = data.value
//   // 返回的label 模版
//   const htmlTem = `<span>看看可以不-${value}%</span>`
//   const element = document.createElement('div')
//   element.innerHTML = htmlTem
//   console.log(element)
//   console.log(element instanceof HTMLElement)
//   return element
// }
</script>

<style>
.chart-box {
  width: 600px;
  height: 600px;
}
</style>
