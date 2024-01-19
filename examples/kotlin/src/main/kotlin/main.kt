import cash.z.ecc.android.bip39.Mnemonics.MnemonicCode

val knownMnemonic = "salon zoo engage submit smile frost later decide wing sight chaos renew lizard rely canal coral scene hobby scare step bus leaf tobacco slice"
val mnemonicCode: MnemonicCode = MnemonicCode(knownMnemonic.toCharArray())
val entro = mnemonicCode.toEntropy()
