import CallList from '@/components/call-lists/call-list'
import Colors from '@/constants/Colors'
import { useHeaderHeight } from '@react-navigation/elements'
import React from 'react'
import { View } from 'react-native'

const Page = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const headerHeight = useHeaderHeight();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background, paddingTop: headerHeight }}>
      <CallList data={data} />
    </View>
  )
}

export default Page
