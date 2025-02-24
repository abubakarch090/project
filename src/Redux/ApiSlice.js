import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie'; // To handle cookies

// Create the API slice
export const apiSlice = createApi({
  reducerPath: 'api', // Unique name for this slice
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/auth', // Base API URL
    // Optional: You can add an error handler here
    prepareHeaders: (headers, { endpoint }) => {
      // Check if the current endpoint is 'profile' to add token
      if (endpoint === 'profile') {
        const token = Cookies.get('token');
        
        // Add Authorization header if token exists
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Signup mutation
    signup: builder.mutation({
      query: (newUser) => ({
        url: '/signup', // The endpoint for signup
        method: 'POST', // HTTP method
        body: newUser, // Payload
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),

    // Login mutation
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login', // The endpoint for login
        method: 'POST', // HTTP method
        body: credentials, // Payload for login
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),

    // Profile query (assuming profile fetching uses GET method)
    profile: builder.query({
      query: () => ({
        url: '/profile', // The endpoint for fetching profile data
        method: 'GET', // GET request
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),


    profileUpdate: builder.mutation({
      query: (credentials) => {
        const token = Cookies.get('token'); // Get token from cookies

        return {
          url: '/profileUpdate',
          method: 'PUT',
          body: credentials,
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }), // Add token if available
          },
        };
      },
    }),

    getJobs: builder.query({
      query: () => ({
        url: '/jobs', // The endpoint for fetching profile data
        method: 'GET', // GET request
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),



  }),
});

// Export hooks for the endpoints
export const { useSignupMutation, useLoginMutation, useProfileQuery, useGetJobsQuery, useProfileUpdateMutation } = apiSlice;
