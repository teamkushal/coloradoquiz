import { TestBed } from '@angular/core/testing';

import { Experimental3184Service } from './experimental3184.service';

describe('Experimental3184Service', () => {
  let service: Experimental3184Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3184Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
