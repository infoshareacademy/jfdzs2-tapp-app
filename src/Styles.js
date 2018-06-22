export const appColors = {
    lightBlue: '#02B4FF',
    grey: '#BCBEC0',
    dark: '#333333'

};

export const appFont = "'Roboto', sans-serif";

export default {
    appFont: {
        fontFamily: appFont,
        color: appColors.dark
    },

   logo: {
        width:'7vw',
        height:'7vh',
        marginTop: '0.5em',
        marginLeft: '1em'
   },
    appBar: {
        backgroundColor: appColors.lightBlue
    },
    appBarTitle: {
        fontFamily: appFont,
        fontSize: '1.75em'
    },
    sideBar: {
        backgroundColor: appColors.grey,
        fontFamily: appFont
    },
    sideBarItem: {
        textDecoration: 'none',
        fontSize: '1.2em',
        color: appColors.lightBlue,
    },
    link: {
        textDecoration: 'none',
    }
}