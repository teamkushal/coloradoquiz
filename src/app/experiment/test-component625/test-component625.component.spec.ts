import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent625Component } from './test-component625.component';

describe('TestComponent625Component', () => {
  let component: TestComponent625Component;
  let fixture: ComponentFixture<TestComponent625Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent625Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
