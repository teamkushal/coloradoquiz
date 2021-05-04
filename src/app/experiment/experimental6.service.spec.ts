import { TestBed } from '@angular/core/testing';

import { Experimental6Service } from './experimental6.service';

describe('Experimental6Service', () => {
  let service: Experimental6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
