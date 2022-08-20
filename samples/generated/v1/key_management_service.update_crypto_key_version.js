// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(cryptoKeyVersion, updateMask) {
  // [START cloudkms_v1_generated_KeyManagementService_UpdateCryptoKeyVersion_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion  with
   *  updated values.
   */
  // const cryptoKeyVersion = {}
  /**
   *  Required. List of fields to be updated in this request.
   */
  // const updateMask = {}

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function callUpdateCryptoKeyVersion() {
    // Construct request
    const request = {
      cryptoKeyVersion,
      updateMask,
    };

    // Run request
    const response = await kmsClient.updateCryptoKeyVersion(request);
    console.log(response);
  }

  callUpdateCryptoKeyVersion();
  // [END cloudkms_v1_generated_KeyManagementService_UpdateCryptoKeyVersion_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
