import React, { useState, useEffect } from 'react'
import * as S from './style'
import { useNavigate } from 'react-router'
import { login, UserInfo } from 'api/userApi'
import { KakaoIcon, GoogleIcon } from 'components/Icons'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { TheFooter, TheHeader } from 'components'
import { useSignInMutation } from 'api/userApi'
interface SignInForm {
  id: string
  password: string
}

export const SignIn = () => {
  const navigate = useNavigate()

  const [signIn] = useSignInMutation()

  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  // 오류메세지
  const [idMsg, setIdMsg] = useState<string>('')
  const [passwordMsg, setPasswordMsg] = useState<string>('')
  //유효성검사
  const [isId, setIsId] = useState<boolean>(false)
  const [isPassword, setIsPassword] = useState<boolean>(false)
  //에러 색상
  const [idColor, setIdColor] = useState({ borderColor: '#88888D' })
  const [pwColor, setPwColor] = useState({ borderColor: '#88888D' })

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const idCurrent = e.target.value
    setId(idCurrent)
    const iRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
    if (idCurrent === '') {
      setIdMsg('입력한 아이디가 없습니다.')
      setIsId(false)
      setIdColor({ borderColor: '#E47B00' })
    } else if (!iRegex.test(idCurrent)) {
      setIdMsg('입력한 아이디를 확인해주세요.')
      setIsId(false)
      setIdColor({ borderColor: '#E47B00' })
    } else if (iRegex.test(idCurrent)) {
      setIdMsg('')
      setIsId(true)
      setIdColor({ borderColor: '#336CFF' })
    }
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)
    const pRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/
    if (passwordCurrent === '') {
      setPasswordMsg('입력한 비밀번호가 없습니다.')
      setIsPassword(false)
      setPwColor({ borderColor: '#E47B00' })
    } else if (!pRegex.test(passwordCurrent)) {
      setPasswordMsg(
        '소문자,대문자,숫자,특수문자를 포함하여 최소8자로 입력해주세요.'
      )
      setIsPassword(false)
      setPwColor({ borderColor: '#E47B00' })
    } else if (pRegex.test(passwordCurrent)) {
      setPasswordMsg('')
      setIsPassword(true)
      setPwColor({ borderColor: '#336CFF' })
    }
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    const response = await signIn({ id: id, password: password })
    const idValue = id
    localStorage.setItem('userid', idValue)

    if ((response as any).data == undefined) {
      alert('아이디가 존재하지않거나 비밀번호가 올바르지않습니다.')
    } else if ((response as any).data.code === 200) {
      navigate('/project-history')
    }
  }

  const navigateSignUp = () => {
    navigate('/sign-up')
  }

  const k = async () => {
    window.open('https://hiavatar.minoflower.com/oauth2/authorization/kakao')
  }
  const g = async () => {
    window.location.href =
      'https://hiavatar.minoflower.com/oauth2/authorization/google'
    let codeValue = new URL(window.location.href).searchParams.get('state')
  }

  return (
    <div>
      <TheHeader />
      <S.Container>
        <S.Wrapper>
          <S.TopText>로그인</S.TopText>
          <form onSubmit={onSubmit as any}>
            <S.EmailWrapper>
              <S.MidText htmlFor='id'>아이디</S.MidText>
              <S.EmailInput
                id='id'
                type='text'
                placeholder='아이디를 입력해 주세요.'
                onChange={onChangeId}
                style={idColor}
              />
              <S.ErrorSpan>{idMsg}</S.ErrorSpan>
            </S.EmailWrapper>
            <S.PwWrapper>
              <S.MidText htmlFor='password'>패스워드</S.MidText>
              <S.PwInput
                id='password'
                type='password'
                placeholder='비밀번호를 입력해 주세요.'
                onChange={onChangePassword}
                style={pwColor}
              />
              <S.ErrorSpan>{passwordMsg}</S.ErrorSpan>
            </S.PwWrapper>
            <S.BotText>
              회원이 아니신가요?
              <S.SignUpSpan onClick={navigateSignUp}>가입하기</S.SignUpSpan>
            </S.BotText>
            <S.SignInBtn
              type='submit'
              disabled={!(isId && isPassword)}
              style={{
                backgroundColor: isId && isPassword ? '#336CFF' : '#D0D0D1'
              }}
            >
              로그인
            </S.SignInBtn>
          </form>
          <S.SimpleText>간편로그인하기</S.SimpleText>
          <S.SimpleWrapper>
            <div onClick={k}>
              <KakaoIcon width='44' height='44' />
            </div>
            <div onClick={g}>
              <GoogleIcon width='44' height='44' />
            </div>
          </S.SimpleWrapper>
        </S.Wrapper>
      </S.Container>
      <TheFooter />
    </div>
  )
}
