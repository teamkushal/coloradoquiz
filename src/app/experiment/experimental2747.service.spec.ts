import { TestBed } from '@angular/core/testing';

import { Experimental2747Service } from './experimental2747.service';

describe('Experimental2747Service', () => {
  let service: Experimental2747Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2747Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
