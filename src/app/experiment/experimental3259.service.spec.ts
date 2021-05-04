import { TestBed } from '@angular/core/testing';

import { Experimental3259Service } from './experimental3259.service';

describe('Experimental3259Service', () => {
  let service: Experimental3259Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3259Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
