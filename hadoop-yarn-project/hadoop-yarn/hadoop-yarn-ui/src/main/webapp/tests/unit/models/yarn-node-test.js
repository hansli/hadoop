/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('yarn-node', 'Unit | Model | Node', {
  // Specify the other units that are required for this test.
  needs: []
});

test('Basic creation test', function(assert) {
  let model = this.subject();

  assert.ok(model);
  assert.ok(model._notifyProperties);
  assert.ok(model.didLoad);
  assert.ok(model.totalVmemAllocatedContainersMB);
  assert.ok(model.vmemCheckEnabled);
  assert.ok(model.pmemCheckEnabled);
  assert.ok(model.nodeHealthy);
  assert.ok(model.lastNodeUpdateTime);
  assert.ok(model.healthReport);
  assert.ok(model.nmStartupTime);
  assert.ok(model.nodeManagerBuildVersion);
  assert.ok(model.hadoopBuildVersion);
});

test('test fields', function(assert) {
  let model = this.subject();

  assert.expect(4);
  Ember.run(function () {
    model.set("totalVmemAllocatedContainersMB", 4096);
    model.set("totalPmemAllocatedContainersMB", 2048);
    model.set("totalVCoresAllocatedContainers", 4);
    model.set("hadoopBuildVersion", "3.0.0-SNAPSHOT");
    assert.equal(model.get("totalVmemAllocatedContainersMB"), 4096);
    assert.equal(model.get("totalPmemAllocatedContainersMB"), 2048);
    assert.equal(model.get("totalVCoresAllocatedContainers"), 4);
    assert.equal(model.get("hadoopBuildVersion"), "3.0.0-SNAPSHOT");
  });
});

