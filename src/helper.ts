/*
 * Copyright 2020 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {KeyManagementServiceClient} from './v1';
import * as gax from 'google-gax';
import {ClientOptions} from 'google-gax';
import * as path from 'path';

export class ImprovedKMSClient extends KeyManagementServiceClient {
  constructor(opts: ClientOptions) {
    super(opts);
    const nodejsProtoPath = path.join(__dirname, '..', 'protos', 'protos.json');
    const protos = this.gaxGrpc.loadProto(
      opts.fallback ? require('../rotos/protos.json') : nodejsProtoPath
    );
    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      opts.fallback = true;
    }
    const gaxModule = !isBrowser && opts.fallback ? gax.fallback : gax;
    // Put together the "service stub" for
    // google.iam.v1.IAMPolicy.
    const iamPolicyStub = this.gaxGrpc.createStub(
      opts.fallback
        ? (protos as protobuf.Root).lookupService('google.iam.v1.IAMPolicy')
        : // tslint:disable-next-line no-any
          (protos as any).google.iam.v1.IAMPolicy,
      opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const iamPolicyStubMethods = [
      'setIamPolicy',
      'getIamPolicy',
      'testIamPermissions',
    ];

    for (const methodName of iamPolicyStubMethods) {
      const innerCallPromise = iamPolicyStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          return stub[methodName].apply(stub, args);
        },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );
      this._innerApiCalls[methodName] = gaxModule.createApiCall(
        innerCallPromise,
        this.defaults[methodName],
        this._descriptors.page[methodName]
      );
    }
  }

  getIamPolicy(
    request: {resource: string},
    options: gax.CallOptions,
    callback: {}
  ) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.getIamPolicy(request, options, callback);
  }

  setIamPolicy(
    request: {resource: string},
    options: gax.CallOptions,
    callback: {}
  ) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.setIamPolicy(request, options, callback);
  }
  testIamPermissions(
    request: {resource: string},
    options: gax.CallOptions,
    callback: {}
  ) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.testIamPermissions(request, options, callback);
  }
}
