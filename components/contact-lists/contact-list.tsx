import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ContactListItem from './contact-list-item';
import Colors from '@/constants/Colors';

type Props = {
  data: number[];
}
const ItemDivider = () => (
  <View style={{ height: 1, backgroundColor: Colors.tertiaryGray }} />
)
const ContactList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      ListEmptyComponent={
        <View>
          <Text style={{ color: Colors.white }}>No Contacts found</Text>
        </View>
      }
      renderItem={({ item: track }) => (
        <ContactListItem track={track} />
      )}
    />
  )
}

export default ContactList