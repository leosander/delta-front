import { Routes, Route, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn/indext";
export function Router() {

    const PrivateWrapper = ({ children }: any) => {
        const token = sessionStorage.getItem('jwtToken');
      
        if (token) {
          return children;
        } else {
          toast.error('Faça seu login para continuar.')
          return <Navigate to="/login" replace />;
        }
      };
      

    return (
        <Routes>
            <Route path="/" element={<PrivateWrapper><Home /></PrivateWrapper>} />
            <Route path="/login" element={<SignIn />} />
        </Routes>
    );
}