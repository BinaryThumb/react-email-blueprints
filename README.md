# react-email-blueprints
:mailbox_with_mail: Collection of React components for server-side e-mail template rendering

## Installation
```
npm install react-email-blueprints
```

## Example
```javascript
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Layout, Body, Spacer, Logo, Widget, Footer, H2, H3 } from 'react-email-blueprints';

const MyEmail = function(props) {
  return (
    <Layout.Mail imageBase={props.imageBase}>
      <Body>
        <Spacer imageBase={props.imageBase} />
        <Logo imageBase={props.imageBase} />
        <Spacer imageBase={props.imageBase} />
        <Widget width="100%">
          <H2>This is an e-mail</H2>
          <H3>More text in this e-mail, much more text, much much more text.</H3>
        </Widget>
      </Body>
      <Footer imageBase={props.imageBase} />
      <Spacer imageBase={props.imageBase} />
    </Layout.Mail>
  );
};

ReactDOM.renderToStaticMarkup(<MyEmail imageBase="http://mysite.com" />);
```

## Alternatives
- Oy (https://github.com/revivek/oy): Another solution to render e-mails with React
- MJML (https://mjml.io/): If you don't like React, but want an easier way to describe e-mails in a markup language

## License
MIT
