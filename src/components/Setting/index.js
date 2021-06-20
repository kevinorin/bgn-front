import * as React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslate } from '../../utils/i18n';

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        color: theme.palette.font
    }
}));

const Setting = () => {
    const classes = useStyles();
    const t = useTranslate();
    const [settingsOpen, setSettingsOpen] = React.useState(false);
  const handleSettingsDrawerOpen = () => {
    setSettingsOpen(true);
  };
    return (
        <Tooltip className={classes.mainWrapper} title={t('appFrame.toggleSettings')} enterDelay={300}>
            <IconButton color="inherit" onClick={handleSettingsDrawerOpen}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
    )
}

export default Setting;