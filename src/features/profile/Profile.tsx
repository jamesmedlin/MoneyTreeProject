import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Space from "../../common/components/abstract/Space"
import Tile from "../../common/components/Tile"
import StatusBox from "../../common/components/StatusBox"
import { RootStackParamsList } from "../navigation/Navigator"
import ProgressCircle from 'react-native-progress-circle'

enum progress { hasNotStarted, inProgress, complete }

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

interface Props {
    navigation: StackNavigationProp<RootStackParamsList, "Profile">
}

const Profile = ({ navigation }: Props) => {
    const goGetStarted = () => navigation.navigate("Categories")

    return (
        <View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
            >
                <View style={styles.innerContainer}>
                    <Space.V s={20} />
                    <View style={styles.profilePicture}></View>
                    <Space.V s={10} />
                    <Space.V s={10} />
                    <Text style={styles.title}>My Trees</Text>
                    <Space.V s={10} />
                    <View style={styles.todoitemcontainer}>
                        <StatusBox text="Emergency Acc." goTo="EmergencyAccount" status={progress.hasNotStarted} />
                        <StatusBox text="Credit Score">
                            <View style={styles.creditScore}>
                                <ProgressCircle
                                    percent={100 * 440 / 550}
                                    radius={50}
                                    borderWidth={15}
                                    color="#90EE90"
                                    shadowColor="white"
                                    bgColor="white"><Text style={styles.text}>740</Text></ProgressCircle>
                            </View>
                        </StatusBox>
                        <StatusBox text="Insurance" status={progress.hasNotStarted} />
                        <StatusBox text="Retirement" goTo="kPlans" status={progress.hasNotStarted} />
                        <StatusBox text="Savings Acc." status={progress.hasNotStarted} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        width,
    },
    innerContainer: {
        marginHorizontal: 12,
        alignItems: "center",
    },
    header: {
        alignSelf: "flex-start",
        fontSize: 20,
    },
    profilePicture: {
        alignSelf: 'flex-end',
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#c4c4c4',
        marginRight: 30,
    },
    tile: {
        width,
        paddingHorizontal: 30
    },
    title: {
        alignSelf: "flex-start",
        fontSize: 20,
        marginLeft: 20,
        fontWeight: "700",
    },
    todoitemcontainer: {
        width,
        paddingHorizontal: 30,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingBottom: 20,
    },
    creditScore: {
        alignSelf: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: '900',
        color: 'grey',
    },
})

export default Profile
