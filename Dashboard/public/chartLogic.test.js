const { createGaugeChartConfig } = require('./chartLogic');

describe('createGaugeChartConfig', () => {
    it('should create a valid chart config for a given temperature', () => {
        const config = createGaugeChartConfig(20);

        expect(config.data.datasets[0].data).toEqual([20, 80]);
        expect(config.options.rotation).toBe(Math.PI);
        expect(config.options.circumference).toBe(Math.PI);
    });
});
