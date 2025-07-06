import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';

type Props = {
    track: number;
}
const ContactListItem = ({ track }: Props) => {
    return (
        <View style={styles.chatListContainer}>
            <View style={styles.grayCircle} />
            <View style={styles.detailContainer}>
                <Text style={styles.name}>Contact Name {track}</Text>
                {
                    track === 1 || track === 2 ? <Text style={[styles.text, { color: Colors.primary }]}>Online</Text> :
                        <Text style={styles.text}>Last seen 2 minutes ago</Text>
                }
            </View>
        </View>
    )
}

export default ContactListItem

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
    }
})