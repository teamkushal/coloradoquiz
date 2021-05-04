import { TestBed } from '@angular/core/testing';

import { Experimental2077Service } from './experimental2077.service';

describe('Experimental2077Service', () => {
  let service: Experimental2077Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2077Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
