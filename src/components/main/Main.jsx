import React, {useEffect, useState} from "react";
import Repo from "./repo/Repo";
import "./main.less"
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        dispatch(getRepos());
    }, []);

    function searchHandler() {
        dispatch(getRepos(searchValue));
    }

    return(
        <div>
            <div className="search">
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text"
                    placeholder="Введите имя репозитория"
                    className="search-input"
                />
                <button
                    onClick={() => searchHandler()}
                    className="search-btn"
                >
                    Поиск
                </button>
            </div>
            {isFetching === false
             ?  repos.map(repo => <Repo key={repo.html_url} repo={repo} />)
             :  <div className="fetching">

                </div>
            }
        </div>
    );
};

export default Main;