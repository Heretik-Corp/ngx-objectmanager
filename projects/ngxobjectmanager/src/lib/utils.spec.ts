import { toCamel } from './utils';

describe('toCamel', () => {
    it('should camel case properties', () => {
        const result = toCamel({ 'First': 'asdf' });
        expect(result['first']).toBe('asdf');
    });
    it('should camel case ID when it is at the end', () => {
        const result = toCamel({ 'ArtifactID': 'asdf' });
        expect(result.artifactId).toBe('asdf');
    });

    it('should camel case properties in arrays', () => {
        const result = toCamel({ 'First': [{ 'First': 'asdf' }] });
        expect(result.first[0].first).toBe('asdf');
    });

    it('should camel case nested object properties', () => {
        const result = toCamel({ 'First': { 'First': 'asdf' } });
        expect(result.first.first).toBe('asdf');
    });

});
