import { useWallet } from '@txnlab/use-wallet-react'
import algosdk from 'algosdk'

const APP_ID = 748497472
const ALGOD_SERVER = 'https://testnet-api.algonode.cloud'
const ALGOD_PORT = ''
const ALGOD_TOKEN = ''

const CONTRACT_ABI = {
  name: 'AgritraceContract',
  methods: [
    {
      name: 'register_batch',
      args: [
        { name: 'batch_id', type: 'string' },
        { name: 'farmer_name', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'crop_name', type: 'string' },
        { name: 'harvest_date', type: 'string' },
      ],
      returns: { type: 'string' },
    },
  ],
}

export function useAgritraceContract() {
  const { activeAccount, signTransactions } = useWallet()

  const registerBatch = async (
    batchId: string,
    farmerName: string,
    location: string,
    cropName: string,
    harvestDate: string
  ) => {
    if (!activeAccount) {
      throw new Error('No active wallet connected')
    }

    console.log('🚀 Starting transaction...')

    const algodClient = new algosdk.Algodv2(ALGOD_TOKEN, ALGOD_SERVER, ALGOD_PORT)
    const suggestedParams = await algodClient.getTransactionParams().do()

    const contract = new algosdk.ABIContract(CONTRACT_ABI)
    const method = contract.getMethodByName('register_batch')

    // Box storage cost
    const boxSize = farmerName.length + location.length + cropName.length + harvestDate.length + 10
    const boxMBR = 2500 + (400 * boxSize)

    console.log('💰 Box MBR:', boxMBR, 'microAlgos')

    // Create signer that WAITS for wallet approval
    const walletSigner = async (txnGroup: algosdk.Transaction[], indexesToSign: number[]) => {
      console.log('🔐 Requesting wallet signature for', indexesToSign.length, 'transactions...')
      
      const txnsToSign = indexesToSign.map(i => txnGroup[i])
      const encoded = txnsToSign.map(txn => algosdk.encodeUnsignedTransaction(txn))
      
      // THIS IS THE KEY: signTransactions returns a Promise that waits for user approval
      const signed = await signTransactions(encoded)
      
      console.log('✅ Wallet signed', signed.length, 'transactions')
      
      return signed.filter((s): s is Uint8Array => s !== null)
    }

    const atc = new algosdk.AtomicTransactionComposer()

    // Box reference
    const boxReference = {
      appIndex: APP_ID,
      name: new Uint8Array(Buffer.from(batchId, 'utf8')),
    }

    // Payment transaction for Box MBR
    const paymentTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      sender: activeAccount.address,
      receiver: algosdk.getApplicationAddress(APP_ID),
      amount: boxMBR,
      suggestedParams: suggestedParams,
    })

    // Add both transactions
    atc.addTransaction({
      txn: paymentTxn,
      signer: walletSigner,
    })

    atc.addMethodCall({
      appID: APP_ID,
      method: method,
      methodArgs: [batchId, farmerName, location, cropName, harvestDate],
      sender: activeAccount.address,
      suggestedParams: suggestedParams,
      boxes: [boxReference],
      signer: walletSigner,
    })

    console.log('📤 Executing atomic transaction...')

    // THIS WILL WAIT for wallet approval AND blockchain confirmation
    const result = await atc.execute(algodClient, 4)
    
    console.log('✅ Transaction confirmed!', result.txIDs)

    const txId = result.txIDs[1] // Method call transaction ID

    return { txId, batchId }
  }

  return { registerBatch, isConnected: !!activeAccount }
}
