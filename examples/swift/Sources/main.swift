import Bip39

// Mnemonic phrase
let phrase = "salon zoo engage submit smile frost later decide wing sight chaos renew lizard rely canal coral scene hobby scare step bus leaf tobacco slice"

// Creating mnemonic. English wordlist by default
let mnemonic = try! Mnemonic(mnemonic: phrase.components(separatedBy: " "))

// 128 bit entropy
print("Entropy: ", mnemonic.entropy)

// entropy from JS libraries
let entropyJSInt =  [190, 159, 253, 41, 108, 12, 202, 186, 223, 81, 198, 251, 185, 4, 153, 91, 24, 45, 106, 200, 65, 129, 192, 141, 139, 1, 106, 177, 238, 253, 120, 206]
var entropyJSUInt8: [UInt8] = [UInt8](repeating: 0, count: entropyJSInt.count)
for i in 0 ..< entropyJSInt.count {
    entropyJSUInt8[i] = UInt8(truncatingIfNeeded: entropyJSInt[i])
}
let mnemonicFromJSEntropy = try! Mnemonic(entropy: entropyJSUInt8)
print("JS-Mnemonic: ", mnemonicFromJSEntropy.mnemonic())

// entropy from JVM library which is not truncated
let entropyJVMInt = [-66, -97, -3, 41, 108, 12, -54, -70, -33, 81, -58, -5, -71, 4, -103, 91, 24, 45, 106, -56, 65, -127, -64, -115, -117, 1, 106, -79, -18, -3, 120, -50]
var entropyJVMUInt8: [UInt8] = [UInt8](repeating: 0, count: entropyJVMInt.count)
for i in 0 ..< entropyJVMInt.count {
    entropyJVMUInt8[i] = UInt8(truncatingIfNeeded: entropyJVMInt[i])
}
let mnemonicFromJVMEntropy = try! Mnemonic(entropy: entropyJVMUInt8)
print("JVM-Mnemonic: ", mnemonicFromJVMEntropy.mnemonic())
