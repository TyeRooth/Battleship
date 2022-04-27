import { sum } from "./index";

test('whether webpack config works', () => {
    expect(sum(1, 2)).toBe(3);
})