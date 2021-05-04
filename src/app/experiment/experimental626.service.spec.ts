import { TestBed } from '@angular/core/testing';

import { Experimental626Service } from './experimental626.service';

describe('Experimental626Service', () => {
  let service: Experimental626Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental626Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
