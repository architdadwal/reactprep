Q1. What is React ?

Ans : React is a JS Library used to create single page applications.


Q2.  What are props ? 

  Ans: Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child.
  Basically arguments passed to react components.
 const myElement = <Car  brand ="Ford" />
  function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
