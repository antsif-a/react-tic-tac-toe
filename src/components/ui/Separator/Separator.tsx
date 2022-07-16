import React from 'react';
import useThemeClassName from '@/hooks/useThemeClassName';
import SeparatorStyles from './Separator.module.scss';

export default function Separator() {
    return (
        <div className={useThemeClassName(SeparatorStyles.separator)} />
    );
}
