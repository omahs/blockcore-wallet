import { EnvironmentService } from './environment.service';
import { AddressValidationService } from './address-validation.service';
import { BTC44, BTC84, CITY, CRS, STRAX } from 'src/shared/networks';

describe('AddressValidationService', () => {
  let service: AddressValidationService;
  beforeEach(() => {
    service = new AddressValidationService(null);
  });

  it('Validate Bitcoin Bech32 address', () => {
    // expect(service.validate('bc1qa29jrfkt42d7w3zluh27x8ry0fra678928q4d5', new BTC84())).toBeTrue();
  });

  it('Validate Bitcoin Base58 address', () => {
    expect(service.validateByNetwork('1N9faSzFCHvQNdNtrqxMKzYdzE2WYNJ6DT', new BTC44())).toBeTrue();
  });

  it('Validate City Chain Base58 address', () => {
    const network = new CITY();
    expect(service.validateByNetwork('CPuzGKnZQBkFqPWThDh6F8Qb3YgPX1DeTr', network)).toBeTrue();
    expect(service.validateByNetwork('CSHCUaVbzNEjn2svthgCfvv6uvsVgopvAZ', network)).toBeTrue();
    expect(service.validateByNetwork('CJPFKjqjNW6LU8G4eNeSQgV8FAWYSLZmHp', network)).toBeTrue();
    expect(service.validateByNetwork('CPuzGKnZQBkFqPWThDh6F8Qb3YgPX1DeTr', network)).toBeTrue();

    // This will produce invalid prefix.
    expect(service.validateByNetwork('CPuzGKnZQBkFqPWThDh6F8Qb3YgPX1DeT', network)).toBeFalse();

    expect(service.validateByNetwork('CPuzGKnZQBkFqPWTh', network)).toBeFalse();
    expect(service.validateByNetwork('CPuzGKnZQBkFqPWThDh6F8Qb3YgPX1DeTrss', network)).toBeFalse();
    expect(service.validateByNetwork('CPuzGKnZQBkFqPWThDh6F8Qb3YgPX1De', network)).toBeFalse();

    expect(service.validate('CPuzGKnZQBkFqPWThDh6F8Qb3YgPX1DeTr').network.id).toBe('CITY');
  });

  it('Validate Cirrus Base58 address', () => {
    const network = new CRS();
    expect(service.validateByNetwork('CdA4YkbYvrWEQyptXdgqzR51RacpWnw5nc', network)).toBeTrue();
    expect(service.validateByNetwork('CaQpsUJHZSM8N6hZmnpT5k7vFyMeYdbW5q', network)).toBeTrue();
  });

  it('Validate Stratis Base58 address', () => {
    const network = new STRAX();
    expect(service.validateByNetwork('XReyTxFTRQKomq8x74aNNHmR6ZKE3Uquwg', network)).toBeTrue();
    expect(service.validateByNetwork('XDKw31DouKqZ2LnMnm7XbgzmTQNSFxnrMM', network)).toBeTrue();
    expect(service.validateByNetwork('XXzS9SU1BukHX4FDsU7doR63Qhbk2LSsQM', network)).toBeTrue();
    expect(service.validateByNetwork('XLjEnTqaroDqWdXeBt5cPP79pvYd48y1R7', network)).toBeTrue();
  });
});