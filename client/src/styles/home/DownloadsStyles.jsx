import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'

import { WhiteAppleIcon, BlackAppleIcon , PlaystoreIcon } from '../../assets/icons/icons'
import { PrimaryButton } from "../ButtonStyles"

export const DownloadsSection = styled.section`
  ${tw`bg-bg2 py-24 px-10`}
`
export const DownloadsPosition = styled.div`
  ${tw`mx-auto max-w-xl`}

  h2 {
    ${tw`text-center`}
  }

  p:only-of-type {
    ${tw`mx-auto my-8 w-[90%] text-center text-black`}
  }
`

export const GroupButtons = styled.div`
  ${tw`mb-2 flex flex-col justify-center gap-12 pt-8 md:flex-row`}
`

export function DownloadButton({ title, subtitle, icon }) {
  const [hoverApple, setHoverApple] = useState(false)
  return (
    <PrimaryButton
      className="mx-auto flex w-[200px] items-center justify-center gap-4 rounded-md sm:w-[280px]"
      onMouseEnter={() => setHoverApple(true)}
      onMouseLeave={() => setHoverApple(false)}
    >
      {icon === 'Apple' &&
        (hoverApple ? <BlackAppleIcon /> : <WhiteAppleIcon />)}
      {icon === 'Google' && <PlaystoreIcon />}
      <span className="text-left text-[9px] leading-4">
        {title}
        <br />
        <span className="text-[18px]">{subtitle}</span>
      </span>
    </PrimaryButton>
  )
}
