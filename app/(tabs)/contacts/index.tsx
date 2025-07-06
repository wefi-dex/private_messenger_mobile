import ContactList from '@/components/contact-lists/contact-list'
import Colors from '@/constants/Colors'
import { useHeaderHeight } from '@react-navigation/elements'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
// import {firebase} from '../../lib/firebase'

const Page = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [contracts, setContracts] = useState()

  // const fetchData = async () => {
  //   try {
  //     const userCredential = await firebase.auth().getContractList();
  //     setContracts(userCredential);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect( () => {
  //   fetchData()
  // }, [])


  const headerHeight = useHeaderHeight();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background, paddingTop: headerHeight }}>
      <ContactList data={data} />
    </View>
  )
}

export default Page
