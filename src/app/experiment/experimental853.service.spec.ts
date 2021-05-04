import { TestBed } from '@angular/core/testing';

import { Experimental853Service } from './experimental853.service';

describe('Experimental853Service', () => {
  let service: Experimental853Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental853Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
