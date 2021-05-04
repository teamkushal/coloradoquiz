import { TestBed } from '@angular/core/testing';

import { Experimental2922Service } from './experimental2922.service';

describe('Experimental2922Service', () => {
  let service: Experimental2922Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2922Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
