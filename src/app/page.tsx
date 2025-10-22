import React from 'react';
import Card from './components/card/Card';

export default function Home() {
  return (
    <main className="page-content">
      <div className="main-grid">
        <Card
          image="https://www.sprayground.co.il/cdn/shop/products/4GyBnFtc.jpg?v=1661271711&width=1080"
          title="Everything T-Shirt"
          description="A comfortable t-shirt with the word 'Everything' printed on it."
          price={29.99}
        />
        <Card
          image="https://anjaly.com/wp-content/uploads/2025/02/6047C_1-600x720.jpg"
          title="Everything T-Shirt"
          description="A comfortable t-shirt with the word 'Everything' printed on it."
          price={29.99}
        /> 
        <Card
          image="https://www.aquamaster.net/wp-content/uploads/2024/12/Protect-our-Oceans-tshirt-front2.jpg"
          title="Everything T-Shirt"
          description="A comfortable t-shirt with the word 'Everything' printed on it."
          price={29.99}
        />
         <Card
          image="https://www.inkfactory.pk/wp-content/uploads/2020/06/Dotprint-tshirt-018.jpg"
          title="Everything T-Shirt"
          description="A comfortable t-shirt with the word 'Everything' printed on it."
          price={29.99}
        />
         <Card
          image="https://armapparels.com.pk/cdn/shop/files/adult-tshirt-tail-green_e8cf0c33-2e1a-4277-bad8-ae6e57aa3491.png"
          title="Everything T-Shirt"
          description="A comfortable t-shirt with the word 'Everything' printed on it."
          price={29.99}
        />
        <Card
          image="https://www.thethe.com/wp-content/uploads/2017/09/product_t_h_thethelogoblackt-768x785.jpg"
          title="Everything T-Shirt"
          description="A comfortable t-shirt with the word 'Everything' printed on it."
          price={29.99}
        />
      </div>
    </main>

  );
}
