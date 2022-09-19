import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Whether from '../Whether';
import Notifications from '../Notification';
import Translate from '../Translate';
import Setting from '../Setting';
import Cancel from '../Cancel';
import ToggleButton from '../ThemeModeToggle';

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        display: 'flex',
        paddingLeft: '15px',
        '& .themeButton': {
            alignItems: 'end'
        }
    },
    cancelButton: {
        marginRight: '20px'
    }
}))

const MobileTopHead = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.mainWrapper}>
            {/* <Whether /> */}
            {/* <Notifications /> */}
            {/* <Translate /> */}
            {/* <Setting /> */}
            <ToggleButton />
            <Cancel passClass={classes.cancelButton} closeMenu={props?.closeMenu} />
        </div>
    )
}

export default MobileTopHead;