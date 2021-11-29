import { createSelector } from 'reselect'

export const isAuthorized = state => state.auth.isAuth
export const isLoading = state => state.auth.isLoading
export const getUserName = state => state.auth.user.name