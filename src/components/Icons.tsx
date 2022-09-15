interface iconProps {
  bgColor?: string
  fontColor?: string
  borderColor?: string
  fillColor?: string
  width: string
  height: string
}

export const PlayIcon = ({
  bgColor = '#858585',
  borderColor = 'white',
  fillColor = 'white',
  width,
  height
}: iconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='20.5' cy='20' r='20' fill={bgColor} fill-opacity='0.5' />
    <path
      d='M17.5215 15.3193V25.5321L26.0321 20.4257L17.5215 15.3193Z'
      fill={borderColor}
    />
    <path
      d='M17.5215 15.3193L17.9074 14.6762C17.6757 14.5372 17.3871 14.5336 17.152 14.6667C16.9168 14.7998 16.7715 15.0491 16.7715 15.3193H17.5215ZM17.5215 25.5321H16.7715C16.7715 25.8023 16.9168 26.0516 17.152 26.1848C17.3871 26.3179 17.6757 26.3142 17.9074 26.1752L17.5215 25.5321ZM26.0321 20.4257L26.418 21.0688C26.6439 20.9333 26.7821 20.6892 26.7821 20.4257C26.7821 20.1623 26.6439 19.9181 26.418 19.7826L26.0321 20.4257ZM18.2715 25.5321V15.3193H16.7715V25.5321H18.2715ZM25.6463 19.7826L17.1356 24.889L17.9074 26.1752L26.418 21.0688L25.6463 19.7826ZM17.1356 15.9625L25.6463 21.0688L26.418 19.7826L17.9074 14.6762L17.1356 15.9625Z'
      fill={fillColor}
    />
  </svg>
)

export const StopIcon = ({
  bgColor = '#858585',
  borderColor = 'white',
  fillColor = 'white',
  width,
  height
}: iconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='20.5' cy='20' r='20' fill={bgColor} fill-opacity='0.5' />
    <path
      d='M15.8193 15.3193V14.5693C15.4051 14.5693 15.0693 14.9051 15.0693 15.3193H15.8193ZM26.0321 15.3193H26.7821C26.7821 14.9051 26.4463 14.5693 26.0321 14.5693V15.3193ZM26.0321 25.5321V26.2821C26.4463 26.2821 26.7821 25.9463 26.7821 25.5321H26.0321ZM15.8193 25.5321H15.0693C15.0693 25.9463 15.4051 26.2821 15.8193 26.2821V25.5321ZM15.8193 16.0693H26.0321V14.5693H15.8193V16.0693ZM25.2821 15.3193V25.5321H26.7821V15.3193H25.2821ZM26.0321 24.7821H15.8193V26.2821H26.0321V24.7821ZM16.5693 25.5321V15.3193H15.0693V25.5321H16.5693Z'
      fill={borderColor}
    />
    <rect
      x='15.9097'
      y='15.6084'
      width='10.1454'
      height='9.36502'
      fill={fillColor}
    />
  </svg>
)

export const AvatarVoicePlayBtn = ({
  bgColor = '#858585',
  borderColor = 'white',
  fillColor = 'white'
}: colorProps) => (
  <svg
    width='52'
    height='52'
    viewBox='0 0 52 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      cx='26.1273'
      cy='26.0001'
      r='25.6273'
      fill='#858585'
      fill-opacity='0.5'
    />
    <path
      d='M22.3105 20.002V33.0882L33.2158 26.5451L22.3105 20.002Z'
      fill='white'
    />
    <path
      d='M22.3105 20.002L22.6964 19.3588C22.4647 19.2198 22.1762 19.2162 21.941 19.3493C21.7059 19.4824 21.5605 19.7317 21.5605 20.002H22.3105ZM22.3105 33.0882H21.5605C21.5605 33.3584 21.7059 33.6077 21.941 33.7409C22.1762 33.874 22.4647 33.8704 22.6964 33.7313L22.3105 33.0882ZM33.2158 26.5451L33.6016 27.1882C33.8275 27.0527 33.9658 26.8085 33.9658 26.5451C33.9658 26.2816 33.8275 26.0375 33.6016 25.902L33.2158 26.5451ZM23.0605 33.0882V20.002H21.5605V33.0882H23.0605ZM32.8299 25.902L21.9247 32.4451L22.6964 33.7313L33.6016 27.1882L32.8299 25.902ZM21.9247 20.6451L32.8299 27.1882L33.6016 25.902L22.6964 19.3588L21.9247 20.6451Z'
      fill='white'
    />
  </svg>
)

export const AvatarVoiceStopBtn = ({
  bgColor = '#858585',
  borderColor = 'white',
  fillColor = 'white'
}: colorProps) => (
  <svg
    width='53'
    height='52'
    viewBox='0 0 53 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      cx='26.3817'
      cy='26.0001'
      r='25.6273'
      fill='#858585'
      fill-opacity='0.5'
    />
    <rect x='20.5' y='20.3728' width='13' height='12' fill='white' />
  </svg>
)
