import { TestBed } from '@angular/core/testing';

import { Experimental3204Service } from './experimental3204.service';

describe('Experimental3204Service', () => {
  let service: Experimental3204Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3204Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
