import { TestBed } from '@angular/core/testing';

import { Experimental819Service } from './experimental819.service';

describe('Experimental819Service', () => {
  let service: Experimental819Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental819Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
