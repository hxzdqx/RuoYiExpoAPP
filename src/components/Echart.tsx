import {
  SVGRenderer,
  SvgChart as _SvgChart,
  SkiaChart as _SkiaChart,
} from '@wuba/react-native-echarts';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { useRef, useEffect, JSX } from 'react';
import { Dimensions } from 'react-native';

// 注册需要用到的组件
echarts.use([
  DataZoomComponent,
  SVGRenderer,
  BarChart,
  GridComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
  TitleComponent,
  PieChart,
  LineChart,
]);

// 图表默认宽高
const CHART_WIDTH = Dimensions.get('screen').width; // 默认用手机屏幕宽度
const CHART_HEIGHT = 300;

const Chart = ({
  option,
  onInit,
  width = CHART_WIDTH,
  height = CHART_HEIGHT,
  ChartComponent,
}: any) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart: echarts.ECharts;
    if (chartRef.current) {
      chart = echarts.init(chartRef.current, 'light', {
        renderer: 'svg',
        width,
        height,
      });
      option && chart.setOption(option);
      onInit?.(chart);
    }
    return () => chart?.dispose();
  }, [option]);
  return <ChartComponent ref={chartRef} />;
};

const SkiaChart = (
  props: JSX.IntrinsicAttributes & {
    option: any;
    onInit: any;
    width?: number | undefined;
    height?: number | undefined;
    ChartComponent: any;
  },
) => <Chart {...props} ChartComponent={_SkiaChart} />;
const SvgChart = (
  props: JSX.IntrinsicAttributes & {
    option: any;
    onInit: any;
    width?: number | undefined;
    height?: number | undefined;
    ChartComponent: any;
  },
) => <Chart {...props} ChartComponent={_SvgChart} />;
// 对外只暴露这哥俩就行
export { SkiaChart, SvgChart };
