import Conversations from "./conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./Searchinput";

const Sidebar = () => {
    return (
        <div className="border-r border-slate-500 p-1 flex flex-col">
            <SearchInput/>
            <div className="divider px-3"></div>
            <Conversations/>
           
            <LogoutButton/> 
        </div>
    );
};
export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./conversations"
// import LogoutButton from "./LogoutButton"
// import SearchInput from "./Searchinput"

// const Sidebar = () => {
//     return (
//         <div className="border-r border-slate-500 p-1 flex flex-col">
//             <SearchInput/>
//             <div className="divider px-3"></div>
//             <Conversations/>
           
//             <LogoutButton/> 
//         </div>
//     );
// };
// export default Sidebar;