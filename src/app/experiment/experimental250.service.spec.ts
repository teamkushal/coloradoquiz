import { TestBed } from '@angular/core/testing';

import { Experimental250Service } from './experimental250.service';

describe('Experimental250Service', () => {
  let service: Experimental250Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental250Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
