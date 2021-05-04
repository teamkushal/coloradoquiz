import { TestBed } from '@angular/core/testing';

import { Experimental146Service } from './experimental146.service';

describe('Experimental146Service', () => {
  let service: Experimental146Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental146Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
