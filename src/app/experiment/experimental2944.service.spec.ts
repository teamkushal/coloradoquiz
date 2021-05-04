import { TestBed } from '@angular/core/testing';

import { Experimental2944Service } from './experimental2944.service';

describe('Experimental2944Service', () => {
  let service: Experimental2944Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2944Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
