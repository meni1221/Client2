
import Layout from "./layout/Layout";
import AuthProvider from "./providers/AuthProvider";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <div>
    <AuthProvider>
     <Layout children={<AppRouter/>}/>
    </AuthProvider>
    </div>
  )
}
