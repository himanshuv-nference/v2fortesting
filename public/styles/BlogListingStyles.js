import { makeStyles } from '@material-ui/core/styles'

const BlogListingStyles = makeStyles((theme) => ({

    box1: {
        background: 'linear-gradient(90deg, rgba(20, 221, 224, 0.05) -5.88%, rgba(75, 90, 255, 0.05) 102.94%)',
        borderRadius: '2px',
    },
    nferenceBlog: {
        fontSize: '44px',
        lineHeight: '66px',
        color: '#2C2C2C',
        textAlign: 'center'
    },
    blogWith: {
        fontSize: '24px',
        lineHeight: '36px',
        color: '#627181',
        textAlign: 'center',
        ['@media (max-width:780px)']: {
            fontSize: '14px',
            lineHeight: '21px',
        },
    },
    imageContainer1: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginLeft: '500px',
        marginRight: '100px',
        ['@media (max-width:780px)']: {
            marginLeft: '70px',
            marginRight: '0px',
        },
    },
    imageContainer2: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    imageContainerText: {
        fontSize: '14px',
        lineHeight: '28px',
        fontWeight: '300',
        color: '#627181',
        ['@media (max-width:780px)']: {
            fontSize: '10px',
            lineHeight: '20px',
        },
    },

    imageContainerImage: {
        width: '80px',
        height: '122px',
    },


    body: {
        marginLeft: '8.43%',
        marginRight: '8.43%',
        ['@media (max-width:780px)']: {
            marginRight: '10px',
            marginLeft: '10px',
        },
        ['@media (min-width:3000px)']: {
            marginRight: '1200px',
            marginLeft: '1200px',
        },
    },
    head: {
        fontSize: '44px',
        fontWeight: '300',
        lineHeight: '140%',
        marginTop: '70px',
        // marginBottom:'12px',
        color: '#000000;',
        ['@media (max-width:780px)']: {
            fontSize: '22px',
            marginTop: '16px',
        },
    },
    headline: {
        background:
            'linear-gradient(to right, rgba(20, 221, 224, 1),rgba(75, 90, 255, 1))',
        mixBlendMode: 'multiply',
        height: '4px',
        width: '40px',
        marginTop: '16px',
        marginBottom: '16px',

        borderRadius: '20px',
    },
    label: {
        background:
            'linear-gradient(90deg, rgba(20, 221, 224, 0.05) -5.88%, rgba(75, 90, 255, 0.05) 102.94%)',
        borderRadius: '2px',
        display: 'flex',
        gap: '25px',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '32px',
        paddingBottom: '32px',
        marginTop: '32px',
        // marginRight: '-10px',
        marginLeft: '-10px',
        ['@media (max-width:780px)']: {
            paddingTop: '20px',
            paddingBottom: '20px',
            gap: '5px',
        },
    },
    Date: {
        flex: '1',
        textAlign: 'end',
    },
    head2: {
        fontSize: '44px',
        fontWeight: '300',
        lineHeight: '140%',
        marginTop: '70px',
        // marginBottom:'12px',
        color: '#000000;',
        ['@media (max-width:780px)']: {
            fontSize: '22px',
            marginTop: '50px',
        },
    },
    card: {
        display: 'flex',
        gap: '55px',
        marginTop: '35px',
        ['@media (max-width:780px)']: {
            gap: '8px',
            marginTop: '35px',
            flexDirection: 'column',
        },
    },
    cardTitle: {
        fontSize: '28px',
        fontWeight: '500',
        lineHeight: '140%',
        // letterSpacing:'0.005em',
        // marginTop:'70px',
        marginBottom: '8px',
        color: '#000000;',
        ['@media (max-width:780px)']: {
            fontSize: '14px',
            //   marginTop:'16px'
        },
    },
    postedIn: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '180%',
        letterSpacing: '0.005em',
        // marginTop:'70px',
        marginBottom: '8px',
        color: '#1C2329',
        ['@media (max-width:780px)']: {
            fontSize: '12px',

            //   marginTop:'16px'
        },
    },
    postedIndiv: {
        display: 'flex',
        gap: '5px',
    },

    authorsBlog: {
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '28px',
        letterSpacing: '0.005em',
        marginTop: '16px',
        marginBottom: '8px',
        color: '#627181',
        textAlign: 'left',
        ['@media (max-width:780px)']: {
            fontSize: '14px',
            marginTop: '4px',
            lineHeight: '20px',
        },
    },

    authorDate: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '0.005em',
        color: '#627181',
        ['@media (max-width:780px)']: {
            fontSize: '12px',
            marginTop: '8px',
            lineHeight: '10px',
        },
    },

    blogDesc: {
        ['@media (max-width:780px)']: {
            marginTop: '0px',
            marginBottom: '0px'
        },
    },

    cardesc: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '180%',
        letterSpacing: '0.005em',
        marginBottom: '8px',
        color: '#374554',
        ['@media (max-width:780px)']: {
            fontSize: '12px',
        },
    },
    cardRight: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
    },
    mobilePosted: {
        ['@media (max-width:780px)']: {
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
        },
    },

    cardLeft: { flex: '1' },
    cardconatiner: {
        marginBottom: '100px',
        ['@media (max-width:780px)']: {
            marginBottom: '50px',
        },
    },
    Pageconatiner: {
        marginBottom: '200px',
        ['@media (max-width:780px)']: {
            marginBottom: '50px',
        },
    },
    pageination: {
        color: 'red',
    },
    nav: {
        textDecorationLine: 'none',
        '&:hover': {
            textDecorationLine: 'underline',
        },
    },
    select: {
        borderColor: '#E4EBF2',
        color: '#0C67EB',
    },
    filterDiv: {
        marginTop: '16px',
        display: 'flex',
        gap: '16px',
    },
    filterDivNews: {
        marginTop: '30px',
        display: 'flex',
        gap: '16px',
    },
    Err: {
        marginTop: '150px',
        fontSize: '28px',
        fontWeight: '500',
        lineHeight: '140%',
        // letterSpacing:'0.005em',
        // marginTop:'70px',
        marginBottom: '8px',
        textAlign: 'center',
        color: '#000000;',
        ['@media (max-width:780px)']: {
            fontSize: '14px',
            marginTop: '75px',
        },
    },
    newsCard: {
        display: 'flex',
        marginTop: '32px',
        borderWidth: '1px',

        borderStyle: 'dashed',
        borderColor: '#627181',
        boxSizing: 'border-box',
        ['@media (max-width:780px)']: {
            marginTop: '27px',
            background: '#FAFBFC',
            borderRadius: '2px',
            marginLeft: '15px',
            marginRight: '15px',
            padding: '10px 14px 17px 15px',
        },
    },

    blogCard: {
        display: 'flex',
        marginTop: '32px',
        borderWidth: '1px',

        borderStyle: 'dashed',
        borderColor: '#627181',
        boxSizing: 'border-box',
        ['@media (max-width:780px)']: {
            flexDirection: 'column',
            marginTop: '27px',
            background: '#FAFBFC',
            borderRadius: '2px',
            marginLeft: '15px',
            marginRight: '15px',
            padding: '10px 14px 17px 15px',
        },
    },

    newsleft: {
        padding: '32px 50px 32px 60px',
        flex: 0.5,
        // borderTopWidth: '1px',
        // borderLeftWidth: '1px',
        // borderBottomWidth: '1px',
        // borderRightWidth: '0px',

        // borderStyle: 'dashed',
        // borderColor: '#627181',
        // boxSizing: 'border-box',
    },
    blogLeft: {
        padding: '32px 50px 32px 60px',
        flex: 0.5,
        ['@media (max-width:780px)']: {
            padding: '10px 14px 0px 0px',
        },
    },
    newsright: {
        flex: 0.5,
    },
    newscardhead: {
        display: 'flex',
    },
    newsSource: {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '140%',
        color: '#0C67EB',
        marginBottom: '16px',
        ['@media (max-width:780px)']: {
            fontSize: '12px',
            fontWeight: '500',
            lineHeight: '140%',
            color: '#0C67EB',
            marginTop: '0px',
            marginBottom: '6px',
        },
    },
    newsTitle: {
        fontSize: '28px',
        fontWeight: '500',
        lineHeight: '48px',
        textAlign: 'left',
        // letterSpacing:'0.005em',
        marginTop: '16px',
        marginBottom: '16px',
        color: '#1A2530;',
        ['@media (max-width:780px)']: {
            fontSize: '14px',
            marginBottom: '11px',
        },
    },
    blogTitle: {
        fontSize: '28px',
        fontWeight: '500',
        lineHeight: '48px',
        textAlign: 'left',
        // letterSpacing:'0.005em',
        marginTop: '16px',
        marginBottom: '16px',
        color: '#1A2530;',
        ['@media (max-width:780px)']: {
            fontSize: '14px',
            marginBottom: '0px',
            marginTop: '0px',
            lineHeight: '28px',
        },
    },
    newsDesc: {
        fontSize: '16px',
        fontWeight: '300',
        lineHeight: '32px%',
        letterSpacing: '0.005em',
        textAlign: 'left',
        // marginTop:'70px',
        marginBottom: '24px',
        color: '#374554',
        ['@media (max-width:780px)']: {
            fontSize: '14px',
            color: '#627181',
            marginBottom: '24px',

            //   marginTop:'16px'
        },
    },

    blogDesc: {
        fontSize: '16px',
        fontWeight: '300',
        lineHeight: '32px%',
        letterSpacing: '0.005em',
        textAlign: 'left',
        // marginTop:'70px',
        marginBottom: '24px',
        color: '#374554',
        ['@media (max-width:780px)']: {
            fontSize: '14px',
            color: '#627181',
            marginBottom: '24px',
            lineHeight: '25px',
        },
    },
    newsDate: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '28px',
        color: '#627181',
        ['@media (max-width:780px)']: {
            fontSize: '11px',
            // marginLeft: '125px',
        },
    },

    newsCardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ['@media (max-width:780px)']: {
            width: '90px',
            height: '84.32px',
            objectFit: 'cover',
            marginTop: '15px',
        },
    },

    newsCardImageBlog: {
        width: '80%',
        objectFit: 'cover',
        marginTop: '20px',
        marginLeft: '40px',
        marginRight: 'auto',
        ['@media (max-width:780px)']: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            marginTop: '0px',
        },
    },

    newsCardImageInd: {
        width: '600px',
        objectFit: 'cover',
        ['@media (max-width:780px)']: {
            width: '300px',
            objectFit: 'cover',
        },
    },

    show: {
        display: 'block',
    },
    hide: {
        display: 'none',
    },
    image: {
        width: '550px',
        height: '430px',
    },
    logosDiv: {
        display: 'flex',
        gap: '10px',
        alignItems: 'end',
    },
    logos: {
        width: '130px',
    },
    logoMargin: {
        marginTop: '25px',
        marginBottom: '16px',
    },

    partition: {
        width: '0px',
        height: 'inherit',
        marginTop: '25px',
        marginBottom: '25px',
        marginRight: '20px',
        borderRight: '1px dashed #627181',
        ['@media (max-width:780px)']: {
            display: 'none'
        },
    },
    blogImage:{
        display: 'block',
        width: '750px',
        marginLeft: 'auto',
        marginRight: 'auto',
        '&:hover': {
            cursor: 'pointer',
          },
        ['@media (max-width:780px)']: {
            width: '300px'
        },
    },
    blogImageModal: {
        display: 'block',
        width: '100%',
        height:'100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        '&:hover': {
            cursor: 'pointer',
          },
        ['@media (max-width:780px)']: {
            width: '300px'
        },
    },
    blogImageBig:{
        width: '1000px',
        ['@media (max-width:780px)']: {
            width: '100%',
            height: '100%',
        },
    },
    blogImageContainer:{
        marginBottom: '35px'
    },
    blogImageCaption:{
        width: '70%',
        margin: 'auto',
        textAlign: 'center'
    },
    modal:{
        width: '900px',
        ['@media (max-width:780px)']: {
            width: '90%',
            height: '100%',
            margin: '20px',
        },
    },
    viewer:{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    iconDiv: {
        display: 'flex',
        justifyContent: 'end',
      },
      cursor: {
        '&:hover': {
          cursor: 'pointer',
        },
      },
      iconDivIndex:{
        zIndex: 1,
      }
}))

export default BlogListingStyles
