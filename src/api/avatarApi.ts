import { Cookies } from 'react-cookie'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Avatar, AvatarPreview } from 'avatar'
import type { Video } from 'history'

const url = import.meta.env.VITE_SERVICE_URL
const cookies = new Cookies()

export const avatarApi = createApi({
  reducerPath: 'avatarApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token = cookies.get('accessToken')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getAvatar: builder.query({
      query: (id) => ({
        url: `projects/${id}/avatar`,
        method: 'GET'
      }),
      transformResponse: (responseData: Avatar) => {
        return responseData['data']
      }
    }),
    createAvatarPreview: builder.mutation({
      query: (selectedValue) => ({
        url: 'projects/avatar-preview',
        method: 'POST',
        body: selectedValue
      }),
      transformResponse: (responseData: AvatarPreview) => {
        return responseData['data']
      }
    }),
    createVideo: builder.mutation({
      query: ({ projectId, selectedValue }) => ({
        url: `projects/${projectId}/avatar`,
        method: 'POST',
        body: selectedValue
      }),
      transformResponse: (responseData: Video) => {
        return responseData['data']
      }
    })
  })
})

export const {
  useGetAvatarQuery,
  useCreateAvatarPreviewMutation,
  useCreateVideoMutation
} = avatarApi
