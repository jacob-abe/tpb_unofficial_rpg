const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('TPB_Main')
  const gameContract = await gameContractFactory.deploy(
    ['Julian', 'Ricky', 'Bubbles', 'Randy', 'Mr. Lahey'], // Names
    [
      'http://scratchy.trailerparkboys.com/wp-content/uploads/2016/04/Julian_title.jpg', // Images
      'http://images.backstreetmerch.com/storeimages/trailer-park-boys-custom-domain/custom-page/ricky.jpg',
      'https://cdn.quotesgram.com/img/61/4/1500749797-Bubbles_fromTrailerParkBoys.jpg',
      'https://cdn.quotesgram.com/small/58/62/124473115-randy-trailer-park-boys.jpg',
      'http://images.tritondigitalcms.com/6616/sites/160/2017/10/17074805/jim-lahey.jpg',
    ],
    [300, 100, 50, 200, 100], // HP values
    [50, 35, 75, 30, 50], //Attack values
    'Samsquanch', //Boss attributes
    'https://i.pinimg.com/originals/13/8b/56/138b56debb87187c6ebebda9affdb459.jpg',
    99999,
    5,
  )
  await gameContract.deployed()
  console.log('Contract deployed to:', gameContract.address)

  let txn
  txn = await gameContract.mintCharacterNFT(0)
  await txn.wait()
  console.log('Minted NFT #1')

  txn = await gameContract.mintCharacterNFT(1)
  await txn.wait()
  console.log('Minted NFT #2')

  txn = await gameContract.mintCharacterNFT(3)
  await txn.wait()
  console.log('Minted NFT #3')

  txn = await gameContract.mintCharacterNFT(4)
  await txn.wait()
  console.log('Minted NFT #4')

  console.log('Done deploying and minting!')

  txn = await gameContract.attackBoss()
  await txn.wait()

  txn = await gameContract.attackBoss()
  await txn.wait()

  console.log('Done initial attacking!')
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
