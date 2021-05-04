import { TestBed } from '@angular/core/testing';

import { Experimental3855Service } from './experimental3855.service';

describe('Experimental3855Service', () => {
  let service: Experimental3855Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3855Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
