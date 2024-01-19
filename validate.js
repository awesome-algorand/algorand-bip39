const { wordlist }  = require('@scure/bip39/wordlists/english');
const mnemonic = "salon zoo engage submit smile frost later decide wing sight chaos renew lizard rely canal coral scene hobby scare step bus leaf tobacco slice"

/**
 * Swift Entropy
 * @example
 * import Bip39
 *
 * let phrase = "salon zoo engage submit smile frost later decide wing sight chaos renew lizard rely canal coral scene hobby scare step bus leaf tobacco slice"
 * let mnemonic = try! Mnemonic(mnemonic: phrase.components(separatedBy: " "))
 * print("Entropy: ", mnemonic.entropy)
 */
let swiftEntropy = [190, 159, 253, 41, 108, 12, 202, 186, 223, 81, 198, 251, 185, 4, 153, 91, 24, 45, 106, 200, 65, 129, 192, 141, 139, 1, 106, 177, 238, 253, 120, 206]

/**
 * JVM Entropy
 *
 * @example
 * import cash.z.ecc.android.bip39.Mnemonics.MnemonicCode
 * val knownMnemonic = "salon zoo engage submit smile frost later decide wing sight chaos renew lizard rely canal coral scene hobby scare step bus leaf tobacco slice"
 * val mnemonicCode: MnemonicCode = MnemonicCode(knownMnemonic.toCharArray())
 * val entro = mnemonicCode.toEntropy()
 */
let jvmEntropy = [-66, -97, -3, 41, 108, 12, -54, -70, -33, 81, -58, -5, -71, 4, -103, 91, 24, 45, 106, -56, 65, -127, -64, -115, -117, 1, 106, -79, -18, -3, 120, -50]

// JS Library 1
const bip39 = require('bip39')
const jsLib1Entropy = bip39.mnemonicToEntropy(mnemonic, wordlist)

// JS Library 2
const _bip39 = require('@scure/bip39');
const jsLib2Entropy = _bip39.mnemonicToEntropy(mnemonic, wordlist)

// Check entropy
const mnemonicFromJS1 = _bip39.entropyToMnemonic(fromHexString(jsLib1Entropy), wordlist)
const mnemonicFromJS2 = bip39.entropyToMnemonic(toHexString(jsLib2Entropy), wordlist)
const mnemonicFromJVM = _bip39.entropyToMnemonic(new Uint8Array(jvmEntropy), wordlist)
const mnemonicFromSwift = _bip39.entropyToMnemonic(new Uint8Array(swiftEntropy), wordlist)

console.log({
    "bip39": mnemonicFromJS1 === mnemonic,
    "@sec/bip39": mnemonicFromJS2 === mnemonic,
    "cash.z.ecc.android.bip39": mnemonicFromJVM === mnemonic,
    "Bip39.swift": mnemonicFromSwift === mnemonic
})

// UTILS

function fromHexString(hexString) {
    return Uint8Array.from(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
}

function toHexString(bytes) {
    return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
}
