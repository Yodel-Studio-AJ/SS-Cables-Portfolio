import { getHeroSections } from '../sanity/lib/api/landingPage/heroSection'

export default async function Page() {
  await getHeroSections()

  return <div>page</div>
}
