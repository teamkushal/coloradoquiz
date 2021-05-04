import { TestBed } from '@angular/core/testing';

import { Experimental3101Service } from './experimental3101.service';

describe('Experimental3101Service', () => {
  let service: Experimental3101Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3101Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
