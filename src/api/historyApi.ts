import { Cookies } from 'react-cookie'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Projects, Project, ProjectInfo, HistoryData } from 'history'

const url = import.meta.env.VITE_SERVICE_URL
const cookies = new Cookies()

export const historyApi = createApi({
  reducerPath: 'historyApi',
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
    getHistory: builder.query<HistoryData[], void>({
      query: () => ({
        url: 'projects',
        method: 'GET'
      }),
      transformResponse: (responseData: Projects) => {
        return responseData['data']
      }
    }),
    createProject: builder.mutation<ProjectInfo, void>({
      query: () => ({
        url: 'projects',
        method: 'POST'
      }),
      transformResponse: (responseData: Project) => {
        return responseData['data']
      }
    })
  })
})

export const { useGetHistoryQuery, useCreateProjectMutation } = historyApi
