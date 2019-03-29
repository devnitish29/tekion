import { StyleSheet } from 'react-native';
import Apptheme from '../../../utils/AppTheme'


export default Styles = StyleSheet.create({ 
    headercontainer: {
        backgroundColor: Apptheme.WHITE,
    },
    appBarContainer: {

        padding: 10,
        height: 60,
        flexDirection: "row",
        backgroundColor: Apptheme.WHITE,
        alignItems: "center"
    },
    headerRight:{ flex:2, flexDirection: "row", alignItems: "center" , justifyContent:"flex-start"},
    headerLeft:{ flex:3, flexDirection:"row",justifyContent:"flex-end", alignItems:"center",  },
    itemMargin:{margin:5},
    notificationCircle:{backgroundColor:Apptheme.DODGER_BLUE, height:20, width:20, borderRadius:20/2,position:"absolute", right:2,top:0,justifyContent:"center",alignItems:"center"},
    notificationCountText:{color:Apptheme.WHITE ,textAlign:"center",fontSize:Apptheme.FONT_SIZE_EXTRA_SMALL,fontWeight:"bold"},
    homeScreenContainer: {
        flex: 1
    },
    imageListItemSeparator:{ height: "2%", width: "100%", backgroundColor: Apptheme.GREY_VERY_LIGHT },
    bottomComponent:{
       
        backgroundColor: Apptheme.GREY_VERY_LIGHT,
        position: "absolute",
        bottom: 0,
        zIndex: 10  

    },
    labelHeader:{ padding: 10, backgroundColor: Apptheme.GREY_VERY_LIGHT, justifyContent: "center", alignItems: "center" },
    labelHeaderText:{ color: Apptheme.BLACK, fontWeight: "bold", fontSize: Apptheme.FONT_SIZE_LARGE },
    bottomButton:{ backgroundColor: Apptheme.DODGER_BLUE, alignItems: "center" },
    bottomButtonText:{ color: Apptheme.WHITE, fontWeight: "bold", alignItems: "center", padding: "5%" },
    buttonClose:{
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 100
    },
    button:{
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        backgroundColor: Apptheme.DODGER_BLUE,
        justifyContent: "center",
        alignItems: "center" 
    },
    imageItemContainer:{alignContent:"center", justifyContent:"center", backgroundColor:Apptheme.GREY_VERY_LIGHT },
    image:{ height:300,width:null,flex:1},
    listItemContainer:{ backgroundColor: Apptheme.GREY_VERY_LIGHT, marginHorizontal: "5%",  },
    listItemSubContainer:{ flex: 1, alignItems: "center", flexDirection: "row" },
    listItemViewRight:{ justifyContent: "flex-start", alignItems: "flex-start", flex: 1 },
    listItemViewLeft:{ justifyContent: "flex-end", alignItems: "center", flex: 1,flexDirection:"row" },
    listItemTextHeader:{ color: Apptheme.BLACK, fontWeight: "bold", },
    itemCircle:{height:10,width:10,borderRadius:10/2,  margin:5},
    productContainer:{justifyContent:"center",alignContent:"center",marginBottom:"5%"}



    



})