import { client } from '../../client'

const fields = `
  _id,
  companyName,
  companyLogo
`

const CLIENTS_QUERY = `*[_type == "clients"]{${fields}}`

export async function getClients() {
  const data = await client.fetch(CLIENTS_QUERY)
  console.log('Clients Data:', JSON.stringify(data, null, 2))
  return data
}
