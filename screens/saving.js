import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

// import Component from '../components/AppText';
import retrieveDatabse from '../components/DatabaseManager';
import colors from '../config/colors';

class SavingOne extends React.Component {
    // initialize state
    constructor(props) {
        super(props);
        this.state = {
            adata: 'have not set up',
        }
    }

    // settimer remind the data has been fetched
    getData() {
        setTimeout(() => {
            console.log('Our data is fetched');
            this.setState({
                adata: "app"
            })
        }, 2000)
    }
    // capture the data before it loads
    componentDidMount() {
        this.getData();
        //Here is the Trick
        const { navigation } = this.props;
        //Adding an event listner om focus
        //So whenever the screen will have focus it will set the state to zero
        this.focusListener = navigation.addListener('didFocus', () => {
            this.setState({ count: 0 });
        });
    }

    componentWillUnmount() {
        // Remove the event listener before removing the screen from the stack
        this.focusListener.remove();
    }

    render() {
        // retrieve data from firebase by its path(link)
        var balance = retrieveDatabse("/Account/account1/Balance");
        var available = retrieveDatabse("/Account/account1/Available");
        var price = retrieveDatabse("/Account/account1/price");
        var name = retrieveDatabse("/Account/account1/name");
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.usage}
                    // image source: https://uigradients.com/#Royal
                    source={require('../assets/Welcome/Royal.jpg')}>
                    {/* image source: https://www.flaticon.com/free-icon/transaction_1041872?term=transaction&page=1&position=11 */}
                    <Image style={styles.shopLogo} source={require('../assets/transaction.png')} />

                    <View style={styles.textContainer}>
                        <Text style={styles.sectionText}>Your last spending is</Text>
                        <Text style={styles.sectionText}>${price} On</Text>
                        <Text style={styles.highlightText}>{name}</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        {/* redirect to the saving pie page */}
                        <Button title='See detail' onPress={() => this.props.navigation.navigate("SavingPie")} />
                    </View>
                </ImageBackground>
                <ImageBackground style={styles.savingGoal}
                    // image source: https://uigradients.com/#Joomla
                    source={require('../assets/Welcome/Joomla.jpg')}>
                    {/* image source: https://www.flaticon.com/free-icon/piggy-bank_3050243?term=saving&page=1&position=32 */}
                    <Image style={styles.shopLogo} source={require('../assets/Welcome/money.png')} />
                    <Text style={styles.goalHeader}>Saving for your future</Text>
                    <View style={styles.buttonContainer2}>
                        {/* redirect to the saving goal page */}
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("SavingGoal")}>
                            <Text style={styles.text}>Set up Goal!</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.creditCard}>
                    {/* redirect to the transaction page */}
                    <TouchableOpacity style={styles.creditCardSection} onPress={() => this.props.navigation.navigate("SavingDetail")}>
                        <ImageBackground style={styles.imageBackground} imageStyle={{ borderRadius: 12 }}
                            // image source: https://uigradients.com/#Royal
                            source={require('../assets/Welcome/Royal.jpg')}>
                            <View style={styles.bankLogoSection}>
                                {/* image source: https://favpng.com/png_view/commonwealth-bank-logo-logo-commonwealth-bank-brand-organization-png/3t2F5asF */}
                                <Image style={styles.bankLogo} source={require('../assets/Welcome/commonwealth.png')} />
                            </View>
                            <View style={styles.bankDetail}>
                                <View style={styles.bankDetailText}>
                                    <Text style={styles.creditText}>
                                        Available Funds:
                                    </Text>
                                    <Text style={styles.creditValue}>
                                        ${available}
                                    </Text>
                                </View>
                                <View style={styles.bankDetailText}>
                                    <Text style={styles.creditText}>
                                        Current Balance:
                                    </Text>
                                    <Text style={styles.creditValue}>
                                        ${balance}
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.creditCardSection}>
                        <ImageBackground style={styles.imageBackground}
                            imageStyle={{ borderRadius: 12 }}
                            // image source: https://uigradients.com/#Royal
                            source={require('../assets/Welcome/Royal.jpg')}>
                            <View style={styles.bankLogoSection}>
                                {/* image source: https://favpng.com/png_view/bills-alipay-digital-wallet-payment-png/j5nxDeVh */}
                                <Image style={styles.bankLogo} source={require('../assets/Welcome/alipay.png')} />
                            </View>
                            <View style={styles.bankDetail}>
                                <View style={styles.bankDetailText}>
                                    <Text style={styles.creditText}>
                                        Available Funds:
                                    </Text>
                                    <Text style={styles.creditValue}>
                                        $64,000
                                    </Text>
                                </View>
                                <View style={styles.bankDetailText}>
                                    <Text style={styles.creditText}>
                                        Current Balance:
                                    </Text>
                                    <Text style={styles.creditValue}>
                                        $73,653
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.creditCardSection}>
                        <ImageBackground style={styles.imageBackground}
                            imageStyle={{ borderRadius: 12 }}
                            // image source: https://uigradients.com/#Royal
                            source={require('../assets/Welcome/Royal.jpg')}>
                            <View style={styles.bankLogoSection}>
                                {/* image source: https://favpng.com/png_view/bank-citibank-credit-card-logo-private-banking-png/CdM5GDti */}
                                <Image style={styles.bankLogo} source={require('../assets/Welcome/citibank.png')} />
                            </View>
                            <View style={styles.bankDetail}>
                                <View style={styles.bankDetailText}>
                                    <Text style={styles.creditText}>
                                        Available Funds:
                                    </Text>
                                    <Text style={styles.creditValue}>
                                        $64,000
                                    </Text>
                                </View>
                                <View style={styles.bankDetailText}>
                                    <Text style={styles.creditText}>
                                        Current Balance:
                                    </Text>
                                    <Text style={styles.creditValue}>
                                        $73,653
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    usage: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    savingGoal: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    creditCard: {
        flex: 3,
        flexDirection: 'column',
    },
    creditCardSection: {
        flex: 1,
        borderRadius: 12,
        margin: 8,
        marginHorizontal: 30,
        flexDirection: 'row',
    },
    imageBackground: {
        flex: 1,
        flexDirection: 'row',
    },
    bankLogoSection: {
        flex: 1,
        justifyContent: 'center',
    },
    bankLogo: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
    bankDetail: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    bankDetailText: {
        flexDirection: 'row',
    },
    creditText: {
        color: colors.white,
        fontFamily: "Roboto",
        fontSize: 12,
        paddingBottom: 5,
    },
    creditValue: {
        color: "#D3D3D3",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: '900',
        marginLeft: 5,
    },
    navigation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    shopLogo: {
        position: 'absolute',
        top: 20,
        width: 70,
        height: 70,
    },
    textContainer: {
        position: 'absolute',
        alignItems: 'center',
        marginBottom: 100,
        top: 100
    },
    sectionText: {
        color: colors.light,
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: '600',
        textTransform: "capitalize",
        paddingBottom: 5,
    },
    goalHeader: {
        color: colors.white,
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: "capitalize",
        paddingTop: 15,
    },
    highlightText: {
        color: colors.light,
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: "capitalize",
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 5,
    },
    buttonContainer2: {
        position: 'absolute',
        bottom: 50,
    },
    goalContainer: {
        flexDirection: "row",
        flex: 1,
    },
    goalBar: {
        flex: 2,
        backgroundColor: colors.white,
        margin: 2,
        borderRadius: 25,
    },
    goalText: {
        color: colors.white,
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: '600',
        textTransform: "capitalize",
    },
    goalTextSection: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    goalSection: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'column',
        height: 90,
        width: 400,
        margin: 2,
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    },
    text: {
        color: colors.white,
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});
export default SavingOne;