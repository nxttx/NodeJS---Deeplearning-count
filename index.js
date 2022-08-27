import * as tf from "@tensorflow/tfjs";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({ units: 3, inputDim: 2, activation: "relu" }));
model.add(tf.layers.dense({ units: 1 }));
model.compile({ loss: "meanAbsoluteError", optimizer: "adam", metrics: "mae" });
model.summary();

model.getWeights();

// x and y 
const xs = tf.tensor2d([
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
  [2, 0],
  [2, 1],
  [3, 0],
  [3, 1],
  [4, 0],
  [4, 1],
]);
// result:  (x+y = result) 
const ys = tf.tensor2d([[0], [1], [1], [2], [2], [3], [3], [4], [4], [5]]);

// validation x and y 
const xTest = tf.tensor2d([
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 3],
  [0, 4],
]);
// validation result:  (x+y = result) 
const yTest = tf.tensor2d([[3], [4], [5], [5], [4]]);

// Train the model using the data.
model.fit(xs, ys, { epochs: 500, validationData: [xTest,yTest]}).then((history) => {

  //make graph 
  const { plot } = require("plot");
  require("@plotex/render-image");
  const data = {a: history.history.mae, b: history.history.val_mae}
  plot(data).renderImage("Training-and-Validation-Accuracy.png");
  

  // get literal data:
  model.predict(tf.tensor2d([[1, 1]])).data().then(
    (element) => {
      console.log(1 + "+" + 1);
      console.log(element[0]);
    });

  // Print result
  console.log(2 +'+' + 6);
  model.predict(tf.tensor2d([[2,6]])).print();
});
