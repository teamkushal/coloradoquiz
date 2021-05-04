import { TestBed } from '@angular/core/testing';

import { Experimental2695Service } from './experimental2695.service';

describe('Experimental2695Service', () => {
  let service: Experimental2695Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2695Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
