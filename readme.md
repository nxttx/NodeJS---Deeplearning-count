# Deeplearing math sum calculator 
Nodejs application that trains a neural network and predicts the result to a math sum. 

---

Index.js is based on the example build by Jeff Prosise. (https://github.com/jeffprosise/Deep-Learning/blob/master/Simple%20Neural%20Network.ipynb) While Mr. Prosise example is made in pyton, this is made in NodeJS. 

## 1. Language choice
An application can be made in many different languages, but it is important that you choose the right language for the use case. In this case, this application was meant to get to know TensorFlowJS. There are several reasons to use NodeJS, javascript from TensorFlowJS.

The project for which this application was made had a few functional requirements, including the use of TensorFlow. TensorFlow itself has two different versions, namely a version for Python and a version for JavaScript. The Python version is a lot more extensive and has more options, but you cannot use the Python version for (web) apps. However, the JavaScript code is a lot faster, more convenient to use and has the advantage that it can be used in (web) apps. This allows us to easily create a web application later.

## 2. Differeces between AI, Machine Learning and Deep Learning
AI is the thinking of computers in such a way that the computer can mimic the behavior of humans. You could think of AI as a lot of if else statements. Such a pattern, usually made visible in an activity diagram, is the easiest way to make a computer display human behaviour. Namely, the behavior that the developer has come up with himself.

But that's not how all AI works, of course. You could think of artificial intelligence as an onion. The top shell is AI itself. After that comes machine learning and even more specifically of that is deep learning.

### 2.1 Machine Learning
Machine learning focuses on computers that solve complex tasks without being explicitly coded for it. You can put this in three categories: 
* Supervised learning;
* Semi-supervised learning;
* Unsupervised learning;
* Reinforcement Learning.

#### 2.1.1 Supervised learning
In Supervised Learning, you give the computer a model designed to 'teach' it how to respond to the data.

Once the model is in place, more data can be fed into the computer to see how well it responds - and the programmer/data scientist can confirm the computer's predictions or make corrections for incorrect answers. Imagine a programmer trying to teach a computer image recognition. He would input images and instruct the computer to classify each image, confirming or correcting each computer output.

Over time, this level of oversight helps fine-tune the model to something that can accurately process new datasets that follow the 'learned' patterns, but it doesn't work very efficiently.

#### 2.1.2 Semi-supervised learning
In semi-supervised learning, the computer is fed a mix of correctly labeled data and unlabeled data, and it looks for patterns on its own. The labeled data can be seen as the programmer's 'guidelines', but they do not provide corrections to the computer.

#### 2.1.3 Unsupervised learning
Unsupervised learning takes this a step further. This is because you give the computer a dataset without labels. By letting the computer do everything itself, it can find patterns itself, but these are not labeled. Only it sometimes happens that the computer finds patterns that are not visible to us or that we have not yet noticed ourselves.

#### 2.1.4 Reinforcement learning
In supervised and unsupervised learning, there is no 'consequence' for the computer if it doesn't understand or categorize data properly, but what if, like a child in school, it gets positive feedback if it does the right thing and negative feedback if it's wrong? is doing? The computer would presumably begin to figure out how to do specific tasks through trial and error, knowing that it is on the right track when it receives a reward (e.g., a score) that reinforces its "good behavior." That is reinforced learning.

## 2.2 Deep Learning
Deep learning is a subset of machine learning that uses neural networks to extract useful functions from raw data. Deep learning works by mimicking the structure of the human brain. It uses neural networks that figure out the rules without human intervention.

### 2.2.1 Neural networks and forward propagation
Neural networks consist of multiple layers of interconnected points, known as neurons, each of which builds on the previous layer. Each layer ensures that the prediction or categorization is refined or optimized. Moving from front to back of the network is called Forward Propagation. The first layer of neurons of a network is the input layer. This is where the deep learning network gets the data that it will eventually process in the hidden layers, which are the layers between the first and last set of neurons. Then when the data has been through the different layers, the output layer, the last set of neurons, makes a prediction. 

### 2.2.2 Backpropagation
In addition to Forward Propagation, there is also Back Propagation, which consists of algorithms that try to predict errors. It adjusts the weights as needed by moving backwards through the layers in an attempt to improve the model. Together, Forward and Back Propagation enable a neural network to make a prediction and, when necessary, correct itself for any errors. This makes the algorithm more accurate with enough time.
