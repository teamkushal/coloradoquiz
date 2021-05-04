import { TestBed } from '@angular/core/testing';

import { Experimental3744Service } from './experimental3744.service';

describe('Experimental3744Service', () => {
  let service: Experimental3744Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3744Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
