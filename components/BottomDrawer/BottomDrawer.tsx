'use client'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { useState } from 'react'
import { Props } from './types'

const drawerBleeding = 56

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}))

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: '#7D8498',
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)'
}))

export default function BottomDrawer (props: Props) {
  const { window } = props
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(85% - ${drawerBleeding}px)`,
            overflow: 'visible',
            margin: '0 auto',
            width: '100%',
            maxWidth: 'var(--max-width)'
          }
        }}
      />
      {/* @ts-expect-error */}
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true
        }}
      >
        <StyledBox
          sx={{
            bgcolor: '#2E4376',
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 23,
            borderTopRightRadius: 23,
            visibility: 'visible',
            right: 0,
            left: 0,
            height: '56px'
          }}
        >
          <Puller />
        </StyledBox>
        <StyledBox
          sx={{
            bgcolor: '#2E4376',
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {Array.from({ length: 100 }).map((e, i) => {
            return <div key={i} >{i}</div>
          }) }
        </StyledBox>
      </SwipeableDrawer>
    </>
  )
}
