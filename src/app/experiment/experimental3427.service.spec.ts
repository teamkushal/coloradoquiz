import { TestBed } from '@angular/core/testing';

import { Experimental3427Service } from './experimental3427.service';

describe('Experimental3427Service', () => {
  let service: Experimental3427Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3427Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
