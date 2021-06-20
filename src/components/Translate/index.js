import * as React from 'react';
import Router, { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import NoSsr from '@material-ui/core/NoSsr';
import LanguageIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import { LANGUAGES_LABEL } from '../../utils/constants';
import { useUserLanguage, useTranslate } from '../../utils/i18n';

const CROWDIN_ROOT_URL = 'https://translate.material-ui.com/project/material-ui-docs/';

const useStyles = makeStyles((theme) => ({
    '@global': {
      '#main-content': {
        outline: 0,
      },
    },
    mainWrapper: {
        color: theme.palette.font
    },
    root: {
      display: 'flex',
      backgroundColor: theme.palette.background.level1,
    },
    grow: {
      flex: '1 1 auto',
    },
    language: {
      margin: theme.spacing(0, 0.5, 0, 1),
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
  }));

const Translate = () => {
    const [languageMenu, setLanguageMenu] = React.useState(null);
    const t = useTranslate();
    const userLanguage = useUserLanguage();
    const handleLanguageIconClick = (event) => {
        setLanguageMenu(event.currentTarget);
      };
      const handleLanguageMenuClose = (event) => {
        if (event.currentTarget.nodeName === 'A') {
          document.cookie = `userLanguage=${event.currentTarget.lang};path=/;max-age=31536000`;
        }
        setLanguageMenu(null);
      };
    const classes = useStyles();
    const router = useRouter();
//   const { canonical } = pathnameToLanguage(router.asPath);
//   const { activePage } = React.useContext(PageContext);
    return (
        <>
        <Tooltip title={t('appFrame.changeLanguage')} enterDelay={300}>
            <Button
              color="inherit"
              aria-owns={languageMenu ? 'language-menu' : undefined}
              aria-haspopup="true"
              onClick={handleLanguageIconClick}
              data-ga-event-category="header"
              data-ga-event-action="language"
              className={classes.mainWrapper}
            >
              <LanguageIcon />
              <span className={classes.language}>
                {LANGUAGES_LABEL.filter((language) => language.code === userLanguage)[0].text}
              </span>
              <ExpandMoreIcon fontSize="small" />
            </Button>
          </Tooltip>
          <NoSsr defer>
            <Menu
              id="language-menu"
              anchorEl={languageMenu}
              open={Boolean(languageMenu)}
              onClose={handleLanguageMenuClose}
            >
              {LANGUAGES_LABEL.map((language) => (
                <MenuItem
                  component="a"
                  data-no-link="true"
                  href={language?.code === 'en' ? '' : `/${language?.code}''`}
                  key={language.code}
                  selected={userLanguage === language.code}
                  onClick={handleLanguageMenuClose}
                  lang={language.code}
                  hrefLang={language.code}
                >
                  {language.text}
                </MenuItem>
              ))}
              <Box sx={{ my: 1 }}>
                <Divider />
              </Box>
              <MenuItem
                component="a"
                data-no-link="true"
                href={
                  userLanguage === 'en'
                    ? `${CROWDIN_ROOT_URL}`
                    : `${CROWDIN_ROOT_URL}${crowdInLocale}#/staging`
                }
                rel="noopener nofollow"
                target="_blank"
                key={userLanguage}
                lang={userLanguage}
                hrefLang="en"
                onClick={handleLanguageMenuClose}
              >
                {t('appFrame.helpToTranslate')}
              </MenuItem>
            </Menu>
          </NoSsr>
        </>
    )
}

export default Translate;