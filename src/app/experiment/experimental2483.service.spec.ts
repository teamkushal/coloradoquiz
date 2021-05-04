import { TestBed } from '@angular/core/testing';

import { Experimental2483Service } from './experimental2483.service';

describe('Experimental2483Service', () => {
  let service: Experimental2483Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2483Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
