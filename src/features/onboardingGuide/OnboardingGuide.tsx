import { StackNavigationProp } from "@react-navigation/stack"
import React, { useEffect, useState } from "react"
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Button
} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Space from "../../common/components/abstract/Space"
import { RootStackParamsList } from "../navigation/Navigator"
import { useAuth } from "../../providers/AuthProvider";
import { useIsFocused } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

interface Props {
    navigation: StackNavigationProp<RootStackParamsList, "Home">
}

const Gender = () => {
    let [selectedGender, setGender] = useState("");
    return (
        <View>
            <View style={styles.genderStatus}>
                <Text>Sex:</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.genderOption} onPress={() => setGender("Male")} >
                        {selectedGender == "Male" ? <View style={styles.selectedCircle} />
                            : <View style={styles.circle} />}
                        <Text style={styles.genderOptionText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.genderOption} onPress={() => setGender("Female")} >
                        {selectedGender == "Female" ? <View style={styles.selectedCircle} />
                            : <View style={styles.circle} />}
                        <Text style={styles.genderOptionText}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.genderOption} onPress={() => setGender("Other")} >
                        {selectedGender == "Other" ? <View style={styles.selectedCircle} />
                            : <View style={styles.circle} />}
                        <Text style={styles.genderOptionText}>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const OnboardingGuide = ({ navigation }: Props) => {
    let { signOut, user } = useAuth();
    // determines if this screen is currently being watched
    let focused = useIsFocused();
    let [birthDate, setBirthDate] = useState(new Date(2000, 0, 1));

    useEffect(() => {
    }, [focused])

    // navigates user to profile
    function goOnboardingPersonalInfo() {
        navigation.navigate("OnboardingPersonalInfo")
    };

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setBirthDate(currentDate);
    };

    return (
        <View style={styles.onboardingContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.innerContent}>
                    <Text style={styles.title}>How it works:</Text>
                    <Space.V s={10} />
                    <Text style={styles.bodyText}>When interested, click each video to visit its website.</Text>
                    <Space.V s={3} />
                    <Text style={styles.subtitle}>Our Promise:</Text>
                    <Space.V s={7} />
                    <Text style={styles.bodyText}>Your personal information is not shared with anyone. EVER.</Text>
                </View>
                {/* <Space.V s={7} />
                <Gender />
                <Space.V s={7} />
                <Text>Birthdate:</Text>
                <DateTimePicker
                    value={birthDate}
                    mode="date"
                    display="spinner"
                    maximumDate={new Date(2008, 0, 1)}
                    minimumDate={new Date(1920, 0, 1)}
                    onChange={onChange}
                    style={styles.date}
                /> */}
            </View>
            <View style={styles.nextButtonContainer}>
                <TouchableOpacity onPress={() => goOnboardingPersonalInfo()} style={styles.nextButton}><Text style={styles.buttonText}>Next</Text></TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        width,
        height,
    },
    onboardingContainer: {
        width,
        height,
    },
    innerContainer: {
        marginHorizontal: 12,
        marginTop: height * .3,
        flex: 1,
        paddingHorizontal: 20,
    },
    innerContent: {
        alignItems: "center",
    },
    nextButton: {
        height: 40,
        width: 100,
        borderRadius: 20,
        backgroundColor: "#3d4849",
        justifyContent: "center",
        alignItems: "center",
    },
    nextButtonContainer: {
        width,
        alignItems: "flex-end",
        marginBottom: 30,
        paddingRight: 30,
    },
    title: {
        color: "#FF5A5F",
        fontSize: 30,
        fontWeight: "600",
    },
    subtitle: {
        color: "#FF5A5F",
        fontSize: 24,
        fontWeight: "600",
    },
    bodyText: {
        fontSize: 16,
        fontWeight: "500",
        alignSelf: "flex-start"
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#FF5A5F",
    },
    circle: {
        height: 22,
        width: 22,
        borderRadius: 11,
        borderWidth: 2,
    },
    selectedCircle: {
        height: 22,
        width: 22,
        borderRadius: 11,
        borderWidth: 2,
        backgroundColor: "orange",
    },
    genderStatus: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    genderOption: {
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: 8,
    },
    genderOptionText: {
        fontWeight: "500",
        fontSize: 18,
        marginLeft: 5,
    },
    date: {
    }
})

export default OnboardingGuide
