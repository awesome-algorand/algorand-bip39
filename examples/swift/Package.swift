// swift-tools-version: 5.9
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "TestBip",
    dependencies: [
        .package(url: "https://github.com/tesseract-one/Bip39.swift.git", from: "0.2.0")
    ],
    targets: [
        // Targets are the basic building blocks of a package, defining a module or a test suite.
        // Targets can depend on other targets in this package and products from dependencies.
        .executableTarget(
            name: "TestBip",
            dependencies: [
                 .product(name: "Bip39", package: "Bip39.swift")
            ]
            ),

    ]
)
