import { TestBed } from '@angular/core/testing';

import { Experimental3834Service } from './experimental3834.service';

describe('Experimental3834Service', () => {
  let service: Experimental3834Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3834Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
