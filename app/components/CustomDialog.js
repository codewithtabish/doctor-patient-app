import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';

const CustomDialog = ({isDialogVisible, setDialogVisible,iconName,
errorTtitle,errorSubtitle}) => {

  const showDialog = () => {
    setDialogVisible(true);
  };

  const hideDialog = () => {
    setDialogVisible(false);
  };

  return (
    <View style={styles.container}>
    

      <Modal visible={isDialogVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.dialog}>
            <View style={styles.header}>
              <AntDesign name={iconName} size={22} color="red" />
              {/* <Text style={styles.title}>Error</Text> */}
            </View>
            {/* <Text style={styles.dialogText}>{errorTtitle}</Text> */}
            <Text style={styles.smallText}>{errorSubtitle}</Text>
            <Button onPress={hideDialog} color="blue">
              Close
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"red",
    position:"absolute",
    top:"50%",
    // left:"50%",
    // right:"50%"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialog: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width:responsiveScreenWidth(65)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  dialogText: {
    fontSize: 18,
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
});

export default CustomDialog;
