import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Create custom component InputBox for TextInputs with Labels
const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};

const MyApp = () => {
    // Declare variables --> USING useState to keep track of the variable we inputted.
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    return (
        <View>
            <Text></Text>

            {/*Ex1G: Create a TextInput labeled as "User-Name".*/}
            {/*<Text>User Name:</Text>*/}
            {/*<TextInput style={{borderWidth: 1}} onChangeText={(text) => setName(text)}/>*/}

            <InputBox label={"User Name:"} onChangeText={(text) => setName(text)} />

            {/* Ex1B: Add a Picker that is labeled "User Type:" with 2 options Admin and Guest. DROPDOWN BAR */}
            <Text>User type:</Text>
            <Picker onValueChange={(value) => setType(value)} style={{backgroundColor: 'grey'}}>
                <Picker.Item label={'Admin'} value="Admin"/>
                <Picker.Item label={'Guest'} value="Guest"/>
            </Picker>

            {/* Ex1A:  Display the text "Password:" with a simple TextInput underneath */}
            {/*<Text>Password:</Text>*/}
            {/*<TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw(text)}*/}
            {/*    /!*TO BLOCK THE PASSWORD '***' so nobody can see*!/*/}
            {/*    secureTextEntry={true}*/}
            {/*/>*/}

             <InputBox label={"Password"} onChangeText={(text) => setPw(text)} />





            {/* Ex1C: Add a Button with the title "LOG IN".   */}
            {/* Ex1D: When the LOGIN button pressed, display Alert message "Welcome!". */}
            <Button title={"LOG IN"} onPress={() => Alert.alert("Welcome")}/>

            <Text></Text>

            {/* Ex1E: Add TouchableOpacity labeled as "Alternative LOG IN" with Alert message "Hi hi!" */}
            {/* Ex1F: change Alert message to Toast message */}
            {/*Toast will appear at the bottom of the screen as alert.
            RMB NEED TO SPECIFY THE MESSAGE --> 'WELCOME' & DURATION --> SHORT, LONG ETC*/}
            <TouchableOpacity onPress={()=> {
                const correctPassword = '123';
                let mymessage = 'Error! Wrong Password!';
                if (pw == correctPassword) {
                    mymessage = 'Welcome ' + type + ' ' + name;
                }
                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }
            }>
                <Text>LOGIN!!</Text>
            </TouchableOpacity>


            <Text>Entered Password: {pw}</Text>
        </View>
    );
};

export default MyApp;
