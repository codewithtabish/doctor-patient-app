import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput as RNTextInput, Button } from 'react-native';
import { useSelector } from 'react-redux';

const CustomDialog = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [showRequiredMessage, setShowRequiredMessage] = useState(false);
  const {loginToken}=useSelector((state)=>state.user)

  const showDialog = () => {
    setDialogVisible(true);
  };

  const hideDialog = () => {
    setDialogVisible(false);
    // Reset the required message when hiding the dialog
    setShowRequiredMessage(false);
  };

  const handleSubmit = () => {
    // Check if fullName is not null
    if (fullName) {
      // Perform your submit logic here
      // For now, just showing a message
      alert('Form submitted successfully!');
    } else {
      // Show the required message
      setShowRequiredMessage(true);
    }
  };

  return (
    <View>
      {/* Required TextInput */}
      <RNTextInput
        placeholder='FullName'
        outlineStyle={{
          elevation: 1,
          borderRadius: 10,
          borderColor: showRequiredMessage ? 'red' : 'gray', // Change the border color for required
        }}
        style={{
          ...styles.input,
          borderColor: showRequiredMessage ? 'red' : 'gray', // Change the border color for required
          backgroundColor: 'white',
          margin: 20,
          padding: 20,
        }}
        label="FullName"
        mode="outlined"
        theme={{
          colors: {
            primary: showRequiredMessage ? 'red' : 'gray', // Change the primary color for required
            underlineColor: 'white',
          },
        }}
        value={fullName}
        onChangeText={(p) => setFullName(p)}
      />
      {showRequiredMessage && <Text style={{ color: 'red', marginLeft: 20 }}>Full Name is required</Text>}
      <Button onPress={handleSubmit} title="Submit" />
      <Text>{loginToken}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});

export default CustomDialog;
