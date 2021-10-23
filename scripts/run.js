const hre = require('hardhat')

async function main() {
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
    [50, 35, 75, 30, 50], // Attack damage values
    'Samsquanch', //Boss attributes
    'https://i.pinimg.com/originals/13/8b/56/138b56debb87187c6ebebda9affdb459.jpg',
    99999,
    5,
  )
  await gameContract.deployed()
  console.log('Contract deployed to:', gameContract.address)

  let txn = await gameContract.mintCharacterNFT(2)
  await txn.wait()

  let returnedTokenUri = await gameContract.tokenURI(1)
  console.log('Token URI:', returnedTokenUri)

  txn = await gameContract.attackBoss()
  await txn.wait()

  txn = await gameContract.attackBoss()
  await txn.wait()

  txn = await gameContract.attackBoss()
  await txn.wait()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
