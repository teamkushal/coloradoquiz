import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent88Component } from './test-component88.component';

describe('TestComponent88Component', () => {
  let component: TestComponent88Component;
  let fixture: ComponentFixture<TestComponent88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent88Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
