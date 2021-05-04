import { TestBed } from '@angular/core/testing';

import { Experimental3962Service } from './experimental3962.service';

describe('Experimental3962Service', () => {
  let service: Experimental3962Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3962Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
