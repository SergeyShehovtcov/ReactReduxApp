import React, {useEffect} from "react";
import Repo from "./repo/Repo";
import "./main.less"
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);

    useEffect(() => {
        dispatch(getRepos())
    }, []);

    return(
        <div>
            {repos.map(repo =>
                <Repo key={repo.html_url} repo={repo} />
            )}
        </div>
    );
};

export default Main;