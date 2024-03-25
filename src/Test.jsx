import { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import axios from "axios";

function App() {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("Hallo");
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const ChangeTitle = () => {
        setTitle("Hallo from Button Function");
    };
    const Reset = () => {
        setTitle("Hallo");
        setCount(0);
        setError("");
        setData([]);
    };

    useEffect(() => {
        console.log("use Effect");
        console.log(import.meta.env.VITE_BASE_URL);
        getUser();
    }, []);

    useEffect(() => {
        console.log("data change");
        console.log(data);
    }, [data]);

    useEffect(() => {
        getUser();
    }, [count]);

    async function getUser() {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/${count ? count : ""}`
            );
            setError("");
            setData(count ? [response.data] : response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Header name={title} count={count} />
            <h1>{title}</h1>
            <div
                style={{
                    backgroundColor: "skyblue",
                    flexDirection: "row",
                    display: "flex",
                    padding: "50px",
                    gap: 50,
                }}
            >
                <button onClick={() => setCount((count) => count + 1)}>
                    detail user number is {count}
                </button>
                <button onClick={() => setTitle("Hallo from Button")}>
                    Change Title
                </button>
                <button onClick={ChangeTitle}>
                    Change Title With Function
                </button>
                <button onClick={Reset}>Reset</button>
            </div>
            {!count ? (
                // all user
                <div
                    className=""
                    style={{
                        backgroundColor: "skyblue",
                        padding: "50px",
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {data.length
                        ? data.map((item, index) => {
                              return (
                                  <div className="" key={index}>
                                      <h5>{item.name}</h5>
                                  </div>
                              );
                          })
                        : null}

                    {error ? (
                        <p
                            style={{
                                color: "salmon",
                                borderStyle: "solid",
                                borderRadius: "10px",
                                borderWidth: "2px",
                                height: "40px",
                                width: "280px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "600",
                                alignSelf: "center",
                                backgroundColor: "white",
                            }}
                        >
                            {error}
                        </p>
                    ) : null}
                </div>
            ) : (
                // detail user
                <div
                    className=""
                    style={{
                        backgroundColor: "skyblue",
                        padding: "50px",
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div className="">
                        <h5>{data[0].name}</h5>
                    </div>

                    {error ? (
                        <p
                            style={{
                                color: "salmon",
                                borderStyle: "solid",
                                borderRadius: "10px",
                                borderWidth: "2px",
                                height: "40px",
                                width: "280px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "600",
                                alignSelf: "center",
                                backgroundColor: "white",
                            }}
                        >
                            {error}
                        </p>
                    ) : null}
                </div>
            )}
        </>
    );
}

export default App;
