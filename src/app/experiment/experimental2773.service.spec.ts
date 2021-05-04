import { TestBed } from '@angular/core/testing';

import { Experimental2773Service } from './experimental2773.service';

describe('Experimental2773Service', () => {
  let service: Experimental2773Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2773Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
