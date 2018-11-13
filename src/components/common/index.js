'use strict';

import React from "react";

export function spinnerLoader() {
    return (
        <div className="loader loader--full">
            <div className="loader__rects">
                <div className="loader__rect loader__rect--1"></div>
                <div className="loader__rect loader__rect--2"></div>
                <div className="loader__rect loader__rect--3"></div>
                <div className="loader__rect loader__rect--4"></div>
                <div className="loader__rect loader__rect--5"></div>
            </div>
        </div>
    )
}

export function noRecordFound(msg) {
    return (
        <div className="loader loader--full">
            <div className="loader__rects">
                <h1>{msg}</h1>
            </div>
        </div>
    )
}
