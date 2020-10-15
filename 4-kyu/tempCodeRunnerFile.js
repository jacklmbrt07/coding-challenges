    if (thouIdx != -1) {
        strArr[thouIdx] = strArr[thouIdx] * strArr[thouIdx - 1];
        strArr.splice(strArr[thouIdx - ], 1);
    }