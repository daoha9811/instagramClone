import React from 'react';
import EmptyImg from '../assets/images/empty.svg';


export default () => {
    return <div>
        <img alt="empty" src={EmptyImg} width="200" height="200" />
        <span>Hiện tại tính năng đang được cập nhập mời sử dụng tính năng khác</span>
    </div>
}