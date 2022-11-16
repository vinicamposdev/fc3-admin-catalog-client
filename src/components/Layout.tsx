import { Box } from '@mui/material'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Container } from '@mui/system'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ m: 4, mb: 4, backgroundColor: 'white' }}>
        {children}
      </Container>
    </Box>
  )
}
