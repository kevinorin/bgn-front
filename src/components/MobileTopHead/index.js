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
            <Cancel closeMenu={props.closeMenu} />
        </div>
    )
}

export default MobileTopHead;