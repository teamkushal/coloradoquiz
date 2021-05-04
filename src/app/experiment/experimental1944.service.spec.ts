import { TestBed } from '@angular/core/testing';

import { Experimental1944Service } from './experimental1944.service';

describe('Experimental1944Service', () => {
  let service: Experimental1944Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1944Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
