import React, { PureComponent } from 'react';
import ReactInputRange from 'react-input-range';
import styles from './InputRange.module.css';

class InputRange extends PureComponent {
  render() {
    const { defaultValue, minValue, maxValue, step, id, label, onChange } = this.props;
    return (
      <div className="form-field">
        <label htmlFor={id}>{label}</label>
        <ReactInputRange
          onChange={onChange}
          value={defaultValue}
          minValue={minValue}
          maxValue={maxValue}
          step={step}
          classNames={{
            inputRange: styles.inputRange,
            track: styles.track,
            activeTrack: styles.activeTrack,
            sliderContainer: styles.sliderContainer,
            slider: styles.slider,
            labelContainer: styles.labelContainer,
            maxLabel: styles.maxLabel,
            minLabel: styles.minLabel,
          }}
        />
      </div>
    );
  }
}

export default InputRange;
