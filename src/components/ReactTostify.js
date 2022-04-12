import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store/globalStore';
toast.configure()

export default function ReactTostify() {

    const dispatch = useDispatch();
    const globalStore = store.getState()
    const showSuccess = useSelector(state => state.showSuccess);
    const successMsg = useSelector(state => state.successMsg);
    const responseType = useSelector(state => state.responseType);

    useEffect(() => {
        // console.log('showSuccess', globalStore.showSuccess);
        if (showSuccess) {
            if (responseType === 'success') {
                toast.success(successMsg, { autoClose: 2000, onClose: () => { dispatch({ type: 'ResetSuccess' }) } });
            }
            else if (responseType === 'error') {
                toast.error(successMsg, { autoClose: 2000, onClose: () => { dispatch({ type: 'ResetSuccess' }) } });
            }
        }
    }, [dispatch, globalStore.showSuccess, responseType, showSuccess, successMsg]);
    return (
        <div>
            <ToastContainer />
        </div>
    );
}
