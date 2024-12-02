import Layout from "./layout/layout";
import AuthProvider from "./providers/AuthProvider";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <>
    <AuthProvider>
     <Layout children={<AppRouter/>}/>
    </AuthProvider>
    </>
  )
}
