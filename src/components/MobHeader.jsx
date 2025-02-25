import React from 'react'

const MobHeader = () => {
    return (
        <div className="fixed bottom-5 z-50 w-2/3 max-w-lg -translate-x-1/2 left-1/2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200/30 dark:border-gray-600/30 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow duration-300">
            <div className="grid h-full grid-cols-5 mx-auto">
                {/* Home Button */}
                <button
                    data-tooltip-target="tooltip-home"
                    type="button"
                    className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50/20 dark:hover:bg-gray-800/20 group rounded-lg"
                >
                    <svg
                        className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:filter group-hover:drop-shadow-glow"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span className="sr-only">Home</span>
                </button>
                <div
                    id="tooltip-home"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                    Home
                    <div className="tooltip-arrow" data-popper-arrow="" />
                </div>
                {/* Bookmark Button */}
                <button
                    data-tooltip-target="tooltip-bookmark"
                    type="button"
                    className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50/20 dark:hover:bg-gray-800/20 group rounded-lg"
                >
                    <svg
                        className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:filter group-hover:drop-shadow-glow"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 14 20"
                    >
                        <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
                    </svg>
                    <span className="sr-only">Bookmark</span>
                </button>
                <div
                    id="tooltip-bookmark"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                    Bookmark
                    <div className="tooltip-arrow" data-popper-arrow="" />
                </div>
                {/* New Post Button */}
                <button
                    data-tooltip-target="tooltip-post"
                    type="button"
                    className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50/20 dark:hover:bg-gray-800/20 group rounded-lg"
                >
                    <svg
                        className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:filter group-hover:drop-shadow-glow"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                        />
                    </svg>
                    <span className="sr-only">New post</span>
                </button>
                <div
                    id="tooltip-post"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                    New post
                    <div className="tooltip-arrow" data-popper-arrow="" />
                </div>
                {/* Search Button */}
                <button
                    data-tooltip-target="tooltip-search"
                    type="button"
                    className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50/20 dark:hover:bg-gray-800/20 group rounded-lg"
                >
                    <svg
                        className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:filter group-hover:drop-shadow-glow"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
                <div
                    id="tooltip-search"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                    Search
                    <div className="tooltip-arrow" data-popper-arrow="" />
                </div>
                {/* Settings Button */}
                <button
                    data-tooltip-target="tooltip-settings"
                    type="button"
                    className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50/20 dark:hover:bg-gray-800/20 group rounded-lg"
                >
                    <svg
                        className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:filter group-hover:drop-shadow-glow"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                        />
                    </svg>
                    <span className="sr-only">Settings</span>
                </button>
                <div
                    id="tooltip-settings"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                    Settings
                    <div className="tooltip-arrow" data-popper-arrow="" />
                </div>
            </div>
        </div>

    )
}

export default MobHeader
