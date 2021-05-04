import { TestBed } from '@angular/core/testing';

import { Experimental673Service } from './experimental673.service';

describe('Experimental673Service', () => {
  let service: Experimental673Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental673Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
