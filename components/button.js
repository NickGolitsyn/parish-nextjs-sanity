import Link from 'next/link'

export default function Button({ url, message, newPage }) {
  if (newPage) {
    return (
      <div className="flex justify-center py-5 lg:py-8">
        <Link
          href={url}
          target='_blank'
          className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
          <span>{message}</span>
        </Link>
      </div>
    )
  }

  return (
    // <div className="flex justify-center py-5 lg:py-8">
    //   <a
    //     href={url}
    //     className=" py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
    //   >
    //     {message}
    //   </a>
    <div className="flex justify-center py-5 lg:py-8">
      <Link
        href={url}
        className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
        <span>{message}</span>
      </Link>
    </div>
  )
}
