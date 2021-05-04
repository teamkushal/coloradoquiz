import { TestBed } from '@angular/core/testing';

import { Experimental3255Service } from './experimental3255.service';

describe('Experimental3255Service', () => {
  let service: Experimental3255Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3255Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
