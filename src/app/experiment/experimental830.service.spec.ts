import { TestBed } from '@angular/core/testing';

import { Experimental830Service } from './experimental830.service';

describe('Experimental830Service', () => {
  let service: Experimental830Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental830Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
