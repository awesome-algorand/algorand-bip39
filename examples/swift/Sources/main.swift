import Bip39

// Mnemonic phrase
let phrase = "salon zoo engage submit smile frost later decide wing sight chaos renew lizard rely canal coral scene hobby scare step bus leaf tobacco slice"

// Creating mnemonic. English wordlist by default
let mnemonic = try! Mnemonic(mnemonic: phrase.components(separatedBy: " "))

// 128 bit entropy
print("Entropy: ", mnemonic.entropy)
