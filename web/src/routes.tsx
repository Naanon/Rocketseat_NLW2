import React from 'react';
import { BrowserRouter, Routes as Rts, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes() {
    return (
        <BrowserRouter>
            <Rts>
                <Route path="/" element={<Landing />} />
                <Route path="/study" element={<TeacherList />} />
                <Route path="/give-classes" element={<TeacherForm />} />
            </Rts>
        </BrowserRouter>
    )
}

export default Routes;