import {methods, requestInit, urlBackend} from "./serviceUtil";

export async function getAllClients() {
    return await fetch(`${urlBackend}/getAllClients`, requestInit(methods.GET)).then(
        res =>
            res.json().then(data => {
                return data;
            })
    );
}

export async function getAllClientsByGenderMale() {
    return await fetch(`${urlBackend}/getAllClients/Male`, requestInit(methods.GET)).then(
        res =>
            res.json().then(data => {
                return data;
            })
    );
}

export async function getAllClientsByProvinceOntario() {
    return await fetch(`${urlBackend}/getAllClients/Ontario`, requestInit(methods.GET)).then(
        res =>
            res.json().then(data => {
                return data;
            })
    );
}
