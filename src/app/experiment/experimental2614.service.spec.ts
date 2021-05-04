import { TestBed } from '@angular/core/testing';

import { Experimental2614Service } from './experimental2614.service';

describe('Experimental2614Service', () => {
  let service: Experimental2614Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2614Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
