export default function login() {
    return (
        <div className="w-full items-center">
            <div className="flex h-12 w-full pt-2 pl-2 justify-center">
                <h1 className="text-3xl font-semibold">
                    Login
                </h1>
            </div>
            <div className="flex flex-col pl-2 text-black items-center">
                <form className="justify-center" method="POST" action="api/auth/login">
                    <label className="text-md font-semibold text-white items-center">Email</label>
                    <br />
                    <input className="border-2 rounded-md p-2 items-center" type="email" />
                    <br />
                    <label className="text-md font-semibold text-white">Password</label>
                    <br />
                    <input className="border-2 rounded-md p-2 " type="password" />
                    <br />
                    <button className="bg-blue-500 text-white rounded-md p-2 mt-2" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}