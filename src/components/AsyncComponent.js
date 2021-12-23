import { Component } from 'react';

export const asyncComponent = ({ loader, loading: Loading }) => {
  return class AsyncComponent extends Component {
    state = {
      component: null, // component: Users
    };

    async componentDidMount() {
      const { default: component } = await loader();

      setTimeout(() => {
        this.setState({ component });
      }, 2000);
    }

    render() {
      const { component: LoadedComponent } = this.state;

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <Loading />
      );
    }
  };
};
