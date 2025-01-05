
import { createRoot } from 'react-dom/client'
import './assets/index.scss'

import { Spin } from 'antd/lib/index'
import { RouterView } from 'oh-router-react'
import React from 'react'
import { router } from './router'
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterView
      router={router}
      splash={
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spin size="large" />
        </div>
      }
    />
  </React.StrictMode>
)
