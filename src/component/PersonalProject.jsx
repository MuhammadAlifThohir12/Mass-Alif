import imgRest from "../assets/rest.png"
import rabbitMq from "../assets/rabbitmq.png"
import activeMq from "../assets/activemq.png"

const project = [
    {
        "projectName": "Api Bersama",
        "descProject": "REST API for booking and scheduling venue",
        "stack": "SpringBoot",
        "url": imgRest
    },
    {
        "projectName": "SpringBoot ActiveMQ",
        "descProject": "Using ActiveMQ for Queue",
        "stack": "SpringBoot",
        "url": activeMq
    },
    {
        "projectName": "SpringBoot RabbitMQ",
        "descProject": "Using RabbitMQ with SpringBoot",
        "stack": "SpringBoot",
        "url": rabbitMq
    }
];

const PersonalProject = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            Features Portfolios
                        </h2>
                        <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                            Crafted with skill and care to help our clients grow their business!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

                        {/* Api Bersama */}
                        <div className="space-y-4">
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                JabarCodingCamp.
                            </span>
                            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                Api Bersama
                            </h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                                REST API for venue booking and scheduling system built using Spring Boot.
                            </p>
                            <button
                                type="button"
                                className="py-1 px-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <a
                                    href="https://github.com/muhammadalifthohir/api-bersama"
                                    title="View project on GitHub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    role="button"
                                >
                                    View case study
                                </a>
                            </button>
                        </div>

                        {/* SpringBoot ActiveMQ */}
                        <div className="space-y-4">
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                MiniImplementation.
                            </span>
                            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                SpringBoot ActiveMQ
                            </h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                                Demonstration of message queue implementation using ActiveMQ with Spring Boot.
                            </p>
                            <button
                                type="button"
                                className="py-1 px-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <a
                                    href="https://github.com/muhammadalifthohir/springboot-activemq"
                                    title="View project on GitHub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    role="button"
                                >
                                    View case study
                                </a>
                            </button>
                        </div>

                        {/* SpringBoot RabbitMQ */}
                        <div className="space-y-4">
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                MiniImplementation.
                            </span>
                            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                SpringBoot RabbitMQ
                            </h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                                RabbitMQ message broker implementation in Spring Boot for reliable message delivery.
                            </p>
                            <button
                                type="button"
                                className="py-1 px-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <a
                                    href="https://github.com/muhammadalifthohir/springboot-rabbitmq"
                                    title="View project on GitHub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    role="button"
                                >
                                    View case study
                                </a>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default PersonalProject;
