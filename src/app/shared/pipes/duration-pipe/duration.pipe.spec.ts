import {DurationPipe} from './duration-pipe.pipe';

describe('DurationPipe', () => {
  let durationPipe: DurationPipe;

  beforeEach(() => {
    durationPipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(durationPipe).toBeDefined();
  });

  it('should return duration in appropriate format `1h 3m`', () => {
    const duration = 66;

    const transformed = durationPipe.transform(duration);

    expect(transformed).toEqual('1h 6m');
  });

  it('should return duration in appropriate format `2m`', () => {
    const duration = 26;

    const transformed = durationPipe.transform(duration);

    expect(transformed).toEqual('26m');
  });

});
