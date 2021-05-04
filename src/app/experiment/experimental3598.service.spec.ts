import { TestBed } from '@angular/core/testing';

import { Experimental3598Service } from './experimental3598.service';

describe('Experimental3598Service', () => {
  let service: Experimental3598Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3598Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
