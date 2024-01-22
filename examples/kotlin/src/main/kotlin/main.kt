import cash.z.ecc.android.bip39.Mnemonics.MnemonicCode

val knownMnemonic = "salon zoo engage submit smile frost later decide wing sight chaos renew lizard rely canal coral scene hobby scare step bus leaf tobacco slice"
val mnemonicCode: MnemonicCode = MnemonicCode(knownMnemonic.toCharArray())
val entro = mnemonicCode.toEntropy()

// Entropy fom other libraries
val entropyFromJSAndSwift = intArrayOf(190, 159, 253, 41, 108, 12, 202, 186, 223, 81, 198, 251, 185, 4, 153, 91, 24, 45, 106, 200, 65, 129, 192, 141, 139, 1, 106, 177, 238, 253, 120, 206)
val bytes = entropyFromJSAndSwift.foldIndexed(ByteArray(entropyFromJSAndSwift.size)) { i, a, v -> a.apply { set(i, v.toByte()) } }
val mnemonicCodeFromJSAndSwift = MnemonicCode(bytes)

fun log(){
    println(entro)
    mnemonicCodeFromJSAndSwift.forEach { word ->
        println(word)
    }
}
