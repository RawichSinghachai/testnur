import React from 'react'
import {
  ComposedChart,
  Area,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { BH3thPercentile, BH10thPercentile, BH25thPercentile, BH50thPercentile, BH75thPercentile, BH90thPercentile,BH97thPercentile } from '@/data/heightBoy'

type Props = {}

export default function chart({}: Props) {
  return (
    <ComposedChart width={400} height={400} >
      {/* <XAxis dataKey="x" allowDuplicatedCategory={false}/> */}
      <XAxis dataKey="x" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />



      {/* <Area type="monotone" dataKey="y" fill="#8884d8" data={BH3thPercentile} />
      <Area type="monotone" dataKey="y" fill="#84D892" data={BH10thPercentile} />
      <Area type="monotone" dataKey="y" fill="#BFD884" data={BH25thPercentile} />
      <Area type="monotone" dataKey="y" fill="#E2941F" data={BH50thPercentile} />
      <Area type="monotone" dataKey="y" fill="#896CF4" data={BH75thPercentile} />
      <Area type="monotone" dataKey="y" fill="#896CF4" data={BH90thPercentile} /> */}
      <Area type="monotone" dataKey="y" fill="#896CF4" data={BH97thPercentile} />

      {/* <Scatter fill="#D8849C" dataKey="y" name='Test1' data={data2}/> */}
    </ComposedChart>
  )
}