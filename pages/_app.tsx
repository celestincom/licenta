import CloseSnackbarButton from "@/components/shared/CloseSnackbarButton";
import "@/styles/globals.css";
import { Page } from "@/types/page";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";

type Props = AppProps & {
  Component: Page;
  messages: any;
};

const App = ({ Component, pageProps, messages }: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <SnackbarProvider
      hideIconVariant
      preventDuplicate
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      style={{ fontSize: 16, fontWeight: "400" }}
      action={(key) => <CloseSnackbarButton snackKey={key} />}
    >
      {/* <div className="bg-gray-500"> */}
        <Component {...pageProps} />
      {/* </div> */}
      {/* {getLayout(<Component {...pageProps} />)} */}
    </SnackbarProvider>
  );
};

export default App;
