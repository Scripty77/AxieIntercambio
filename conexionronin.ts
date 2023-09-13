import { RoninConnector, ronin } from 'ronin-connector'
import { useEffect, useState } from 'react'

const connector = new RoninConnector({
  chains:[ronin],
  options:{
    projectId: 'PYbrgUEDyT2nhgsf0SQIOH6p2W3aiDCQ',
    metadata:{
      name: 'axie-intercambio',
      description: 'intercambio de activos',
      url: 'https://wagmi.sh',
      icons: ['https://wagmi.sh/icon.png'],
    },
  }
})

