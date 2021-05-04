import { TestBed } from '@angular/core/testing';

import { Experimental3001Service } from './experimental3001.service';

describe('Experimental3001Service', () => {
  let service: Experimental3001Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3001Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
