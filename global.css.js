import { StyleSheet } from 'react-native';

{/*
    Check onHover and fonts application
*/}

export default styles = StyleSheet.create({

    body: {
      flex: 1,
      backgroundColor: '#fff',
      width: '100vw',
      height: 'auto',
      margin: "unset",
      justifyContent: 'center',
      background: "#77889912"
    },
    card: {
      width: "85vw",
      borderTopLeftRadius: "unset",
      borderTopRightRadius: "unset",
      borderBottomRightRadius: "30px",
      borderBottomLeftRadius: "30px",
      padding: "1rem",
      border: ".1rem #7c8c9c87 solid",
      background: "#2196f303",
      boxShadow: "0.1rem 0.25rem 0.1rem 0px #70809042",
      marginTop: "1rem"
    },
    headerBig: {
      fontFamily: "Corben, cursive",
      fontSize: "1.5rem !important",
      fontWeight: "400",
      textAlign: "center",
      color: "#7c8c9c"
    },
    headerMedium: {
      fontFamily: "Corben, cursive",
      fontSize: "1.25rem !important",
      fontWeight: "500",
      textAlign: "left",
      color: "#4d769f"
    },
    headerSmall: {
        fontFamily: "Corben, cursive",
        fontSize: "1rem !important",
        fontWeight: "600",
        textAlign: "left",
        color: "#7c8c9c"
    },
    text: {
        fontFamily: "Corben, cursive",
        fontSize: "1rem !important",
        fontWeight: "400",
        textAlign: "left",
        color: "#7c8c9c"
    },
    link: {
        fontFamily: "Corben, cursive",
        fontSize: "1rem !important",
        fontWeight: "400",
        textAlign: "left",
        color: "#7c8c9c",
        textDecoration: "none"
    },  
    inputs: {       
        borderTopLeftRadius: "unset",
        borderTopRightRadius: "unset",
        borderBottomRightRadius: "20px !important",
        borderBottomLeftRadius: "20px !important",
        borderColor: "unset",
        borderWidth: "0 !important",
        width: "100% !important",
        lineHeight: "3rem !important",
        padding: ".5rem 1rem !important",
        boxShadow: "0rem 0.5rem 0.5rem 0px #dddddd",
        background: "white",
        fontFamily: "Corben, cursive",
        fontSize: "1.25rem !important",
        fontWeight: "700",
        textAlign: "center",
        color: "white"
    },
    primaryColor:{
        color: "#2196f3db"
    },
    secondaryColor:{
        color: "#5cc6b5e6"
    },
    flashyTextColor:{
        color: "#4eb0a1e6"
    },
    textColor:{
        color: "#7c8c9c"
    },
    invisibleView:{
        display: "none"
    },
    visibleView:{
        display: "block"
    },
    spyView: {
        maxWidth: "95vw",
        height: "6vh !important",
        padding: "1rem !important",
        overflow: "hidden !important",
        background: "white",
        borderBottomLeftRadius: "30px !important",
        borderBottomRightRadius: "30px !important",
        border: "unset",
        position: "fixed !important",
        top: "0 !important",
        marginTop: "unset !important",
        zIndex: "999"
    },
    spyHeader: {
        fontFamily: "Corben, cursive",
        fontSize: "1.25rem !important",
        fontWeight: "700",
        textAlign: "center",
        color: "#4eb0a1e6",
        lineHeight: "1rem"
    },
    headerText:{
        color: "slategray"
    },
    bodyText:{
        color: "#7c8c9c"
    },
    center: {

        flex: 1,
        width: "92vw",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
    },
    column:{
        flex: 1,
        width: "92vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "1rem"
    },
    row: {
        flex: 1,
        width: "92vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "auto",
        marginBottom: "1rem",
    },
    pill: {
    
        width: "auto",
        height: "auto",
        borderRadius: "50px",
        borderWidth: ".2rem",
        borderColor: "rgb(0 118 198 / 50%)",
        borderStyle: "solid",
        padding: ".5rem .75rem",
        backgroundColor: "transparent",
        marginTop: ".5rem",
        transition: "all .25s ease-in",
        color: "#7c8c9c",
        fontFamily: "Corben, cursive",
        fontSize: "1.25rem !important",
        fontWeight: "400",
        textAlign: "center"
    },
    searchBar: {
        width: "95% !important",
        height: "10vh !important",
        padding: ".5rem !important",
        overflow: "hidden !important",
        background: "linear-gradient(180deg, #5cc6b5e6, #6be9d4d4) !important",
        borderTopLeftRadius: "50px !important",
        borderTopRightRadius: "50px !important",
        border: "1px solid #ececec !important",
        position: "fixed !important",
        bottom: "0 !important",
        left: "0 !important",
        zIndex: "999"
    },
    searchBarInput:{
    
        width: "90% !important",
        height: "10vh !important",
        background: "transparent",
        border: "unset",
        boxShadow: "unset",
        margin: "auto",
        color: "slategray !important"
    },
    error: {
        boxShadow:  "0rem 0.5rem 0.5rem 0px #ffcfcf !important"
    }
  });
  