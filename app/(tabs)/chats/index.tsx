import { View, Image, StyleSheet, TextInput, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '@/constants/Colors'
// import Search from '@/assets/images/search.png'
// import Mic from '@/assets/images/mic.png'
import { useHeaderHeight } from '@react-navigation/elements';
import ChatList from '@/components/chat-lists/chat-list';
import { getChats } from '../../lib/api';
import Modal from 'react-native-modal';
import { useModalContext } from './ModalContext';
import { createChat } from '../../lib/api'
// import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { collection, onSnapshot } from 'firebase/firestore'
import { database } from '../../lib/firebase'

const Page = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [chats, setChats] = useState<any>();
  const [contact, setContact] = useState();
  const [user, setUser] = useState();
  const [input, setInput] = useState();

  const { msgVisible, setMsgVisible } = useModalContext();

  const fetchData = async () => {
    try {
      const templateWallet = '0x4B5F3B38C48d15f6e5aB64768afD61E78B5A32A7';
      const response = await getChats(templateWallet);
      
      setChats(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, 'Message'), (snapshot:any) => {
      })
    fetchData()
    return () => unsubscribe();
  }, []);

  const setInput1 = (e: any) => {
    setContact(e.target.value)
  };

  const setInput2 = (e: any) => {
    setUser(e.target.value)
  };

  const setInput3 = (e: any) => {
    setInput(e.target.value)
  };

  const handleConfirm = async () => {

    const wallet = '0x4B5F3B38C48d15f6e5aB64768afD61E78B5A32A7'
    const response = await createChat(wallet)

    if (response && response.status == 200) {

      setMsgVisible(false);

    } else {

      throw new Error('Failed to create chat!')
    }

  };

  const handleCancel = () => {
    setMsgVisible(false);
  };

  const headerHeight = useHeaderHeight();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background, paddingTop: headerHeight }}>
      <View style={styles.searchContainer}>
        {/* <Image source={Search} style={styles.search} /> */}
        <TextInput placeholderTextColor={Colors.gray} placeholder="Search" style={styles.searchInput} />
        {/* <Image source={Mic} style={styles.search} /> */}
      </View>
      <ChatList data={data} />
      <Modal isVisible={msgVisible} animationOut="bounceInUp">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Contact"
              value={contact}
              onChangeText={setInput1}
            />
            <TextInput
              style={styles.input}
              placeholder="User"
              value={user}
              onChangeText={setInput2}
            />
            <TextInput
              style={styles.input}
              placeholder="message"
              value={input}
              onChangeText={setInput3}
            />
            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={handleCancel} />
              <Button title="Confirm" onPress={handleConfirm} />
            </View>
            <View style={styles.modalContainer}>
              <View>
                {/* <SectionedMultiSelect
                  items={items}
                  IconRenderer={Icon}
                  uniqueKey="id"
                  subKey="items"
                  selectedItems={selectedItems}
                  selectText="Choose some vehicles..."
                  searchPlaceholderText="Search vehicles..."
                  onSelectedItemsChange={setSelectedItems}
                  onSelectedItemObjectsChange={setSelectedItemObjects}
                  renderSelectText={renderSelectText}
                  showChips={false}
                  readOnlyHeadings={true}
                /> */}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF15',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 100,
    gap: 6,
    marginTop: 12,
  },
  search: {
    width: 24,
    height: 24,
  },
  searchInput: {
    backgroundColor: 'transparent',
    fontSize: 19,
    color: Colors.white,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});