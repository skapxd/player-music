'use client'
import Link from 'next/link'
import { SVGProps } from 'react'
import style from './Header.module.scss'
import { IconButton } from '@mui/material'

export const Header = () => {
  return (
    <div className={style.box}>
      <IconButton size="large" >
        <BurgerIcon />
      </IconButton>

      <Link href={'/search'} className={style.searchIcon} >
        <IconButton size="large" >
          <SearchIcon />
        </IconButton>
      </Link>
    </div>
  )
}

function BurgerIcon (props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12h18M3 6h18"
        stroke="#999"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M3 18h18"
        stroke="#999"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SearchIcon (props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.25 10.5a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
        stroke="#999"
        strokeWidth={1.5}
      />
      <path
        d="M21 21l-5.2-5.2"
        stroke="#999"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
