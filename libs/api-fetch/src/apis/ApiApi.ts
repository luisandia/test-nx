/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface CreateUserRequest {
    user?: User;
}

export interface DestroyUserRequest {
    id: string;
}

export interface PartialUpdateUserRequest {
    id: string;
    user?: User;
}

export interface RetrieveUserRequest {
    id: string;
}

export interface UpdateUserRequest {
    id: string;
    user?: User;
}

/**
 * 
 */
export class ApiApi extends runtime.BaseAPI {

    /**
     */
    async createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<User>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/accounts/users/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async createUser(requestParameters: CreateUserRequest = {}, initOverrides?: RequestInit): Promise<User> {
        const response = await this.createUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async destroyUserRaw(requestParameters: DestroyUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling destroyUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/accounts/users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async destroyUser(requestParameters: DestroyUserRequest, initOverrides?: RequestInit): Promise<void> {
        await this.destroyUserRaw(requestParameters, initOverrides);
    }

    /**
     */
    async listAPIRootV1sRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<any>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async listAPIRootV1s(initOverrides?: RequestInit): Promise<Array<any>> {
        const response = await this.listAPIRootV1sRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async listAccountsRootV1sRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<any>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/accounts/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async listAccountsRootV1s(initOverrides?: RequestInit): Promise<Array<any>> {
        const response = await this.listAccountsRootV1sRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async listUsersRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/accounts/users/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     */
    async listUsers(initOverrides?: RequestInit): Promise<Array<User>> {
        const response = await this.listUsersRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async partialUpdateUserRaw(requestParameters: PartialUpdateUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/accounts/users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async partialUpdateUser(requestParameters: PartialUpdateUserRequest, initOverrides?: RequestInit): Promise<User> {
        const response = await this.partialUpdateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async retrieveUserRaw(requestParameters: RetrieveUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling retrieveUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/accounts/users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async retrieveUser(requestParameters: RetrieveUserRequest, initOverrides?: RequestInit): Promise<User> {
        const response = await this.retrieveUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/accounts/users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit): Promise<User> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
