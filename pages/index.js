import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
//////////////////////////////////////////////////////// Store
import Common from "../store/common";
const common = new Common();
//////////////////////////////////////////////////////// Component
import IndexView from "../component/indexView";

const initState = {};

class Home extends React.Component {
    static async getInitialProps(ctx) {
        var returnValue = {};
        returnValue.query = ctx.query;
        returnValue.headers = ctx.req.headers;
        returnValue.cookies = ctx.req.cookies;
        return returnValue;
    }
    constructor(props) {
        super(props);
        this.state = initState;
        console.log(props);
    }
    componentDidMount() {}
    render() {
        return (
            <>
                <IndexView />
            </>
        );
    }
}

export default Home;