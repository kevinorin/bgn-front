import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReactMarkdown from "react-markdown";
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    backgroundColor: theme.palette.background.black
  },
  title: {
    color: theme.palette.font
  },
  mainImg: {
    height: '100%',
    width: '100%'
  },
  textBlock: {
    padding: '10px'
  },
  description: {
    color: theme.palette.font
  },
  gener: {
    fontSize: '11px',
    fontWeight: 'bold'
  },
  case1: {
    color: theme.palette.blue
  },
  case2: {
    color: theme.palette.primary.main
  },
  link: {
    textDecoration: 'none'
  },
  divider: {
    marginBottom: '1rem',
    marginTop: '1rem',
    backgroundColor: '#878787'
  },
  flexWrapper: {
    display: 'flex',
    '& p': {
      marginRight: '10px',
      margin: 0
    }
  }
}));

export default function NewsLanding({ contentSections, createdAt }) {
  const classes = useStyles();
  return (
    <div className={classes.textBlock}>
      {/* <p className={classes.gener}>
        <span className={classes.case1}>#ADVENTURE </span>
        <span className={classes.case2}>#CRIME</span>
      </p> */}


      <h1>{contentSections[0].title}</h1>
      <div className={classes.flexWrapper}>
        <p>Blockchain Games Network</p>
        <p>2 min read</p>
        <p><i>{createdAt.replace('T06:58:06.368Z', '')}</i></p>
        
        <p><FavoriteBorderIcon /></p>
        <p><ShareIcon /></p>
      </div>
      <Divider className={classes.divider} />
      {/* <div dangerouslySetInnerHTML={{ __html: contentSections[0].smallTextWithLink }} /> */}
      {/* <ReactMarkdown source={contentSections[0].smallTextWithLink} escapeHtml={false} /> */}
      <ReactMarkdown children={contentSections[0].smallTextWithLink} />
    </div>
  )
}