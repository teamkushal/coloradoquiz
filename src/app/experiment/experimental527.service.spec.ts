import { TestBed } from '@angular/core/testing';

import { Experimental527Service } from './experimental527.service';

describe('Experimental527Service', () => {
  let service: Experimental527Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental527Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
