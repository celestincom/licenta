import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"
          integrity="sha512-cOH8ndwGgPo+K7pTvMrqYbmI8u8k6Sho3js0gOqVWTmQMlLIi6TbqGWRTpf1ga8ci9H3iPsvDLr4X7xwhC/+DQ=="
          //@ts-ignore
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/Flip.min.js"
          integrity="sha512-Vi0uAaoQQrIY8GZpbmwDW+BpKS+Xhf3FCh0iLWNR6oHlFtZ2hBzWoMEr4NXLd7CBnPKSjfL7fJxzk3inVPasdg=="
          //@ts-ignore
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
