import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../public/pages/Home';
import Login from '../public/auth/Login';
import Registro from '../public/auth/Registro';
import Cuenta from '../public/user/Cuenta';
import Productos from '../public/pages/Productos';
import Producto from '../public/pages/Producto';
import Users from '../public/admin/Users';
import NotFoundPage from '../public/pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from '../helpers/routes';
import Device from '../public/admin/Device';
import Dashboard from '../public/user/iot/Dashboard';
import Devices from '../public/user/iot/Devices';
import IoTLayout from '../layouts/IoTLayout';
import DeviceU from '../public/user/iot/DeviceU';
import Quienessomos from '../public/pages/Quienessomos';
import Preguntas from '../public/pages/Preguntas';
import Politicas from '../public/pages/Politicas';
import Contacto from '../public/pages/Contacto';
import Recuperacion from '../public/auth/Recuperacion';

export default function AppRouter() {

    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.catalogo} element={<Productos />} />
            <Route path={routes.detalleProducto} element={<Producto />} />
            <Route path={routes.quienesSomos} element={<Quienessomos/>}/>
            <Route path={routes.faq} element={<Preguntas/>}/>
            <Route path={routes.politicas} element={<Politicas/>}/>
            <Route path={routes.contacto} element={<Contacto/>} />
            <Route element={<PublicRoute />}>


                <Route path={routes.login} element={<Login />} />
                <Route path={routes.registro} element={<Registro />} />
                <Route path={routes.Recuperacion} element={<Recuperacion/>} />


            </Route>
            <Route element={<PrivateRoute/>}>
                <Route path={routes.perfil} element={<Cuenta />} />
            </Route>
            <Route element={<PrivateRoute hasRole={roles.regular}/>}>
                
                <Route path={routes.iotU} element={<IoTLayout />} >
                    <Route path={routes.iotDashboardU} element={<Dashboard />} />
                    <Route path={routes.iotDevicesU} element={<Devices />} />
                    <Route path={routes.iotDeviceU} element={<DeviceU />} />
                </Route>
            </Route>
            <Route element={<PrivateRoute hasRole={roles.admin} />}>
                <Route path={routes.usuariosA} element={<Users />} />
                <Route path={routes.iotA} element={<Device />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}
