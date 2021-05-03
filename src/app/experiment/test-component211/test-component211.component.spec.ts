import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent211Component } from './test-component211.component';

describe('TestComponent211Component', () => {
  let component: TestComponent211Component;
  let fixture: ComponentFixture<TestComponent211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent211Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
