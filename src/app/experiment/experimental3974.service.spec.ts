import { TestBed } from '@angular/core/testing';

import { Experimental3974Service } from './experimental3974.service';

describe('Experimental3974Service', () => {
  let service: Experimental3974Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3974Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
