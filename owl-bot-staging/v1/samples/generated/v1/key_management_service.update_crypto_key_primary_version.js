// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name, cryptoKeyVersionId) {
  // [START kms_update_crypto_key_primary_version_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the [CryptoKey][google.cloud.kms.v1.CryptoKey] to update.
   */
  // const name = 'abc123'
  /**
   *  Required. The id of the child [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion] to use as primary.
   */
  // const cryptoKeyVersionId = 'abc123'

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function updateCryptoKeyPrimaryVersion() {
    // Construct request
    const request = {
      name,
      cryptoKeyVersionId,
    };

    // Run request
    const response = await kmsClient.updateCryptoKeyPrimaryVersion(request);
    console.log(response);
  }

  updateCryptoKeyPrimaryVersion();
  // [END kms_update_crypto_key_primary_version_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
