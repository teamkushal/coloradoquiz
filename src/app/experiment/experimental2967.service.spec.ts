import { TestBed } from '@angular/core/testing';

import { Experimental2967Service } from './experimental2967.service';

describe('Experimental2967Service', () => {
  let service: Experimental2967Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2967Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
