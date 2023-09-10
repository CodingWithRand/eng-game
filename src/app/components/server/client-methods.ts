// 'use client';

// export function getCookie(name: string) {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.startsWith(name + '=')) {
//         return JSON.parse(decodeURIComponent(cookie.substring(name.length + 1)));
//       }
//     }
//     return '';
// }

// export async function setCookie(cookieAttributes: { cookieName: string, cookieValue: any | { [key: string]: any | any[] | null }, path?: string, maxAge?: number }) {
//     try {
//       const response = await fetch('api/cookies', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ca: cookieAttributes })
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error setting cookie:', error);
//     }
//   };