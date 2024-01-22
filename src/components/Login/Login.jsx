
export const Login = ({onSubmit, ...props}) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-100 p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">GoogleFormと同じ名前を入力してください</h1>
                <form onSubmit={onSubmit}>
                    <label className="block mb-4">
                        Username:
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded"
                            name = "username"
                            defaultValue=""
                        />
                    </label>
                    <input
                        className="bg-blue-500 text-white p-2 rounded"
                        type="submit"
                        value="送信"
                    />
                </form>
            </div>
        </div>
    )
}