import { TestBed } from '@angular/core/testing';

import { Experimental388Service } from './experimental388.service';

describe('Experimental388Service', () => {
  let service: Experimental388Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental388Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
