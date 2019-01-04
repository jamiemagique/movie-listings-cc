import React, { PureComponent } from 'react';

class Checkboxes extends PureComponent {
  onChange = event => {
    const { value, checked } = event.target;
    const { onChangeOpt } = this.props;
    if (onChangeOpt) onChangeOpt(value, checked);
  };

  render() {
    const { legend, items } = this.props;
    return (
      <fieldset>
        {legend && <legend>{legend}</legend>}
        {items.map(({ id, name }) => {
          return (
            <div key={id} className="form-checkbox">
              <input
                onChange={this.onChange}
                type="checkbox"
                id={id}
                name={id}
                value={id}
              />
              <label htmlFor={id}>{name}</label>
            </div>
          );
        })}
      </fieldset>
    );
  }
}

export default Checkboxes;
