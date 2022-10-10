import styled from 'styled-components'

export const Wrapper = styled.div`
  height: calc(100% - 4.8rem - 2.4rem);
  overflow: auto;
`

export const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

export const TextGroup = styled.div`
  border-radius: 1rem;
  width: 100%;
  background-color: #f6f9ff;

  font-size: 1.6rem;
`

export const TextBox = styled.div<{ findData: any }>`
  background-color: ${({ findData }) => (!findData ? 'none' : '#E6EDFF')};
  border-radius: 1rem;
  padding: 1rem;
  word-break: break-all;
`
