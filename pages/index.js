import {BaseLayout} from '../modules/BaseLayout'
import {motion} from 'framer-motion'
import Link from 'next/link'

const Page = () => {
  return (
    <BaseLayout>
      <div className="lg:flex">
        <div className="flex-grow">
          <motion.div layoutId="image">
            <Link
              legacyBehavior={false}
              href="/page-b"
            >
              <div className="h-32 bg-gray-300"></div>
            </Link>
          </motion.div>
        </div>
        <div className="lg:w-[415px] lg:shrink-0">
          <motion.div layoutId="button">
            <Link
              legacyBehavior={false}
              className="bg-gray-900 text-white p-4 text-center block rounded"
              href="/page-b"
            >
              Show wrong animation
            </Link>
          </motion.div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Page
