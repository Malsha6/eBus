import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView, ImageBackground, Image, View } from 'react-native';
import * as yup from 'yup';
import { IconButton, Colors } from 'react-native-paper';

import { AppForm, AppFormInput, SubmitButton, ErrorMessage } from '../../../components/forms';
import colors from '../../../utils/colors';
import images from '../../../utils/images';
import useAuth from '../../../auth/useAuth';

const reviewSchema = yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    address: yup.string(),
    // number: yup.string().test('len', 'Must be exactly 10 digits', val => val.length === 10)
});


const UserDetailsEditScreen = ({ navigation }) => {

    const { user } = useAuth();
    const [updateState, setUpdateState] = useState({
        updateError: null,
        updateLoader: false,
    });

    const handleUpdate = (values) => {
        setUpdateState({ updateLoader: true });
        // const result = await userAPI.register(_.pick(user, ["name", "email", "password"]));
        // setRegisterState({ regLoader: false });
        // if (!result.ok) {
        //     if (result.data) setRegisterState({ regError: result.data.error });
        //     else {
        //         setRegisterState({ regError: "An unknown error occurred." });
        //         console.log(result);
        //     }
        //     return;
        // }
        // auth.logIn(result.headers['x-auth-token']);
        console.log(values);
    }

    return (
        <ScrollView style={styles.scrollView}>
            {/* <ImageBackground source={images.LOGING_BACKGROUND} style={styles.backgroundImage} > */}
                <Image style={styles.avatar} source={{ uri : user.image }} />
                <IconButton
                    icon="camera-account"
                    color={Colors.red500}
                    size={30}
                    onPress={() => {}}
                    style={{ position: 'absolute', marginTop: 60, marginLeft: 250 }}
                />
                <View style={{paddingTop:130 ,justifyContent: "center",alignItems: 'center',}}>
                    <AppForm
                        initialValues={{ name: user.name , email: user.email, address: "", number: "" }}
                        validationSchema={reviewSchema}
                        onSubmit={handleUpdate}
                    >
                        <AppFormInput
                            // autoFocus={true}
                            name="name"
                            autoCapitalize="words"
                            autoCorrect={false}
                            style={styles.input}
                            label="Name"
                            mode="outlined"
                            // value={props.values.name}
                        />

                        <AppFormInput
                            name="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            label="Email"
                            mode="outlined"
                            // value={user.email}
                        />

                        <AppFormInput
                            name="address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            label="Address"
                            mode="outlined"
                        />
                        <AppFormInput
                            name="number"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            label="Phone Number"
                            mode="outlined"
                        />

                        {updateState.updateError && <ErrorMessage error={updateState.updateError} />}

                        <SubmitButton
                            loading={updateState.updateLoader}
                            style={styles.button}
                            color={colors.primary}
                            contentStyle={styles.buttonContent}
                            title="Update"
                        />
                    </AppForm>
                </View>
            {/* </ImageBackground> */}
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        resizeMode: "stretch",
        justifyContent: "center",
        alignItems: 'center',
    },
    button: {
        marginTop: 40,
        alignSelf: 'center',
    },
    headText: {
        fontSize: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'purple'
    },
    buttonContent: {
        height: 40,
        width: 150,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    topImage: {
        width: 200, height: 100,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 60
    },

    input: {
        height: 45,
        marginTop: 10,
        width: 300
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        alignSelf: 'center',
        position: 'absolute',
        top:10,
        // right:80
    },
});

export default UserDetailsEditScreen;