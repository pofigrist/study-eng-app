import {Link} from "react-router-dom";
import React from "react";
import {Pages} from "../constants";

export const Header = () => (<nav>
    <ul>
        <li>
            <Link to={Pages.Main}>main</Link>
        </li>
        <li>
            <Link to={Pages.Train}>train</Link>
        </li>
    </ul>
</nav>)
