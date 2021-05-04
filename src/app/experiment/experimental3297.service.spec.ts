import { TestBed } from '@angular/core/testing';

import { Experimental3297Service } from './experimental3297.service';

describe('Experimental3297Service', () => {
  let service: Experimental3297Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3297Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
