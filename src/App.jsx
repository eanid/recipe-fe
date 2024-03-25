import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import Menu from "./pages/Menu";

const Profile = () => {
    return (
        <div>
            <Navbar />
            <h1 style={{ color: "black" }}>Profile</h1>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1 style={{ color: "black" }}>Home</h1>
            <p className="text-danger">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, error. Eveniet provident voluptatibus nobis facere quidem porro magni at, error omnis debitis quos ipsa modi enim nam, iure quasi sed est. Nobis inventore sunt aliquid perspiciatis cumque incidunt consequuntur enim similique laboriosam quasi adipisci reprehenderit dolorum tempore non, asperiores doloremque est iusto cum a unde fuga molestias nisi? Asperiores, tenetur excepturi assumenda placeat non nobis recusandae! Impedit praesentium odit molestiae, cumque tempore eveniet ea minima sint ad iure perspiciatis fugit ab quisquam ut, animi voluptas numquam sapiente saepe esse expedita facilis. Ratione magnam voluptas soluta magni sequi expedita officiis voluptates distinctio eos praesentium quia adipisci sit similique facere eius, ea unde explicabo. Nostrum, sit vero debitis ad similique recusandae, maiores asperiores modi deleniti dolore, optio molestias? Sed eos error deserunt, nulla nemo tempore voluptas magni quidem deleniti! Quod, enim architecto? Reiciendis dolores totam aperiam similique commodi saepe perspiciatis deleniti repellendus voluptas ducimus. Itaque pariatur odio officiis eaque laudantium molestiae magni iusto eos, suscipit et repudiandae? Magnam, beatae repellendus tempore numquam alias, nostrum nulla obcaecati dolorum necessitatibus, delectus corporis praesentium optio voluptatibus ut id! Corporis est fuga ut natus corrupti ipsum facilis maiores quam suscipit, commodi aperiam nobis nulla aliquam accusantium, adipisci doloremque veritatis ratione autem deleniti cumque eos. Laboriosam necessitatibus dignissimos nesciunt amet repudiandae minima. Et commodi iure at asperiores! Dolor sapiente sequi totam earum quasi, quod vitae enim soluta unde ducimus harum assumenda debitis! Nesciunt necessitatibus asperiores, fugiat ducimus maxime architecto debitis! Odio voluptatem tenetur voluptate numquam voluptates at quia rem officia deserunt minus? Ipsum necessitatibus iure eos, odio fugiat excepturi ullam repellat minima esse sapiente, quaerat exercitationem. Ipsum ab quibusdam autem perspiciatis nobis reprehenderit quos sed culpa est libero, id accusantium. Quaerat, inventore vitae maiores aliquam obcaecati temporibus consequuntur, fugit reiciendis amet assumenda minima eos blanditiis at corporis?</p>
            <p className="red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam esse quibusdam perspiciatis fugit numquam commodi voluptates assumenda ea, non unde repellendus totam molestias aspernatur voluptatem quo dignissimos. Impedit quidem officiis soluta tempore dignissimos distinctio saepe, itaque minus dolorem est neque officia natus laborum, ad libero vitae veritatis alias quia unde ullam facere aliquid quisquam esse placeat. Dolores sint soluta, possimus ipsam eaque quibusdam sed facere nulla aliquid, impedit reprehenderit autem voluptatum natus voluptatem minima officia laboriosam iusto adipisci corporis eos assumenda dolorum quos velit. Eaque culpa officia qui amet rem vitae? Perferendis modi doloremque nulla velit, explicabo distinctio sequi dolorem, nemo architecto corrupti sit doloribus consequuntur pariatur hic corporis? Molestias, id quibusdam aliquam, quam facilis omnis illum alias inventore tenetur facere minima quae aut, rem debitis aliquid? Voluptatum consectetur laboriosam beatae, ipsum corporis fuga maiores facilis id eaque. Quod excepturi, quos laboriosam earum voluptatum, magni tempora ex officia expedita velit aperiam incidunt eveniet nam natus. Laboriosam saepe necessitatibus dolores repellat, nam sunt. Quidem placeat necessitatibus quam, molestiae nostrum ipsa doloremque quod eum accusamus praesentium exercitationem, sint laborum aut temporibus, sequi eos fugit. Esse est quod soluta suscipit, mollitia sit quaerat doloremque asperiores quas corporis eos aut eius nobis voluptas?</p>
        </div>
    );
};



const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/home" replace={true} />}
                    />
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/menu" element={<Menu />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;