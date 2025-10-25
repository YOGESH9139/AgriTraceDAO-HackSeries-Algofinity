import { useState } from 'react'
import algosdk from 'algosdk'

const APP_ID = 748497472  // YOUR APP ID HERE
const ALGOD_SERVER = 'https://testnet-api.algonode.cloud'
const ALGOD_PORT = ''
const ALGOD_TOKEN = ''

export function useGetBatchData() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getBatchData = async (batchId: string) => {
    setLoading(true)
    setError(null)

    try {
      const algodClient = new algosdk.Algodv2(ALGOD_TOKEN, ALGOD_SERVER, ALGOD_PORT)

      // Get the Box with the batch_id as the key
      const boxName = new Uint8Array(Buffer.from(batchId))
      
      const boxResponse = await algodClient.getApplicationBoxByName(APP_ID, boxName).do()
      
      // The value is stored as: "farmer_name|location|crop_name|harvest_date"
      const boxValue = Buffer.from(boxResponse.value).toString('utf-8')
      
      // Split by the "|" separator
      const parts = boxValue.split('|')
      
      if (parts.length !== 4) {
        throw new Error('Invalid batch data format')
      }

      return {
        batchId,
        farmerName: parts[0],
        location: parts[1],
        cropName: parts[2],
        harvestDate: parts[3],
      }
    } catch (err: any) {
      console.error('Error fetching batch data:', err)
      setError(err.message || 'Failed to fetch batch data')
      return null
    } finally {
      setLoading(false)
    }
  }

  return { getBatchData, loading, error }
}
