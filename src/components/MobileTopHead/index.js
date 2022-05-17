import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Whether from '../Whether';
import Notifications from '../Notification';
import Translate from '../Translate';
import Setting from '../Setting';
import Cancel from '../Cancel'

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        display: 'flex'
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
            <Cancel passClass={classes.cancelButton} closeMenu={props?.closeMenu} />
        </div>
    )
}

export default MobileTopHead;