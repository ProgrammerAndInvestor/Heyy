import "./Aside.css"

const darkMode = () => {
    const html = document.getElementsByTagName("html")[0]
    html.classList.toggle("dark")
}

function Aside() {
    return (
        <aside className=" px-0 md:px-8 py-3 md:py-16 flex flex-row md:flex-col gap-6 md:gap-10 w-full items-center justify-end md:justify-start h-full md:items-start md:max-w-[179.13px] md:min-w-[179.13px] dark:bg-slate-900">
            {/* <button className="flex gap-2 aside-item items-center px-1 py-0.5 w-fit">
                <svg className="cursor-pointer w-3.5 md:w-5 h-3.5 md:h-5 dark:hidden" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.7917 33.9583L33.9583 32.7917L30.8333 29.6667V25H29.1667V30.3333L32.7917 33.9583ZM8.33333 35C7.41667 35 6.63194 34.6736 5.97917 34.0208C5.32639 33.3681 5 32.5833 5 31.6667V8.33333C5 7.41667 5.32639 6.63194 5.97917 5.97917C6.63194 5.32639 7.41667 5 8.33333 5H31.6667C32.5833 5 33.3681 5.32639 34.0208 5.97917C34.6736 6.63194 35 7.41667 35 8.33333V19.5C34.4722 19.25 33.9306 19.0347 33.375 18.8542C32.8194 18.6736 32.25 18.5417 31.6667 18.4583V8.33333H8.33333V31.6667H18.4167C18.5 32.2778 18.6319 32.8611 18.8125 33.4167C18.9931 33.9722 19.2083 34.5 19.4583 35H8.33333ZM8.33333 30V31.6667V8.33333V18.4583V18.3333V30ZM11.6667 28.3333H18.4583C18.5417 27.75 18.6736 27.1806 18.8542 26.625C19.0347 26.0694 19.2361 25.5278 19.4583 25H11.6667V28.3333ZM11.6667 21.6667H21.8333C22.7222 20.8333 23.7153 20.1389 24.8125 19.5833C25.9097 19.0278 27.0833 18.6528 28.3333 18.4583V18.3333H11.6667V21.6667ZM11.6667 15H28.3333V11.6667H11.6667V15ZM30 38.3333C27.6944 38.3333 25.7292 37.5208 24.1042 35.8958C22.4792 34.2708 21.6667 32.3056 21.6667 30C21.6667 27.6944 22.4792 25.7292 24.1042 24.1042C25.7292 22.4792 27.6944 21.6667 30 21.6667C32.3056 21.6667 34.2708 22.4792 35.8958 24.1042C37.5208 25.7292 38.3333 27.6944 38.3333 30C38.3333 32.3056 37.5208 34.2708 35.8958 35.8958C34.2708 37.5208 32.3056 38.3333 30 38.3333Z" fill="#000" />
                </svg>
                <svg className="cursor-pointer w-3.5 md:w-5 h-3.5 md:h-5 hidden dark:block" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.7917 33.9583L33.9583 32.7917L30.8333 29.6667V25H29.1667V30.3333L32.7917 33.9583ZM8.33333 35C7.41667 35 6.63194 34.6736 5.97917 34.0208C5.32639 33.3681 5 32.5833 5 31.6667V8.33333C5 7.41667 5.32639 6.63194 5.97917 5.97917C6.63194 5.32639 7.41667 5 8.33333 5H31.6667C32.5833 5 33.3681 5.32639 34.0208 5.97917C34.6736 6.63194 35 7.41667 35 8.33333V19.5C34.4722 19.25 33.9306 19.0347 33.375 18.8542C32.8194 18.6736 32.25 18.5417 31.6667 18.4583V8.33333H8.33333V31.6667H18.4167C18.5 32.2778 18.6319 32.8611 18.8125 33.4167C18.9931 33.9722 19.2083 34.5 19.4583 35H8.33333ZM8.33333 30V31.6667V8.33333V18.4583V18.3333V30ZM11.6667 28.3333H18.4583C18.5417 27.75 18.6736 27.1806 18.8542 26.625C19.0347 26.0694 19.2361 25.5278 19.4583 25H11.6667V28.3333ZM11.6667 21.6667H21.8333C22.7222 20.8333 23.7153 20.1389 24.8125 19.5833C25.9097 19.0278 27.0833 18.6528 28.3333 18.4583V18.3333H11.6667V21.6667ZM11.6667 15H28.3333V11.6667H11.6667V15ZM30 38.3333C27.6944 38.3333 25.7292 37.5208 24.1042 35.8958C22.4792 34.2708 21.6667 32.3056 21.6667 30C21.6667 27.6944 22.4792 25.7292 24.1042 24.1042C25.7292 22.4792 27.6944 21.6667 30 21.6667C32.3056 21.6667 34.2708 22.4792 35.8958 24.1042C37.5208 25.7292 38.3333 27.6944 38.3333 30C38.3333 32.3056 37.5208 34.2708 35.8958 35.8958C34.2708 37.5208 32.3056 38.3333 30 38.3333Z" fill="#fff" />
                </svg>
                <p className="text-xs md:text-sm dark:text-white">Settings</p>
            </button> */}

            <button onClick={darkMode} className="aside-item flex gap-2 items-center px-1 py-0.5 w-fit">
                <svg className="cursor-pointer w-3.5 md:w-5 h-3.5 md:h-5 dark:hidden" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 35C15.8333 35 12.2917 33.5417 9.375 30.625C6.45833 27.7083 5 24.1667 5 20C5 15.8333 6.45833 12.2917 9.375 9.375C12.2917 6.45833 15.8333 5 20 5C20.3889 5 20.7708 5.01389 21.1458 5.04167C21.5208 5.06944 21.8889 5.11111 22.25 5.16667C21.1111 5.97222 20.2014 7.02083 19.5208 8.3125C18.8403 9.60417 18.5 11 18.5 12.5C18.5 15 19.375 17.125 21.125 18.875C22.875 20.625 25 21.5 27.5 21.5C29.0278 21.5 30.4306 21.1597 31.7083 20.4792C32.9861 19.7986 34.0278 18.8889 34.8333 17.75C34.8889 18.1111 34.9306 18.4792 34.9583 18.8542C34.9861 19.2292 35 19.6111 35 20C35 24.1667 33.5417 27.7083 30.625 30.625C27.7083 33.5417 24.1667 35 20 35ZM20 31.6667C22.4444 31.6667 24.6389 30.9931 26.5833 29.6458C28.5278 28.2986 29.9444 26.5417 30.8333 24.375C30.2778 24.5139 29.7222 24.625 29.1667 24.7083C28.6111 24.7917 28.0556 24.8333 27.5 24.8333C24.0833 24.8333 21.1736 23.6319 18.7708 21.2292C16.3681 18.8264 15.1667 15.9167 15.1667 12.5C15.1667 11.9444 15.2083 11.3889 15.2917 10.8333C15.375 10.2778 15.4861 9.72222 15.625 9.16667C13.4583 10.0556 11.7014 11.4722 10.3542 13.4167C9.00694 15.3611 8.33333 17.5556 8.33333 20C8.33333 23.2222 9.47222 25.9722 11.75 28.25C14.0278 30.5278 16.7778 31.6667 20 31.6667Z" fill="#000" />
                </svg>
                <svg className="cursor-pointer w-3.5 md:w-5 h-3.5 md:h-5 hidden dark:block" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M19.9998 24.9998C21.3887 24.9998 22.5693 24.5137 23.5415 23.5415C24.5137 22.5693 24.9998 21.3887 24.9998 19.9998C24.9998 18.6109 24.5137 17.4304 23.5415 16.4582C22.5693 15.4859 21.3887 14.9998 19.9998 14.9998C18.6109 14.9998 17.4304 15.4859 16.4582 16.4582C15.4859 17.4304 14.9998 18.6109 14.9998 19.9998C14.9998 21.3887 15.4859 22.5693 16.4582 23.5415C17.4304 24.5137 18.6109 24.9998 19.9998 24.9998ZM19.9998 28.3332C17.6943 28.3332 15.729 27.5207 14.104 25.8957C12.479 24.2707 11.6665 22.3054 11.6665 19.9998C11.6665 17.6943 12.479 15.729 14.104 14.104C15.729 12.479 17.6943 11.6665 19.9998 11.6665C22.3054 11.6665 24.2707 12.479 25.8957 14.104C27.5207 15.729 28.3332 17.6943 28.3332 19.9998C28.3332 22.3054 27.5207 24.2707 25.8957 25.8957C24.2707 27.5207 22.3054 28.3332 19.9998 28.3332ZM8.33317 21.6665H1.6665V18.3332H8.33317V21.6665ZM38.3332 21.6665H31.6665V18.3332H38.3332V21.6665ZM18.3332 8.33317V1.6665H21.6665V8.33317H18.3332ZM18.3332 38.3332V31.6665H21.6665V38.3332H18.3332ZM10.6665 12.9165L6.45817 8.87484L8.83317 6.4165L12.8332 10.5832L10.6665 12.9165ZM31.1665 33.5832L27.1248 29.3748L29.3332 27.0832L33.5415 31.1248L31.1665 33.5832ZM27.0832 10.6665L31.1248 6.45817L33.5832 8.83317L29.4165 12.8332L27.0832 10.6665ZM6.4165 31.1665L10.6248 27.1248L12.9165 29.3332L8.87484 33.5415L6.4165 31.1665Z" fill="#fff"/>
                </svg>
                <p className="text-xs md:text-sm dark:hidden">Dark Mode</p>
                <p className="text-xs md:text-sm text-white hidden dark:block">Light Mode</p>
            </button>
        </aside>
    );
}

export default Aside;