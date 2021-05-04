import { TestBed } from '@angular/core/testing';

import { Experimental2721Service } from './experimental2721.service';

describe('Experimental2721Service', () => {
  let service: Experimental2721Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2721Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
