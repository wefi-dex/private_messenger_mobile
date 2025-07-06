import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    track: number;
}
const CallListItem = ({ track }: Props) => {
    return (
        <View style={styles.chatListContainer}>
            <View style={styles.grayCircle} />
            <View style={styles.detailContainer}>
                <Text style={styles.name}>Contact Name {track}</Text>
                {
                    track === 4 || track === 8 ? <Text style={[styles.text, { color: Colors.red }]}>Missed</Text> :
                        <Text style={styles.text}>Outgoing (2 min)</Text>
                }
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.time}>10/13</Text>
                <Ionicons name="information-circle-outline" size={24} color="white" />
            </View>
        </View>
    )
}

export default CallListItem

const styles = StyleSheet.create({
    chatListContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 100,
        gap: 6,
    },
    grayCircle: {
        width: 40,
        height: 40,
        backgroundColor: Colors.gray,
        borderRadius: 100,
        marginRight: 12,
    },
    detailContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 2,
        flex: 1
    },
    dateContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.white,
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.gray,
    },
    time: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.gray,
    },
})