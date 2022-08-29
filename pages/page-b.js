import { BaseLayout } from '../modules/BaseLayout'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Page = () => {
  return (
    <BaseLayout>
      <div className="w-80 m-auto">
        <motion.div layoutId="image">
          <Link
            legacyBehavior={false}
            href="/"
          >
            <div className="h-32 bg-gray-300"></div>
          </Link>
        </motion.div>

        <motion.div layoutId="button">
          <Link
            legacyBehavior={false}
            className="bg-gray-900 text-white p-4 text-center block rounded"
            href="/"
          >
            Go back
          </Link>
        </motion.div>
      </div>
    </BaseLayout>
  )
}

export default Page
