import { TestBed } from '@angular/core/testing';

import { Experimental3069Service } from './experimental3069.service';

describe('Experimental3069Service', () => {
  let service: Experimental3069Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3069Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
