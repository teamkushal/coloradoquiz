import { TestBed } from '@angular/core/testing';

import { Experimental259Service } from './experimental259.service';

describe('Experimental259Service', () => {
  let service: Experimental259Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental259Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
