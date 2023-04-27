export default function Button({ url, message }) {
  return (
    <div className="flex justify-center py-5 lg:py-8">
      <a
        href={url}
        target="_blank"
        className=" py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
      >
        {message}
      </a>
    </div>
  )
}
